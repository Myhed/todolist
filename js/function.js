import { deleteTaskListener } from './listener.js';
function createHeadTask(){
    const headTask = document.createElement('div');
    headTask.classList.add('headTask');
    return headTask;
}

function createDeleteTask(){
    const deleteTask = document.createElement('span');
    deleteTask.classList.add('deleteTask');
    return deleteTask;
}

export function createTask(taskDatas){
    const task = document.createElement('div');
    task.classList.add('task');
    const headTask = createHeadTask();
    const deleteTask = createDeleteTask();
    deleteTaskListener(deleteTask); 
    Object.keys(taskDatas)
    .filter(nameDetailTask => nameDetailTask !== 'description')
    .forEach(nameDetailTask => {
        const detailTask = document.createElement('p');
        const detailTextNode = document.createTextNode(taskDatas[nameDetailTask]);
        detailTask.appendChild(detailTextNode);
        headTask.appendChild(detailTask);
        task.appendChild(headTask);
    });
    task.appendChild(deleteTask);
    task.appendChild(document.createElement('hr'));
    return task;
}