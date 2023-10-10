


const stars=document.querySelectorAll('#star');

stars.forEach(star=>{
    let duration1=Math.random()*(1.2-0.6)+0.6;
    star.style.animation=`stars ${duration1}s  infinite linear`;
});

