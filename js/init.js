
function createElementH1(){
    const h1 = document.createElement('h1');
    const textNode = document.createTextNode('TodoList');
    h1.appendChild(textNode);
    return h1;
}

function createTaskContainer(){
    const taskContainer = document.createElement('div');
    taskContainer.classList.add('tasks');
    return taskContainer;
}

function createFormGroupContainer(done){
    const formGroup = document.createElement('div');
    done(formGroup);
    formGroup.classList.add('form-group');
}

function createFormulaire(done){
    let inputText;
    let inputDate;
    const form = document.createElement('form');
    form.action = '#';
    const button = document.createElement('button');
    const textNode = document.createTextNode('Save task');
    button.type = "submit";
    button.appendChild(textNode);

    createFormGroupContainer(function(formGroup){
        inputText = document.createElement('input');
        inputText.type = 'text';
        inputText.name = "task";
        inputText.placeholder = "Register a taks...";
        inputDate = document.createElement('input');
        inputDate.type = "date";
        inputDate.name = "name";

        done(inputText, inputDate, form);
        
        formGroup.appendChild(inputText);
        formGroup.appendChild(inputDate);

        form.appendChild(formGroup);
        form.appendChild(button);

    });

    return form;
}

export function todoList(done){
    const h1 = createElementH1();
    const taskContainer = createTaskContainer(); 
    createFormulaire(function(inputText, inputDate, form){
        done(form, taskContainer, {inputText, inputDate});
        document.body.appendChild(h1);
        document.body.appendChild(taskContainer);
        document.body.appendChild(form);
    });
}