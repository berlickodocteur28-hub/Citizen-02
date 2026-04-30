function login(){
let id = document.getElementById("demoID").value;
let error = document.getElementById("error");

if(!/^\d{9}$/.test(id)){
error.innerHTML = "ID must contain exactly 9 digits.";
error.style.color="red";
return;
}

if(id === "094794479"){
window.location.href="dashboard.html";
}else{
error.innerHTML = "Access Denied.";
error.style.color="red";
}
}
