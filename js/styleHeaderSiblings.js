function styleHeaderSiblings(){
    if(!document.getElementsByTagName) return false;
    var headers =document.getElementsByTagName("h1");
    var elem;
    for(var i=0; i<headers.length; i++){
        elem = getNextElement(headers[i].nextSibling);
        //elem.style.fontWeight = "bold";
        //elem.style.fontSize = "1.2em";
        //elem.setAttribute("class","intro");
        //elem.className += " intro";
        addClass(elem,"intro");
    }
}
function styleElementsSiblings(tag,theclass) {
    if(!document.getElementsByTagName) return false;
    var elems =document.getElementsByTagName(tag);
    var elem;
    for(var i=0; i<elems.length; i++){
        elem = getNextElement(elems[i].nextSibling);
        addClass(elem,theclass);
    }
}
function getNextElement(node) {
    if(node.nodeType == 1){
        return node;
    }
    if(node.nextSibling){
        return getNextElement(node.nextSibling);
    }
    return null;
}
//addLoadEvent(styleHeaderSiblings);
addLoadEvent(function(){
    styleElementsSiblings("h1","intro");
})