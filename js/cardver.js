function verifyCard(){
    var check1 = document.getElementById("checkpan");
    var error1 = document.getElementById("errorpan");
    var check2 = document.getElementById("checkdate");
    var error2 = document.getElementById("errordate");
    var check3 = document.getElementById("checkcvv");
    var error3 = document.getElementById("errorcvv");

    var pan = document.getElementById("pan").value;
    if((pan.length >= 16) && (pan.length <= 19)){
        //console.log("Cantidad de numeros validos " + pan);
        check1.style.display = 'block';
        error1.style.display = 'none';
    }else{
        //console.log("cantidad de numeros no validos " + pan);
        error1.style.display = 'block';
        check1.style.display = 'none';
    }
    var expiration = new Date("20"+ document.getElementById("year").value +"-"+ document.getElementById("month").value +"- 01");
    var today = new Date();
    if(expiration > today){
        //console.log("Fecha Valida " + expiration);
        check2.style.display = 'block';
        error2.style.display = 'none';
    }else{
        //console.log("Fecha no valida " + expiration);
        error2.style.display = 'block';
        check2.style.display = 'none';
    }
    var cvv = document.getElementById("cvv").value;
    if(((pan[0]+pan[1]) == "34") || ((pan[0]+pan[1])=="37")){
        if(cvv.length == 4){
            //console.log("CVV valido " + cvv);
            check3.style.display = 'block';
            error3.style.display = 'none';
        }else{
            //console.log("CVV invalido " + cvv);
            error3.style.display = 'block';
            check3.style.display = 'none';
        }
    }else{
        if(cvv.length == 3){
            //console.log("CVV valido " + cvv);
            check3.style.display = 'block';
            error3.style.display = 'none';
        }else{
            //console.log("CVV invalido " + cvv);
            error3.style.display = 'block';
            check3.style.display = 'none';
        }
    }
    
}

