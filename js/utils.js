
export function createTextNodesAndAppendToParent(parent, textsToConvert){
    textsToConvert.forEach(function(text) {
        parent.appendChild(document.createTextNode(text));
    });
}

export function createPopUp(){
    const popup = document.createElement('div');
    popup.setAttribute('id', 'popup');
    return popup;
}

export function actionTriggered(done){
    const actionTriggered = document.createElement('div');
    done(actionTriggered);
    actionTriggered.setAttribute('id','ActionTriggered');
}