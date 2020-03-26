var q = document.querySelector("h1");
var t = true;
setInterval(function(){
	if(t){
		q.style.background="Green";
		q.style.color="white";
		q.textContent="Welcome!";
	}
	else{
		q.style.background="Blue";
		q.style.color="white";
		q.textContent="Back!!!";
	}
	t=!t;
},700);
var q2 = document.querySelector("button");
q2.addEventListener("click",function(){
	alert("You Pressed Submit");
})
