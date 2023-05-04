const requestURL = "exhib.xml"; 

function Open(){
const xhr = new XMLHttpRequest(); 
 
xhr.open('GET', requestURL, false); 
xhr.send(); 
 
let xmlData = xhr; 
xmlData = (new DOMParser()).parseFromString(xhr.responseText, "text/xml"); 

let hashA = window.location.hash.substring(1);
let exhibition = xmlData.getElementById(hashA); 

document.getElementById('title').textContent=exhibition.getElementsByTagName('title')[0].textContent;
document.getElementById('text').textContent=exhibition.getElementsByTagName('text')[0].textContent;
document.getElementById('date').textContent=exhibition.getElementsByTagName('date')[0].textContent;

let picture = document.getElementById("main_img");
let newImage = exhibition.getElementsByTagName('pic')[0].textContent;
picture.src = newImage;
console.log(xmlData);
}

window.addEventListener('hashchange', Open);

Open();