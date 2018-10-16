function getNewContent() {
    var request = getHttpObject();
    if(request){
        request.open("GET","http://127.0.0.1:8020/gellery/example.txt",true);
        request.onreadystatechange = function () {
            if(request.readyState == 4){
                alert("Response Received");
                var para = document.createElement("p");
                var txt = document.createTextNode(request.responseText);
                para.appendChild(txt);
                document.getElementById("new").appendChild(para);
            }
        };
        request.send(null);
    }else{
        alert("对不起，您的浏览器不支持XMLHttpRequest");
    }
    alert("Function Done");
}
addLoadEvent(getNewContent);