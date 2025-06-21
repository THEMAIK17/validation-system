// this start if a person pressing the submit button
document.getElementById("consult").addEventListener("click",function(){
    let name=document.getElementById("name").value.trim();
    let ageInput=(document.getElementById("age").value.trim());
    let age= parseInt(ageInput);
    let resultText;
    // conditionals
    if(isNaN(age) ||  /\D/.test(ageInput)){
        resultText=`¡ERROR! please, enter a valid age in numbers`;
    }else if(age<18){
        resultText=`Hello ${name} you are a minor. Keep learning and enjoying the code `;
    }else{
        resultText=`Hello ${name} you are of legal age. Prepare for great opportunities in the world of programming `;
    }

    document.getElementById("resultText").textContent=resultText;

});
// this start when a person pressing the reset button 
document.getElementById("reset").addEventListener("click",function(){
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("resultText").textContent = "";  
})