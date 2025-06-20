
document.getElementById("consult").addEventListener("click",function(){
    let name=document.getElementById("name").value;
    let age=parseInt(document.getElementById("age").value);
    let resultText
    
    if(isNaN(age)){
        resultText=`¡ERROR! please, enter a valid age in numbers`;
    }else if(age<18){
        resultText=`Hello ${name} you are a minor. Keep learning and enjoying the code `;
    }else{
        resultText=`Hello ${name} you are of legal age. Prepare for great opportunities in the world of programming `;
    }

    document.getElementById("resultText").textContent=resultText;

});

document.getElementById("reset").addEventListener("click",function(){
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("resultText").textContent = "";  
})