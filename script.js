//your JS code here. If required.
const div=document.getElementById("output");
const message=document.getElementById("text");
const delay=document.getElementById("delay");
const btn=document.getElementById("btn");

btn.addEventListener("click",()=>{
	setTimeout(()=>{
		div.textContent=message.value
	},parseInt(`${delay.value}`))
	
})