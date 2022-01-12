'use strict'
{
  const min = document.getElementById('min');
  const sec = document.getElementById('sec');
  const time = document.getElementById('time');
  const btn = document.getElementById('btn');

  btn.addEventListener('click',() =>{
    let sumSec = parseInt(min.value,10)*60 + parseInt(sec.value,10);
    let calcTime = (sumSec+20)*10 + 60;
    let totalMin = Math.floor(calcTime / 60);
    let totalSec = calcTime % 60 ;    

    time.textContent = totalMin + "分" + totalSec.toString().padStart(2,"0") + "秒";
  })
}

// sumSec = parseInt(分,10)×60　＋　秒calcTime = (sumSec + 20秒)×10 + 60秒totalMin = Math.floor(calcTime/60)
// totalSec = calcTime % 60