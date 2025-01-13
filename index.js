const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value.trim() === '') {
        alert("You must enter something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        li.classList.add("task-item"); // Corrected this line
        listContainer.appendChild(li);

        // Create and add the delete span (×)
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    // Clear the input box
    inputBox.value = '';
    saveData();
}

// Event listener to toggle checked class and remove tasks
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {  // Corrected "SPAN" case
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Save data to local storage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Show saved tasks on page load
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
