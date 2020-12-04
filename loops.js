
// All even numbers from 0 to 100

var a = 0; 
while(a <= 100) {  
   console.log(a);
   a += 2; 
} 


// Every third number from 100 to 0

var i = 100
while (i >= 0) {
    console.log(i);
    i -= 3;
}

//Every other number form 1 to 100

for( let k = 1; k <= 100; k += 2){
    console.log(k);
}

//This might not be the best way to do this but it worked for me :)
//If divisible by 3 Hello, if divisible by 5 World, if divisible by both 5 and 3 Hello World, otherwise just print number 0 to 100

for (let n = 0; n <= 100; n++){
    if (n % 5 == 0 && (n % 3 == 0)){
        console.log("Hello World");
    }
    else if (n % 3 == 0){
        console.log("Hello");
    }
    else if (n % 5 == 0){
        console.log("World");
    }
    else {
        console.log(n);
    }
}
