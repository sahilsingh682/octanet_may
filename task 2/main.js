function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        var li = document.createElement("li");
        li.textContent = taskInput.value;
        
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-btn");


        var reButton = document.createElement("button");
        reButton.textContent = "reassign";
        reButton.classList.add("add-btn");
        deleteButton.onclick = function() {
            taskList.removeChild(li);
            taskList.appendChild(reButton);
            alert('task deleted!');
        };
        reButton.onclick = function() {
            taskList.removeChild(reButton);
            taskList.appendChild(li);
            alert('task reassigned!');

           
        };
        
        li.appendChild(deleteButton);
        taskList.appendChild(li);
        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
}
