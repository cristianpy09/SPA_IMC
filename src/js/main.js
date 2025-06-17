
function calculateIMC(){

    let myWeight=document.getElementById("weight").value
    let myHeight=document.getElementById("height").value


    let bmi = myWeight / (myHeight * myHeight)
    let result=document.getElementById("result") 
    result.innerHTML="su imc es:" +bmi.toFixed(2);

}

