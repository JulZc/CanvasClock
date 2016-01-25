function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
}

var ctx = canvas.getContext('2d');



ctx.strokeStyle = '28d1fa';
ctx.lineWidth = 17;
ctx.lineCap = "round";
ctx.shadowBlur = 15;
ctx.shadowColor = '28d1fa'

function degToRad(degree){
	var factor = Math.PI / 180;
	return dagree*factor;
}

function renderTime(){
	
	var now = new Date();
	var today = now.toDateString();
	var time = now.toLocaleTimeString();
	var hours = now.getHours();
	var minutes = now.getMinutes();
	var secounds = now.getSeconds();
	var millisecounds = now.getMilliseconds();
	var newSecounds = secounds + (millisecounds / 1000);
	
	//Background
	gradient = etx.createRadialGradient(250, 250, 5, 250, 250, 300);
	gradient.addColorStop(0, '09303a');
	gradient.addColorStop(1, 'black');
	ctx.fillStyle = gradient;
	ctx.fillRect(0, 0, 500, 500);
	
	//Hours
	ctx.beginPath();
	ctx.arc(250, 250, 200, degToRad(270), degToRad(hours*15-90));
	ctx.stroke;
	
	//Minutes
	ctx.beginPath();
	ctx.arc(250, 250, 200, degToRad(270), degToRad(minutes*6-90));
	ctx.stroke;
	
	//Secounds
	ctx.beginPath();
	ctx.arc(250, 250, 200, degToRad(270), degToRad(newSecounds*6-90));
	ctx.stroke;	
	
	//Date
	ctx.font = "25px Arial";
	ctx.fillStyle = '28d1fa';
	ctx.fillText(today, 160, 250);
	
	//Time
	ctx.font = "15px Arial";
	ctx.fillStyle = '28d1fa';
	ctx.fillText(time, 160, 280);	
}

setInterval(renderTime, 40);