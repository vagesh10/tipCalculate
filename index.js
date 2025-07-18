function isCalculate(event){
    event.preventDefault();
    const billAmount=parseFloat(document.getElementById("billAmount").value);
    const  percentageTip=parseFloat(document.getElementById("percentageTip").value);
    const tipValue = (document.getElementById("tipAmount"));
    const  totalValue = (document.getElementById("total"));
    const  errorMes=document.getElementById("errorMessage");
    console.log(billAmount);

    if(isNaN(billAmount) || isNaN(percentageTip) || billAmount <0 || percentageTip< 0){
        errorMes.textContent="it is an error type";
        billAmount.textContent="";
        percentageTip.textContent="";
        return ;

    }

   const  tip=(billAmount*percentageTip)/100;
    const  total=tip+billAmount;
    tipValue.value=tip.toFixed(2);
    totalValue.value=total.toFixed(2);
    

}

