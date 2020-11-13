
const startDragging = e => {
    e.dataTransfer.effecAllowed = 'move';
    e.dataTransfer.setData("Text", e.target.id);
    e.target.style.opacity = '0.4';
}

const endDragging = e => {
    e.target.style.opacity = '';
    e.dataTransfer.clearData("Data");
}

const dragIn = () => true




const checkBrowser = () => {
    if (
        (navigator.userAgent.toLowerCase().indexOf('msie ') > -1) ||
        ((navigator.userAgent.toLowerCase().indexOf('safari') > -1) && (navigator.userAgent.toLowerCase().indexOf('chrome') == -1))) {
        alert("Compability error. Try with another browser. ");
    }
}