document.addEventListener("DOMContentLoaded", () => {
  // your code here
    document.forms[0].addEventListener('submit',function (e){
        e.preventDefault();
        const taskText = document.getElementById('new-task-description').value;
        const tasksContainer = document.getElementById('tasks');
        const task = document.createElement('div')
        task.textContent = taskText;
        tasksContainer.appendChild(task)

    })
});
