async function getUsers() {

    let response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );

    let users = await response.json();

    let result = "";

    users.forEach(user => {
        result += `<p>${user.name}</p>`;
 });

    document.getElementById("output").innerHTML = result;
}

