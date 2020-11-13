const checkPos = element => {

    if ((document.getElementById(element).parentNode.id == 'A')) {

        let box = document.getElementById(element)
        box.style.backgroundColor = '#0000ff'
        box.style.margin = "0px"
        
    } else if ((document.getElementById(element).parentNode.id == 'B')) {
        let box = document.getElementById(element)
        box.style.backgroundColor = '#4020C0'
        box.style.margin = "0px"
        
    } else if ((document.getElementById(element).parentNode.id == 'C')) {
        let box = document.getElementById(element)
        box.style.backgroundColor = '#C06040'
        box.style.margin = "0px"
    } else if ((document.getElementById(element).parentNode.id == 'D')) {
        let box = document.getElementById(element)
        box.style.backgroundColor = '#ff8000'
        box.style.margin = "0px"
        
    }
}
