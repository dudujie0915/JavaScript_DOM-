function addLoadEvent(func){
	var oldonload = window.onload;
	if(typeof window.onload != 'function'){
		window.onload = func;
	}else{
		window.onload = function(){
			oldonload();
			func();
		}
	}
}

function insertAfter(newElement,targetElement){
	var parent = targetElement.parentNode;
	if(parent.lastChild == targetElement){
		parent.appendChild(newElement);
	}else{
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}

function preparePlaceholder(){
	if(!document.createElement) return false;
	if(!document.createTextNode) return false;
	if(!document.getElementById) return false;
	if(!document.getElementById("imagegallery")) return false;
	var placeholder = document.createElement("img");
	placeholder.setAttribute("id","placeholder");
	placeholder.setAttribute("src","http://placehold.it/400x300");
	placeholder .setAttribute("alt","my image gallery");
	var description = document.createElement("p");
	description.setAttribute("id","description");
	var desctext = document.createTextNode("Choose an image");
	description.appendChild(desctext);
	// var aBody = document.getElementsByTagName("body")[0];
	// aBody.appendChild(placeholder);
	// aBody.appendChild(description);
	var gallery = document.getElementById("imagegallery");
	insertAfter(placeholder,gallery);
	insertAfter(description,gallery);
}

function showPic(whichpic){
	if(!document.getElementById("placeholder")) return false;
	var source = whichpic.getAttribute("href");	
	var placeholder = document.getElementById("placeholder");
	if(placeholder.nodeName != "IMG") return false;
	placeholder.setAttribute("src",source);
	if(document.getElementById("description")){
		var text = whichpic.getAttribute("title")?whichpic.getAttribute("title"):"";
		var description = document.getElementById("description");		
		if(description.firstChild.nodeType == 3){
			description.firstChild.nodeValue = text;
		}
	}
	return true;
}


function prepareGellery(){
	if(!document.getElementsByTagName || !document.getElementById) return false;
	if(!document.getElementById("imagegallery"))return false;
	var gellery = document.getElementById("imagegallery");
	var links = gellery.getElementsByTagName("a");
	for(var i=0; i<links.length; i++){
		links[i].onclick = function(){
			//return !showPic(this);
			return showPic(this)?false:true;
		}
		links[i].onkeypress = links[i].onclick;
	}
}

addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGellery);



/*
function countBodyChildren(){
	var body_element = document.getElementsByTagName("body")[0];
	alert(body_element.childNodes.length);
	alert(body_element.nodeType);
}
window.onload = prepareGellery;
*/
