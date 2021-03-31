import { actionTriggered, createPopUp } from './utils.js';
import { removeTaskUi } from './ui.js';
import { transformHtmlElmentToArray } from './common.js';

export function deleteTaskListener(deleteTask, actionName){
    deleteTask.addEventListener('click', function(deleteTaskIconEvent){
        const popup = createPopUp(actionName); 
        let state;
        actionTriggered(contextActionTriggered => {
            contextActionTriggered.appendChild(popup);
            const popupFooterChildren = transformHtmlElmentToArray(popup.children[1].children);
            popupFooterChildren.forEach(popupFooterChild => {
                popupFooterChild.addEventListener('click', (buttonPopupEvent) => {
                    if(state) return;
                    state = removeTaskUi(buttonPopupEvent, deleteTaskIconEvent);
                    popup.classList.replace('popup-open', 'popup-close');
                    setTimeout(() => {
                        document.body.removeChild(contextActionTriggered);
                    }, 1500)
                });
                
            });
            document.body.appendChild(contextActionTriggered);
        });
    });
}