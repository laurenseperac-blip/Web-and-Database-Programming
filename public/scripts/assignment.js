class Assignment {
    constructor(description) {
        this.description = description;
    }
}

const assignmentForm = document.getElementById('assignmentForm');

if (assignmentForm) {
    assignmentForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const description = document.getElementById('assignment').value;

        const newAssignment = new Assignment(description);

        console.log("New Assignment:", newAssignment);
    });
}