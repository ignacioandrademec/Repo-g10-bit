"use strict"

const $l1 = document.getElementById("l1")



fetch("./file.json")
    .then((res)=> res.json())
    .then((info)=>{
    // console.log(data[0].student);
    for (let i = 0; i < info.length; i++) {
        console.log(info[i].student)

    // let listado = "";

    // for (let i = 0; i < info.length; i++) {
    //     listado += `<li>${info[i].student}</li>`
    // }

    // $l1.innerHTML = listado;

    }
}).catch((err)=>{
    console.log("error: ", err);
});



