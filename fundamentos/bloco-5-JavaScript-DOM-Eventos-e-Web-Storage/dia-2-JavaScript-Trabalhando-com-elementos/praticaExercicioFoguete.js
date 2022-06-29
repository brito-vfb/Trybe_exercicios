let elementAtual = document.getElementById("elementoOndeVoceEsta");
// console.log("elemento Atual",elementAtual);
let parenteAtual = elementAtual.parentElement;
parenteAtual.style.backgroundColor = "gray";
let firstChild = parenteAtual.firstElementChild;
firstChild.innerHTML = "<h2>Primeiro filho<\h2>";
elementAtual.previousElementSibling.style.color = "white";
elementAtual.nextSibling.textContent = "cheguei em atencao";
parenteAtual.children.item(2).innerHTML = "estou no terceiro filho";
let irmaoAonde = document.createElement("section")
irmaoAonde.innerText = "irmão de aonde você está";
parenteAtual.appendChild(irmaoAonde);
let filhoAonde = document.createElement("h2");
filhoAonde.innerText = "filho de a onde";
filhoAonde.style.backgroundColor = "green";
elementAtual.appendChild(filhoAonde);
let paiDoPai = parenteAtual.parentElement;
let count = parenteAtual.childElementCount;
//console.log(count);
let listCh = parenteAtual.children;
for (let index in listCh){
    if (index > 1){
        parenteAtual.removeChild(listCh[index])
    }
}