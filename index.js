var inputs =  document.querySelectorAll("input");
var currency ={
    from : "RUB",
    to :"USD"
}
function tofrom(from,to){
  var inputtwo = document.querySelector(".binput");
        var inputone = document.querySelector(".ainput");
  fetch(`https://api.exchangerate.host/latest?base=${currency.from}&symbols=${currency.to}`)
  .then(response => response.json())
  .then(data => {
   resultnum = data.rates[`${currency.to}`];
   var inputnum = parseInt(inputone.value);
   console.log(inputnum);
    inputnum*=resultnum;
  /* inputnum =  Math.round(inputnum);*/
  
    inputtwo.value = inputnum;
    if(inputone.value == "NaN"){
      inputone.value ="";
    }
    console.log(inputnum);
  });
}
function fromto(from,to){
  var inputtwo = document.querySelector(".binput");
        var inputone = document.querySelector(".ainput");
        fetch(`https://api.exchangerate.host/latest?base=${currency.to}&symbols=${currency.from}`)
        .then(response => response.json())
        .then(data => {
         resultnum = data.rates[`${currency.from}`];
         var inputnum = parseInt(inputtwo.value);
         console.log(inputnum);
          inputnum*=resultnum;
        /* inputnum =  Math.round(inputnum);*/
       
          inputone.value = inputnum;
          if(inputone.value == "NaN"){
            inputone.value ="";
          }
          console.log(inputnum);
        });
}
inputs.forEach((element) => {  
    element.addEventListener('keyup', (event)=>{
        var input1 = document.querySelector(".ainput").textContent;
        var input2 = document.querySelector(".binput").textContent;
        var inputtwo = document.querySelector(".binput");
        var inputone = document.querySelector(".ainput");
    
        var resultnum;
      if(event.target.className == "ainput"){
        fetch(`https://api.exchangerate.host/latest?base=${currency.from}&symbols=${currency.to}`)
        .then(response => response.json())
        .then(data => {
         resultnum = data.rates[`${currency.to}`];
         var inputnum = parseInt(event.target.value);
         console.log(inputnum);
          inputnum*=resultnum;
        /* inputnum =  Math.round(inputnum);*/
        
          inputtwo.value = inputnum;
          if(inputtwo.value == "NaN"){
            inputtwo.value ="";
          }
          console.log(inputnum);
        });
      }
     else if(event.target.className == "binput"){
        fetch(`https://api.exchangerate.host/latest?base=${currency.to}&symbols=${currency.from}`)
        .then(response => response.json())
        .then(data => {
         resultnum = data.rates[`${currency.from}`];
         var inputnum = parseInt(event.target.value);
         console.log(inputnum);
          inputnum*=resultnum;
        /* inputnum =  Math.round(inputnum);*/
       
          inputone.value = inputnum;
          if(inputone.value == "NaN"){
            inputone.value ="";
          }
          console.log(inputnum);
        });
      }
      
    });
    
  });

  var curs = document.querySelectorAll(".box1 > ul > li");

  curs.forEach((element) => {  
    element.addEventListener('click', (event) => {
        var curs2 = document.querySelectorAll(".box1 > ul > li");
        curs2.forEach((element)=>{
            console.log(element.style.backgroundColor);
            if(element.style.backgroundColor == 'rgb(131, 58, 224)'){
                element.style.backgroundColor = "White"; 
            }
        })
        event.target.style.backgroundColor = '#833ae0';
        currency.from = event.target.textContent;

        console.log(currency);
         tofrom(currency.from,currency.to);
         console.log(currency);
      
    });
  });
  var cursb = document.querySelectorAll(".box2 > ul > li");

  cursb.forEach((element) => {  
    element.addEventListener('click', (event) => {
        var curs2 = document.querySelectorAll(".box2 > ul > li");
        curs2.forEach((element)=>{
            console.log(element.style.backgroundColor);
            if(element.style.backgroundColor == 'rgb(131, 58, 224)'){
                element.style.backgroundColor = "White"; 
            }
        })
        event.target.style.backgroundColor = '#833ae0';
        currency.to = event.target.textContent;
      
     console.log(currency);
     fromto(currency.from,currency.to);
     console.log(currency);
    });
  });
  

  window.onload = function(){ 
    var inputtwo = document.querySelector(".binput");
    var inputone = document.querySelector(".ainput");

    inputone.value ="";
    inputtwo.value = "";
  };