document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("attendance-form");
    const statusDiv = document.getElementById("attendance-status");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;

        if (name.trim() !== "") {
            statusDiv.innerText = `Attendance recorded for ${name}`;
            form.reset();
        } else {
            statusDiv.innerText = "Please enter your name.";
        }
    });
});
