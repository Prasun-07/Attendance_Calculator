var names=localStorage.getItem("namesV");
var tCS=localStorage.getItem("tCSV");
var pCS=localStorage.getItem("pCSV");
var tComm=localStorage.getItem("tCommV");
var pComm=localStorage.getItem("pCommV");
var tGraphics=localStorage.getItem("tGraphicsV");
var pGraphics=localStorage.getItem("pGraphicsV");
var tMath=localStorage.getItem("tMathV");
var pMath=localStorage.getItem("pMathV");

//converting string to integer
    var tCSValue=parseInt(tCS);
    var pCSValue=parseInt(pCS);
    var tCommValue=parseInt(tComm);
    var pCommValue=parseInt(pComm);
    var tGraphicsValue=parseInt(tGraphics);
    var pGraphicsValue=parseInt(pGraphics);
    var tMathValue=parseInt(tMath);
    var pMathValue=parseInt(pMath);

//calculations
    var present = pCSValue+pCommValue+pGraphicsValue+pMathValue;
    var total = tCSValue+tCommValue+tGraphicsValue+tMathValue;
    var presentPercentage=Math.ceil((present/total)*100);
    var remainingPercentage=75-presentPercentage;
    document.querySelector(".welcome").textContent=`Welcome ${names} !`;

//checking for 75%
    if(presentPercentage>=75){
        document.querySelector(".attendancePercent").textContent=`Your attendance is above 75%. Good Job!!`;
    }
    else{
        var numberOFClassesRequired=Math.ceil((remainingPercentage*total*2)/100);
        document.querySelector(".attendancePercent").textContent=`Your attendance is below 75%.`
        document.querySelector(".classes").textContent=`You need to attend the next ${numberOFClassesRequired} classes to fulfill your attendance criteria.`
    }


//circular progress bar
    var progressBar=document.querySelector(".circular-progress");
    var valueContainer=document.querySelector(".value-container");
    var progressValue=0;
    var speed=20;
    var progress= setInterval(() => {
        progressValue++;
        valueContainer.textContent=`${progressValue}%`;
        progressBar.style.background = `conic-gradient( #7B66FF ${progressValue * 3.6}deg, #c6bdff ${progressValue * 3.6}deg)`;
        if(progressValue >= presentPercentage){
            clearInterval(progress);
        }
    },speed);

//cs horizontal progress bar
    var progressCS=document.querySelector(".progressCS-done");
    progressCS.style.width= `${(pCSValue / tCSValue) * 100}%`;
    progressCS.innerText = `${Math.ceil((pCSValue / tCSValue)*100)}%`;

//communication horizontal progress bar
    var progressComm=document.querySelector(".progressComm-done");
    progressComm.style.width= `${(pCommValue / tCommValue) * 100}%`;
    progressComm.innerText = `${Math.ceil((pCommValue / tCommValue)*100)}%`;

//graphics horizontar progress bar
    var progressGraphics=document.querySelector(".progressGraphics-done");
    progressGraphics.style.width= `${(pGraphicsValue / tGraphicsValue) * 100}%`;
    progressGraphics.innerText = `${Math.ceil((pGraphicsValue / tGraphicsValue)*100)}%`;

//graphics horizontar progress bar
    var progressMath=document.querySelector(".progressMath-done");
    progressMath.style.width= `${(pMathValue / tMathValue) * 100}%`;
    progressMath.innerText = `${Math.ceil((pMathValue / tMathValue)*100)}%`;





