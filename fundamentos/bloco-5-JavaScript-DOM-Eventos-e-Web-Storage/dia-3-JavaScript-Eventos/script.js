function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  function attributeHoliday(day) {
    const holiday = ["24" ,"25", "31"];
    for (let hDay of holiday) {
      if (day.innerHTML === hDay){
        day.classList.add("holiday")
      }
    }
  }
  function attributeFriday(day){
    const friday = ["4", "11", "18", "25"];
    for (let fDay of friday) {
      if (day.innerHTML === fDay) {
        day.classList.add("friday")
      }
    }
  }
  function createDaysOFTheMonth(){
    const daysList = document.getElementById("days");
    let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

    for (let day of decemberDaysList){
      const dayListItem = document.createElement('li');
      dayListItem.classList.add("day");
      dayListItem.innerHTML = day;
      attributeHoliday(dayListItem);
      attributeFriday(dayListItem);
      daysList.appendChild(dayListItem);
    }
  }
  function mudaCorFeriado() {
    const holiday = document.getElementsByClassName("holiday");
    for (let day of holiday){
      if (day.style.backgroundColor === "red"){ 
        day.style.backgroundColor = "rgb(238,238,238)";
      }else {
        day.style.backgroundColor = "red";
      }
    }
  }
  function createButtonFeriados(nomeBtn) {
    const btnContainer = document.querySelector(".buttons-container");
    console.log(btnContainer);
    const newBtn = document.createElement("button");
    newBtn.innerText = nomeBtn;
    newBtn.setAttribute("id","btn-holiday")
    newBtn.addEventListener("click",mudaCorFeriado)
    btnContainer.appendChild(newBtn);
  }
  function mudaTextFriday() {
    const friday = document.getElementsByClassName("friday");
    for (let day of friday){
      let intext = day.innerHTML;
      if ( intext.search("sexta-feira dia: ") !== -1){ 
        let dayWord = intext.split(": "); 
        day.innerHTML = dayWord[1];
      }else {
        let dayWord  = day.innerHTML
        day.innerHTML = `sexta-feira dia: ${dayWord}`;
      }
    }
  }
  function createButtonFriday(nomeBtn) {
    const btnContainer = document.querySelector(".buttons-container");
    console.log(btnContainer);
    const newBtn = document.createElement("button");
    newBtn.innerText = nomeBtn;
    newBtn.setAttribute("id","btn-friday")
    newBtn.addEventListener("click",mudaTextFriday)
    btnContainer.appendChild(newBtn);
  }
  function greaterDay(ent) {
    const entClass = ent.target.classList;
    for (let cls of entClass) {
      if (cls === 'day') {
        ent.target.style.fontSize = "30px";
      }
    }    
  }
  function lowerDay (ent) {
    const entClass = ent.target.classList;
    for (let cls of entClass) {
      if (cls === 'day') {
        ent.target.style.fontSize = "20px";
      }
    }
  }
  function lowerGeaterDay() {
    const btnDayContainer = document.getElementById("days");
    btnDayContainer. addEventListener ("mouseover",greaterDay,true);
    btnDayContainer. addEventListener ("mouseout",lowerDay,true);
  }
  function createTask (nome) {
    const taskContainer = document.querySelector(".my-tasks");
    let spanObject = document.createElement("span");
    spanObject.innerHTML = nome;
    taskContainer.appendChild(spanObject);
  }
  function attributeColor (cor) {
    const taskContainer = document.querySelector(".my-tasks");
    let divObject = document.createElement("div");
    divObject.className = "task";
    divObject.style.backgroundColor = cor;
    taskContainer.appendChild(divObject);
  }
  function taskSelector(ent){
    const entname = ent.target.tagName;
    const entClass = ent.target.classList[0];
    if (entname === 'DIV' && entClass === "task") {
      ent.target.className = "task-selected";
      selectedTask = ent.target;
    }else if (entname === 'DIV' && entClass === "task-selected") {
      ent.target.className = "task";
      selectedTask = null;
    }
  }
  function atributtTaskDay(ent){
    let dayColor = ent.target.style.color;
    console.log(dayColor);
    if (selectedTask != null &&  dayColor === "rgb(119, 119, 119)") {
      color = selectedTask.style.backgroundColor;
      ent.target.style.color = color;
    } else if (dayColor != "rgb(119, 119, 119)"){
      ent.target.style.color = "rgb(119, 119, 119)";
    }
  }
  function calendarTask(){
    const btnDayContainer = document.getElementById("days");
    btnDayContainer. addEventListener ("click",atributtTaskDay,true);
  }
  function attributeTaksSelector(){
    const taskContainer = document.querySelector(".my-tasks");
    taskContainer.addEventListener("click",taskSelector,true);
  }
  let selectedTask = null;
  createDaysOfTheWeek();
  createDaysOFTheMonth();
  createButtonFeriados("Feriados");
  createButtonFriday("Sexta-feira");
  lowerGeaterDay();
  createTask("cozinhar");
  attributeColor("blue");
  attributeTaksSelector();
  calendarTask();
  
  // Escreva seu código abaixo.