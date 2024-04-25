const dataAtual = new Date();
let dataObjetivo = prompt("Data final (formatoANO-MÊS-DIA, exemplo: 2024-05-30");
dataObjetivo = new Date(dataObjetivo+"t23:59:59");
let diasQueFaltam = Math.floor((dataObjetivo - dataAtual) / 86400000);
document.querySelector("#dias-restantes").textContent = diasQueFaltam+" dias";