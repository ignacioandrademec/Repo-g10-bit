"use strict"
const $p1 = document.getElementById("p1");
const $p2 = document.getElementById("p2");
const $l1 = document.getElementById("l1");
const $l2 = document.getElementById("l2");
const $f1 = document.getElementById("f1");

const miVariableConstante = "Contenido de la variable constante, desde JS"
const miArreglo = ["lista", "desde", "JavaScript"];
const miObjeto = {
    marca: "Ferrari",
    color: "rojo",
}


$p1.textContent = "Contenido desde JavaScript";
$p2.textContent = miVariableConstante;

// ------------------------------------------- L1 -----------------------------------

let items = "";

for (let i = 0; i < miArreglo.length; i++) {
    items += `<li>${miArreglo[i]}</li>`
}

$l1.innerHTML = items;

// ------------------------------------------- L2 -----------------------------------

$l2.innerHTML = `<li>${miObjeto.marca}</li><li>${miObjeto.color}</li>`;



// ------------------------------------------- APPIS ---------------------------------
/* Application Programming Interface */
/* Una Appi es tomar información por medio de un tercero, son interfaces por donde se comunican las aplicaciones */

fetch("https://random-d.uk/api/v2/random")
    .then((response)=>response.json())
    .then((data) => {
        console.log("data: ", data)
        $f1.innerHTML = `<img src="${data.url}" alt="${data.message}"></img>
            <figcaption>${data.message}</figcaption>` ;
    }).catch(()=>{
        alert("Ha ocurrido un error por favor intente mas tarde")
    });

// PROMESAS: Son un tipo de función, que nos permite hacer manejo de acciones que se toman un tiempo, ya que todo no pasa de inmediato. 

/*PROMISE:Tiene 3 estados, 1) Pending o Pendiente, 2) Resolve o Resuelta, 3) Reject o Rechazo*/