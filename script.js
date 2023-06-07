function volume_sphere() {
    //Write your code here
	let radius=document.getElementByTagName("input")[0].value;
	let value=4/3*3.14*radius;
	return value;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
