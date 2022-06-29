let title = document.createElement("h1");
title.innerHTML = "<h1>Exercício 5.2 - JavaScript DOM</h1>";
let body = document.getElementsByTagName("body")[0];
body.appendChild(title);
let main = document.createElement("main");
main.setAttribute("class", "main-content");
body.appendChild(main);
main = document.getElementsByTagName("main")[0];
let section1 = document.createElement("section");
section1.setAttribute("class","center-content");
main.appendChild(section1);
section1 = document.getElementsByTagName("section")[0];
let p1 = document.createElement("p");
p1.innerHTML = `Esse são os passos realizados até o presente momento no exercicio5/2 <br>🚀 Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;<br>
🚀 Adicione a tag main com a classe main-content como filho da tag body;<br>
🚀 Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;<br>
🚀 Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;<br>`;
section1.appendChild(p1);
let sectionLeft = document.createElement("section");
sectionLeft.setAttribute("class", "left-content");
let sectionRigth = document.createElement("section");
sectionRigth.setAttribute("class", "right-content");
main.appendChild(sectionLeft);
main.appendChild(sectionRigth);
sectionLeft = document.getElementsByClassName("left-content")[0];
sectionRigth = document.getElementsByClassName("right-content")[0];
let image = document.createElement("img");
image.setAttribute("src", "https://picsum.photos/200 ");
image.setAttribute("class", "small-image");
sectionLeft.appendChild(image);
let lista = document.createElement("ul");
sectionRigth.appendChild(lista);
lista = document.getElementsByTagName("ul")[0];
let liList = ["Um","Dois","Três","Quatro","Cinco","Seis","Sete","Oito","Nove","Dez"];
for (number of liList){
    let li = document.createElement("li");
    li.innerText = number;
    lista.appendChild(li);    
};
let h31 = document.createElement("h3");
let h32 = document.createElement("h3");
let h33 = document.createElement("h3");
h31.innerHTML = "<h3>🚀 Adicione a tag section com a classe left-content como filho da tag main criada no passo 2</h3>";
h32.innerHTML = "<h3>🚀 Adicione a tag section com a classe right-content como filho da tag main criada no passo 2</h3>";
h33.innerHTML = "<h3>🚀 Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5</h3>";
main.appendChild(h31);
main.appendChild(h32);
main.appendChild(h33);