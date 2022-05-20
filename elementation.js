function _id(id) {
    return document.getElementById(id);
}

function _cls(className) {
    return document.getElementsByClassName(className);
}

function callFn(obj, prop, propProps) {
    if(obj.hasOwnProperty(prop) && typeof obj[prop] === "function") return obj[prop](propProps);
}

function ELEMENTATION(elementIdOrClass, actionType, preAction, action, postAction){

    var type = 'class';
    if(elementIdOrClass.charAt(0) === '#') type = 'id';
    elementIdOrClass = elementIdOrClass.substring(1)

    if(type === 'id') individualAction(actionType, _id(elementIdOrClass), preAction, action, postAction)
    if(type === 'class') {
        var elements = _cls(elementIdOrClass);
        if(elements.length > 0 ) {
            for (let i = 0; i < elements.length; i++) {
                individualAction(actionType, elements[i], preAction, action, postAction);
            }
        }
        
    }

}

var ELM = {
    act : ELEMENTATION,
    actResponse : null
};

function individualAction(actionType, element, preAction, action, postAction) {

    function act(e, element) {

        // props
        var props = { e:e, el:element }

        // pre
        var preResponse = preAction(props);
        props.preResponse = preResponse;

        // action
        var actionResponse = action(e, element, props);

        // post
        props.actionResponse = actionResponse;
        return postAction(props);
        
    }

    switch (actionType) {
        case 'click':
            element.onclick = function(e) {
                ELM.actResponse = act(e, element);
            }
            break;
        
        case 'keyup':
            element.onkeyup = function(e) {
                ELM.actResponse = act(e, element);
            }
            break;
        
        case 'keydown':
            element.onkeydown = function(e) {
                ELM.actResponse = act(e, element);
            }
            break;
        
        case 'blur':
            element.onblur = function(e) {
                ELM.actResponse = act(e, element);
            }
            break;
        
        case 'change':
            element.onchange = function(e) {
                ELM.actResponse = act(e, element);
            }
            break;

        case 'submit':
            element.onsubmit = function(e) {
                ELM.actResponse = act(e, element);
            }
            break;
        
        case 'contextmenu':
            element.oncontextmenu = function(e) {
                ELM.actResponse = act(e, element);
            }
            break;

        case 'focus':
            element.onfocus = function(e) {
                ELM.actResponse = act(e, element);
            }
            break;
        
        case 'mousemove':
            element.onmousemove = function(e) {
                ELM.actResponse = act(e, element);
            }
            break;

        case 'mouseout':
            element.onmouseout = function(e) {
                ELM.actResponse = act(e, element);
            }
            break;

        case 'mouseover':
            element.onmouseover = function(e) {
                ELM.actResponse = act(e, element);
            }
            break;

        case 'hover':
            element.onmouseover = function(e) {
                ELM.actResponse = act(e, element);
            }
            break;

        case 'mousedown':
            element.onmousedown = function(e) {
                ELM.actResponse = act(e, element);
            }
            break;
    
        case 'mouseup':
            element.onmouseup = function(e) {
                ELM.actResponse = act(e, element);
            }
            break;

        case 'blur':
            document.getElementById('!').onmou = function(e) {
                ELM.actResponse = act(e, element);
            }
            break;
    
        default:
            break;
    }
}