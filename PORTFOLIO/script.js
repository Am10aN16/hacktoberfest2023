var hamburger = document.querySelector('.hide');
var cross = document.querySelector('.x');
var bar = document.querySelector('.links');
let btn1 = document.querySelector('#btn-hbg');
let btn2 = document.querySelector('#btn-x');

let f1 = ()=>{
    bar.style.display="block";
    btn1.style.display="none";
    btn2.style.display="block";
}
let f2 = ()=>{

    bar.style.display="none";
    btn1.style.display="block";
    btn2.style.display="none";
}

btn1.addEventListener('click',f1);
btn2.addEventListener('click',f2);