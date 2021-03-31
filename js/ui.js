export function removeTaskUi(buttonPopup, deleteTaskIconEvent, state = false){
    if(state = JSON.parse(buttonPopup.target.value)){
        const taskToRemove = deleteTaskIconEvent.target.parentNode;
        const tasks = deleteTaskIconEvent.target.parentNode.parentNode;
        tasks.removeChild(taskToRemove);
    }
    return state;
}