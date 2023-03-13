const openMenu = getElement('.donate-header-open-menu');
const closeMenu = getElement('.donate-header-close-menu');
const mainMenu = getElement('.donate-header-main-menu');


addListener(openMenu, 'click', function() {
    closeMenu.style.display = 'block';
    mainMenu.style.top = '0';
   
})

addListener(closeMenu,'click', function() {
    closeMenu.style.display = 'none';
    mainMenu.style.top = '-100%';
})
function getElement(id) {
    return document.querySelector(id);
}

function addListener(element, eventType, callBack) {
    element.addEventListener(eventType, callBack);
}