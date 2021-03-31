
export function createTextNodesAndAppendToParent(parent, textsToConvert){
    textsToConvert.forEach(function(text) {
        parent.appendChild(document.createTextNode(text));
    });
}

export function createPopUp(actionName){
    const popup = document.createElement('div');
    const popupFooter = document.createElement('div');
    const popupHeader = document.createElement('div');

    popup.setAttribute('id', 'popup');
    popup.classList.add('popup-open');
    const proceedButton = createButtonPopup('Continuer');
    proceedButton.name = "action popup";
    proceedButton.value = true;
    const annulerButton = createButtonPopup('Annuler');
    annulerButton.name = "action popup"
    annulerButton.value = false;
    
    popupFooter.appendChild(proceedButton);
    popupFooter.appendChild(annulerButton);
    
    popupHeader.innerText = actionName;
    
    popupFooter.setAttribute('id', 'popupFooter');
    popupHeader.setAttribute('id', 'popupHeader');


    popup.appendChild(popupHeader);
    popup.appendChild(popupFooter);
    return popup;
}

function createButtonPopup(textButton) {
    const buttonPopup = document.createElement('button');
    const textNodeButton = document.createTextNode(textButton);
    buttonPopup.appendChild(textNodeButton);
    return buttonPopup;
}

export function actionTriggered(done){
    const actionTriggered = document.createElement('div');
    done(actionTriggered);
    actionTriggered.setAttribute('id','ActionTriggered');
}