const assignmentForm = document.getElementById("assignmentForm");

const user = JSON.parse(localStorage.getItem("user"));

if (!user) {
    window.location.href = "login.html";
}

async function loadAssignments() {

    const response = await fetch(`/assignments/${user.userId}`);

    const assignments = await response.json();

    const assignmentList = document.getElementById("assignmentList");

    assignmentList.innerHTML = "";

    assignments.forEach(a => {

        assignmentList.innerHTML += `
            <li>
                ${a.assignment_name} - ${a.progress} - ${a.due_date}
            </li>
        `;
    });
}

if (assignmentForm) {

    assignmentForm.addEventListener("submit", async (event) => {

        event.preventDefault();

        const assignment = {
            assignment_name: document.getElementById("assignment").value,
            progress: document.getElementById("progress").value,
            due_date: document.getElementById("due_date").value,
            student_id: user.userId
        };

        const response = await fetch("/assignments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(assignment)
        });

        if (response.ok) {
            location.reload();
        }
    });
}

loadAssignments();