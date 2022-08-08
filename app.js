// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let i = 1; i < 100; i++)
{
    if (i %2 == 0)
        continue;
    else 
        console.log(i);
}
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let i =1; i <= 100; i++)
{
    if (i %3 == 0 && i %5 == 0)
        console.log(`${i} = FIZZBUZZ`);
    else if (i %3 == 0)
        console.log(`${i} = FIZZ`);
    else if (i %5 == 0)
        console.log(`${i} = BUZZ`);
    else
        console.log(`${i} = ----`);
}

//Exercise 3 Part 1
console.log("EXERCISE 3/1 While:\n==========\n");
let i = 1;
while (i < 100)
{
    if (i %2 !== 0)
        console.log(i);
            i++;
}

console.log("EXERCISE 3/1 Do-While:\n==========\n");
let a = 1;
do 
{
    if (a %2 !== 0)
        console.log(a);
            a++;
}
    while (a < 100);

//Exercise 3 Part 2
console.log("EXERCISE 3/2 FIZZBUZZ While:\n==========\n");
let b = 1;
while (b <= 100)
{
    let result = "";
    if (b %3 == 0)
        result += "FIZZ";
    if (b %5 == 0)
        result += "BUZZ";
    console.log(b, result);
    b++;
}


console.log("EXERCISE 3/2 FIZZBUZZ Do-While:\n==========\n");
let c = 1;
do{
    let result = "";
    if (c %3 == 0)
        result += "FIZZ";
    if (c %5 == 0)
        result += "BUZZ";
    console.log(c, result);
    c++; 
} while (c <= 100);

//Exercise 4
console.log("EXERCISE 4:\n==========\n");
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let d = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for (i = 1; i <= d; i++)
{
    if (i == value){
        console.log(`Found ${value} in list`);
            break;
    }
    if (i == d)
    console.log(`Did not find ${value} in list`);
} 


//Exercise 5
console.log("EXERCISE 5:\n==========\n");
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let e = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for (let i = start; i <= e; i++)
{
    let result = "";
    if (i % fizzDivisor == 0)
        result += "FIZZ";
    if (i % buzzDivisor == 0)
        result += "BUZZ"
    console.log(i, result);
}
console.log(fizzDivisor, buzzDivisor);