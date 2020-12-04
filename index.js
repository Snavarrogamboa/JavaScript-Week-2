var isHotOutside = true;
var isWeekday = true;
var hasMoneyInPocket = true;

var costOfMilk = 3
var moneyInWallet = 80
var thirstLevel = 3


//Will buy ice cream if it is hot outside and i have money in pocket
 var shouldIBuyIcecream = isHotOutside && hasMoneyInPocket
    if(shouldIBuyIcecream){
        console.log("I should buy ice cream today.");
    } else {
        console.log("I can't buy ice cream today.");
    }

//Will go swimming if it is hot outside and is not a weekday
var willGoSwimming = isHotOutside && !isWeekday
    if(willGoSwimming){
        console.log("I will go swimming today.");
    } else{
        console.log("I will not go swimming today.")
    }

//It is a good day if it is hot outside and I have money in pocket
var isGoodDay = isHotOutside && !isWeekday && hasMoneyInPocket
    if(isGoodDay){
        console.log("It is a good day.");
    } else {
        console.log("It is not a good day.")
    }

//Will buy milk if it is hot outside, I am thirsty, and I have enough money to buy at least two gallons of milk
var willBuyMilk = isHotOutside && (thirstLevel>= 3) && (moneyInWallet >= (2 * costOfMilk))
    if(willBuyMilk){
        console.log("I will buy milk today.");
    } else{
        console.log("I will not buy milk today.")
    }