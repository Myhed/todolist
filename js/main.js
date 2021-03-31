import { todoList } from './init.js';
// import { createTextNodesAndAppendToParent } from './utils.js';
import { createTask } from './function.js';
window.onload = function(){
    todoList(function(form, taskContainer, {inputText, inputDate}){
        form.addEventListener('submit', function(e){
            e.preventDefault();
            const inputTextValue = inputText.value;
            const inputDateValue = inputDate.value;
            const task = createTask({inputTextValue, inputDateValue});
            taskContainer.appendChild(task);
            console.log('inputText Value: ', inputText.value);
            console.log('inputText date: ', inputDate.value);
        });
    });
}