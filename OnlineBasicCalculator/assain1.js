function add(){
    var num1=document.getElementById("num1").value
    var num2=document.getElementById("num2").value
    
    var total=Number(num1)+Number(num2);
    
    var div2=document.getElementById("div2");
    div2.style.display="inline-block"
    var para=document.getElementById("result")
    para.append(`The Addition of ${num1} and ${num2} is : ${total}`) 
 
}
function sub(){
    var num1=document.getElementById("num1").value
    var num2=document.getElementById("num2").value 
    
    var total=Number(num1)-Number(num2);
    
    var div2=document.getElementById("div2");
    div2.style.display="inline-block"
    var para=document.getElementById("result")
    para.append(`The Subtrction of ${num1} and ${num2} is : ${total}`) 
    
}
function multi(){
    
    var num1=document.getElementById("num1").value
    var num2=document.getElementById("num2").value

    var total=Number(num1)*Number(num2);
    
    var div2=document.getElementById("div2");
    div2.style.display="inline-block"
    var para=document.getElementById("result")
    para.append(`The Multiplication of ${num1} and ${num2} is : ${total}`) 
   
}
function div(){
    var num1=document.getElementById("num1").value
    var num2=document.getElementById("num2").value

    var total=Number(num1)/Number(num2);
    
    var div2=document.getElementById("div2");
    div2.style.display="inline-block"
    var para=document.getElementById("result")
    para.append(`The Division of ${num1} and ${num2} is : ${total}`) 
  
}

var returnbtn=document.getElementById("returnbtn")
returnbtn.addEventListener("click",function()
{
    num1.value=``;
    num2.value=``;
    
    var hide=document.getElementById("div2");
    hide.style.display="none"
})