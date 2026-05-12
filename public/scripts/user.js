const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", async (event) => {

        event.preventDefault();

        const user = {
            firstName: document.getElementById("firstName").value,
            lastName: document.getElementById("lastName").value,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value
        };

        const response = await fetch("/users/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });

        const data = await response.json();

        if (response.ok) {

            localStorage.setItem("user", JSON.stringify(data));

            window.location.href = "assignments.html";

        } else {

            alert(data.message);
        }
    });
}

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", async (event) => {

        event.preventDefault();

        const user = {
            email: document.getElementById("email").value,
            password: document.getElementById("password").value
        };

        const response = await fetch("/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });

        const data = await response.json();

        if (response.ok) {

            localStorage.setItem("user", JSON.stringify(data));

            window.location.href = "assignments.html";

        } else {

            alert(data.message);
        }
    });
}