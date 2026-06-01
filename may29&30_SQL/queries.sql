


-- Query 1: User Upcoming Events

SELECT
u.user_id,
u.full_name,
u.city,
e.event_id,
e.title,
e.start_date
FROM Users u
JOIN Registrations r ON u.user_id = r.user_id
JOIN Events e ON r.event_id = e.event_id
WHERE e.status = 'upcoming'
AND u.city = e.city
ORDER BY e.start_date;


-- Query 2: Top Rated Events

SELECT
e.event_id,
e.title,
AVG(f.rating) AS avg_rating,
COUNT(f.feedback_id) AS feedback_count
FROM Events e
JOIN Feedback f ON e.event_id = f.event_id
GROUP BY e.event_id, e.title
HAVING COUNT(f.feedback_id) >= 10
ORDER BY avg_rating DESC;

-- Query 3: Inactive Users

SELECT *
FROM Users u
WHERE u.user_id NOT IN (
SELECT DISTINCT user_id
FROM Registrations
WHERE registration_date >= CURDATE() - INTERVAL 90 DAY
);

-- Query 4: Peak Session Hours

SELECT
e.event_id,
e.title,
COUNT(s.session_id) AS session_count
FROM Events e
JOIN Sessions s ON e.event_id = s.event_id
WHERE TIME(s.start_time) BETWEEN '10:00:00' AND '12:00:00'
GROUP BY e.event_id, e.title;

-- Query 5: Most Active Cities

SELECT
u.city,
COUNT(DISTINCT r.user_id) AS total_users
FROM Users u
JOIN Registrations r ON u.user_id = r.user_id
GROUP BY u.city
ORDER BY total_users DESC
LIMIT 5;


-- Query 6: Event Resource Summary

SELECT
e.title,
SUM(CASE WHEN r.resource_type='pdf' THEN 1 ELSE 0 END) AS pdf_count,
SUM(CASE WHEN r.resource_type='image' THEN 1 ELSE 0 END) AS image_count,
SUM(CASE WHEN r.resource_type='link' THEN 1 ELSE 0 END) AS link_count
FROM Events e
LEFT JOIN Resources r ON e.event_id = r.event_id
GROUP BY e.title;


-- Query 7: Low Feedback Alerts

SELECT
u.full_name,
e.title,
f.rating,
f.comments
FROM Feedback f
JOIN Users u ON f.user_id = u.user_id
JOIN Events e ON f.event_id = e.event_id
WHERE f.rating < 3;

-- Query 8: Sessions per Upcoming Event

SELECT
e.event_id,
e.title,
COUNT(s.session_id) AS total_sessions
FROM Events e
LEFT JOIN Sessions s ON e.event_id = s.event_id
WHERE e.status = 'upcoming'
GROUP BY e.event_id, e.title;


-- Query 9: Organizer Event Summary

SELECT
u.full_name,
e.status,
COUNT(e.event_id) AS total_events
FROM Users u
JOIN Events e ON u.user_id = e.organizer_id
GROUP BY u.full_name, e.status
ORDER BY u.full_name;


-- Query 10: Feedback Gap

SELECT
e.event_id,
e.title
FROM Events e
JOIN Registrations r ON e.event_id = r.event_id
LEFT JOIN Feedback f ON e.event_id = f.event_id
WHERE f.feedback_id IS NULL
GROUP BY e.event_id, e.title;

-- Query 11: Daily New User Count

SELECT
registration_date,
COUNT(*) AS total_users
FROM Users
WHERE registration_date >= CURDATE() - INTERVAL 7 DAY
GROUP BY registration_date
ORDER BY registration_date;


-- Query 12: Event with Maximum Sessions

SELECT
e.event_id,
e.title,
COUNT(s.session_id) AS total_sessions
FROM Events e
JOIN Sessions s ON e.event_id = s.event_id
GROUP BY e.event_id, e.title
HAVING COUNT(s.session_id) = (
SELECT MAX(session_count)
FROM (
SELECT COUNT(*) AS session_count
FROM Sessions
GROUP BY event_id
) t
);


-- Query 13: Average Rating per City

SELECT
e.city,
ROUND(AVG(f.rating),2) AS avg_rating
FROM Events e
JOIN Feedback f ON e.event_id = f.event_id
GROUP BY e.city;


-- Query 14: Most Registered Events

SELECT
e.event_id,
e.title,
COUNT(r.registration_id) AS total_registrations
FROM Events e
JOIN Registrations r ON e.event_id = r.event_id
GROUP BY e.event_id, e.title
ORDER BY total_registrations DESC
LIMIT 3;


-- Query 15: Event Session Time Conflict

SELECT
s1.event_id,
s1.title AS session1,
s2.title AS session2
FROM Sessions s1
JOIN Sessions s2
ON s1.event_id = s2.event_id
AND s1.session_id < s2.session_id
AND s1.start_time < s2.end_time
AND s1.end_time > s2.start_time;

-- Query 16: Unregistered Active Users

SELECT *
FROM Users u
WHERE registration_date >= CURDATE() - INTERVAL 30 DAY
AND user_id NOT IN (
SELECT user_id
FROM Registrations
);


-- Query 17: Multi-Session Speakers

SELECT
speaker_name,
COUNT(*) AS total_sessions
FROM Sessions
GROUP BY speaker_name
HAVING COUNT(*) > 1;

-- Query 18: Resource Availability Check

SELECT
e.event_id,
e.title
FROM Events e
LEFT JOIN Resources r ON e.event_id = r.event_id
WHERE r.resource_id IS NULL;


-- Query 19: Completed Events with Feedback Summary

SELECT
e.event_id,
e.title,
COUNT(DISTINCT r.registration_id) AS total_registrations,
ROUND(AVG(f.rating),2) AS avg_rating
FROM Events e
LEFT JOIN Registrations r ON e.event_id = r.event_id
LEFT JOIN Feedback f ON e.event_id = f.event_id
WHERE e.status = 'completed'
GROUP BY e.event_id, e.title;

-- Query 20: User Engagement Index

SELECT
u.user_id,
u.full_name,
COUNT(DISTINCT r.event_id) AS events_attended,
COUNT(DISTINCT f.feedback_id) AS feedbacks_submitted
FROM Users u
LEFT JOIN Registrations r ON u.user_id = r.user_id
LEFT JOIN Feedback f ON u.user_id = f.user_id
GROUP BY u.user_id, u.full_name;


-- Query 21: Top Feedback Providers
-
SELECT
u.user_id,
u.full_name,
COUNT(f.feedback_id) AS feedback_count
FROM Users u
JOIN Feedback f ON u.user_id = f.user_id
GROUP BY u.user_id, u.full_name
ORDER BY feedback_count DESC
LIMIT 5;

-- Query 22: Duplicate Registrations Check

SELECT
user_id,
event_id,
COUNT(*) AS registration_count
FROM Registrations
GROUP BY user_id, event_id
HAVING COUNT(*) > 1;

-- Query 23: Registration Trends

SELECT
DATE_FORMAT(registration_date,'%Y-%m') AS month,
COUNT(*) AS registration_count
FROM Registrations
GROUP BY DATE_FORMAT(registration_date,'%Y-%m')
ORDER BY month;

-- Query 24: Average Session Duration per Event

SELECT
e.event_id,
e.title,
ROUND(
AVG(
TIMESTAMPDIFF(
MINUTE,
s.start_time,
s.end_time
)
),2
) AS avg_duration_minutes
FROM Events e
JOIN Sessions s ON e.event_id = s.event_id
GROUP BY e.event_id, e.title;

-- Query 25: Events Without Sessions

SELECT
e.event_id,
e.title
FROM Events e
LEFT JOIN Sessions s ON e.event_id = s.event_id
WHERE s.session_id IS NULL;
