const inputVal = document.getElementsByClassName('inputVal')[0];
const addTaskBtn = document.getElementsByClassName('btn')[0];

let localItems = JSON.parse(localStorage.getItem('localItem'));

function SetArray() {
    if (localItems === null) {
        taskList = [];
    } else {
        taskList = localItems;
    }
}


addTaskBtn.addEventListener('click', function () {
    if (inputVal.value.trim() != 0) {
        SetArray();
        taskList.push(inputVal.value);
        localStorage.setItem('localItem', JSON.stringify(taskList));
    }
    inputVal.value = "";
    showItem();
});

function showItem() {
    SetArray();
    let html = '';
    let itemShow = document.querySelector('.todoLists');
    taskList.forEach((data, index) => {
        html += `
    <ul>${data}</ul>
    <button class="deleteTask" onClick="deleteItem(${index})">x</button>
    `;
    });
    itemShow.innerHTML = html;
}
showItem();

function deleteItem(index) {
    taskList.splice(index, 1);
    localStorage.setItem('localItem', JSON.stringify(taskList));
    showItem();
}

function clearTask() {
    localStorage.clear();
    showItem();
}
