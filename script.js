
const secondHand = document.querySelector('.second-hand');
const hourHand = document.querySelector('.hour-hand');
const clock = document.querySelector('.clock');
let button = document.querySelector('.btn');
// let button = document.getElementById('button'); 
let minHand = document.querySelector('.min-hand');

function setDate(){
	const now = new Date();
	const seconds = now.getSeconds();
	const secondsDegrees = ((seconds / 60) * 360) + 90;
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

	const hours = now.getHours();
	const hoursDegrees = ((hours / 12) * 360) +90;
	hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

	const minutes = now.getMinutes();
	const minutesDegrees = ((minutes / 60) * 360) + 90;
	minHand.style.transform = `rotate(${minutesDegrees}deg)`;


}
/* button.addEventListener("click",function(){
	if (clock.style.backgroundColor!=="lightblue"){
		clock.style.backgroundColor="lightblue";
}
else {
	clock.style.backgroundColor="red";
}
}); */

button.addEventListener("click",function(){
	if (clock.style.backgroundColor!=="rgb(255, 255, 255)"){
		clock.style.backgroundColor="rgb(255, 255, 255)";
}
else {
	clock.style.backgroundColor="rgb(255, 0, 255)";
}
});

setInterval(setDate, 1000);
