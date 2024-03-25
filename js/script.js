let userKm = prompt("Quanti chilometri devi percorrere?"); //string
    console.log(userKm, typeof userKm);
    userKm = parseInt(userKm) //number

let userAge = prompt("Quanti anni hai?"); //string
    console.log(userAge)
    userKm = parseInt(userKm) //number

const price = userKm * 0.21; //number
    console.log(price);

let descount = " "; //number

if(userAge < 18){
    descount = price * 0.20;
} else if (userAge > 65) {
    descount = price * 0.40 ;
} else {
    descount = " ";
}
console.log(descount, typeof descount);

let priceDescount = price - descount;
    console.log(priceDescount);
    

const finalPrice= priceDescount.toFixed(2);
    resultMessage = "Il tuo biglietto costerà: " + finalPrice;

    document.getElementById("result").innerHTML = resultMessage;
    






