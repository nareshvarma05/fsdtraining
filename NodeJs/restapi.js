const express = require('express');

const app = express();
const users = require('./users.json');

app.use(express.json());

app.get('/', (req, res) => {
    return res.status(200).json(users);
});

app.get('/users/:id', (req, res) => {
    const userId = Number(req.params.id);

    const user = users.find(user => user.id === userId);

    if (user) {
        return res.status(200).json(user);
    }

    return res.status(404).json({
        message: `User with id ${userId} does not exist`
    });
});

app.post('/users', (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        city: req.body.city
    };

    users.push(newUser);

    return res.json(newUser);
});
app.put('/users/:id', (req, res) => {
    const userId = Number(req.params.id);
    const user = users.find(user => user.id === userId);
    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    user.name = req.body.name || user.name;
    user.city = req.body.city || user.city;

    return res.status(200).json({
        message: "User updated successfully",
        user
    });
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});