
let c1 = document.getElementById("c1");
let c2 = document.getElementById("c2");
let c3 = document.getElementById("c3");
let c4 = document.getElementById("c4");
let box = document.getElementById("box");

c1.addEventListener('click',function(){

    box.style.background = "aqua";
    box.firstElementChild.style.color = 'black';
});

c2.addEventListener('click',function(){

    box.style.background = "rgb(83, 255, 112)";
    box.firstElementChild.style.color = 'black';
});

c3.addEventListener('click',function(){

    box.style.background = "rgb(153, 51, 255)";
    box.firstElementChild.style.color = 'white';
});

c4.addEventListener('click',function(){

    box.style.background = "rgb(255, 61, 90)";
    box.firstElementChild.style.color = 'white';
});