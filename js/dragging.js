const dragOver = e => {
    if ((e.target.className == "boxContainer") || (e.target.id == "origin"))
        return false;
    else
        return true;
}

const dropDraggedItem = e => {
    e.preventDefault();
    let draggedElement = e.dataTransfer.getData("Text");
    e.target.appendChild(document.getElementById(draggedElement));
    checkPos(draggedElement);
}