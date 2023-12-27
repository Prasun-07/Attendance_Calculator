document.getElementById('form').addEventListener('submit',function(event){
    event.preventDefault();

    var names=document.getElementById("name").value;
    var tCS=document.getElementById("tCS").value;
    var pCS=document.getElementById("pCS").value;
    var tComm=document.getElementById("tComm").value;
    var pComm=document.getElementById("pComm").value;
    var tGraphics=document.getElementById("tGraphics").value;
    var pGraphics=document.getElementById("pGraphics").value;
    var tMath=document.getElementById("tMath").value;
    var pMath=document.getElementById("pMath").value;

    localStorage.setItem("namesV",names);
    localStorage.setItem("tCSV",tCS);
    localStorage.setItem("pCSV",pCS);
    localStorage.setItem("tCommV",tComm);
    localStorage.setItem("pCommV",pComm);
    localStorage.setItem("tGraphicsV",tGraphics);
    localStorage.setItem("pGraphicsV",pGraphics);
    localStorage.setItem("tMathV",tMath);
    localStorage.setItem("pMathV",pMath);
    
    window.location.href="displayPage.html";
});
