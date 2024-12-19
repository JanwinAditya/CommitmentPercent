//1.Take 2 names as input
var myName=prompt("Enter your Name");
var month=prompt("Enter your birth Month");

//2.Calculate a random number
var n = Math.random();

//3. Multiply it by 100
var commitPercent=Math.floor(100*n);

//4.Display
if (commitPercent === 100) {
    alert("You have a 100% score,you are definitely getting commited this year "+myName+"!");
}
if (commitPercent>70&&commitPercent<100){
    alert('The chances of '+myName+" being commited this year is "+commitPercent+"% ,There is a high chance of you getting commited this year");
}
if(commitPercent<=70&&commitPercent>0){
    alert("You have fair chance but now it depends upon luck,Your chances are "+commitPercent+"%");
}
else{
    alert('You have to remain single this year too!');
}