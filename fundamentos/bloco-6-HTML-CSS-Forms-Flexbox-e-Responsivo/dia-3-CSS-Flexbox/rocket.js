function makeBiger(ent) {
    if (ent.target.tagName === 'IMG'){
        ent.target.style.height = "90px"
    }

}
function makeSmall(ent) {
    if (ent.target.tagName === 'IMG'){
        ent.target.style.height = "70px"
    }
}
function hoverItens() {
    const list = document.getElementsByClassName('hover');
    for (iten of list) {
        iten.addEventListener("mouseover",makeBiger,true);
        iten.addEventListener("mouseleave",makeSmall,true);
    }
}

window.onload = hoverItens();