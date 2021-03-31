import { actionTriggered, createPopUp } from './utils.js';

export function deleteTaskListener(deleteTask){
    deleteTask.addEventListener('click', function(){
        actionTriggered(function(actionTriggered){
            actionTriggered.appendChild(createPopUp());
            document.body.appendChild(actionTriggered);
        });      
    });
}