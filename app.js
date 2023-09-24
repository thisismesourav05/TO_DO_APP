

let newTask = document.getElementById('add-new-task');
let form = document.getElementById('add-new-box');
let todoUl = document.querySelector('#incomplete-ul');
let completeUl = document.querySelector('#complete-ul');


//functions
let createTask = function (task) {
    let listItem = document.createElement('li');
    let checkBox = document.createElement('input');
    let label = document.createElement('label');

    label.innerText = " " + task
    checkBox.type = 'checkbox';

    listItem.appendChild(checkBox);
    listItem.appendChild(label);

    return listItem;
}


let addTask = function (event) {
    event.preventDefault();
    let listItem = createTask(newTask.value);
    todoUl.appendChild(listItem);
    newTask.value = '';

    //bind the new list item to the incomplete list
    bindInCompleteItems(listItem, completeTask);
}

let completeTask = function () {
    let listItem = this.parentNode;
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = "Delete";
    deleteBtn.className = 'btn';
    deleteBtn.setAttribute("id", "delete-btn");
    listItem.appendChild(deleteBtn);

    let checkBox = listItem.querySelector('input[type="checkbox"]');
    checkBox.remove();
    completeUl.appendChild(listItem);
    bindCompleteItems(listItem, deleteTask);
}

let deleteTask = function () {
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
}

let bindInCompleteItems = function (taskItem, checkBoxClick) {
    let checkBox = taskItem.querySelector('input[type="checkbox"]')
    checkBox.onchange = checkBoxClick;
}

let bindCompleteItems = function (taskItem, deleteButtonClick) {
    let deleteButton = taskItem.querySelector('#delete-btn');
    deleteButton.onclick = deleteButtonClick;
}

for (let i = 0; i < todoUl.children.length; i++) {
    bindInCompleteItems(todoUl.children[i], completeTask);   
}

for (let i = 0; i < completeUl.children.length; i++) {
    bindCompleteItems(completeUl.children[i], deleteTask); 
}


form.addEventListener('submit', addTask);
