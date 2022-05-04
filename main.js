//alert('Hello World!')
//alert('Extended alret2')

const daysInYear = 365.25;
const daysInWeek = 7;
const yearsInLifetime = 80
var weeksinayear=daysInYear/daysInWeek;
var avgweeks=weeksinayear*yearsInLifetime;
document.getElementById('avgans').innerHTML=Math.round(avgweeks)

var greeting="Hello";
var namee="world";
var full=greeting+namee;
//alert(greeting+" "+name)

//replace , reverse string
var x= full.replace(/l/g,'1');
var x= full.replace(/o/g,'0');
document.getElementById('strans').innerHTML=x
var rev=x.split('').reverse().join('')

document.getElementById('revstr').innerHTML=rev;


//Addition of 2 numbera -  debug code
var firstNumber = prompt("Enter the second number" , "")

var secondNumber = prompt("Enter the second number" , "");

var theTotal = Number(firstNumber) + Number(secondNumber);

document.getElementById('prompt-ans').innerHTML=(firstNumber + " added to " + secondNumber + " equals " +

theTotal);


//display larger number
function Displaynumber(){
    var num1=Number(document.getElementById('num1').value);
    var num2=Number(document.getElementById('num2').value);
    var larger = Math.max(document.getElementById('num1').value,document.getElementById('num2').value)
    document.getElementById('ques').innerHTML=("First Number is :" + " "+num1 + "<br>" + "Second Number is :" + " "+num2)
    document.getElementById('lg-ans').innerHTML="Larger number is :"+"  "+larger
}

//Use a loop to display the numbers in the range 0…20 that are multiples of 3.


for(var i=3;i<=20;i+=3){
  var ele=document.createElement('p')
  ele.style.backgroundColor="darksalmon"
  ele.style.padding="7px"
  ele.style.width="30px"
ele.innerHTML=i
document.body.appendChild(ele); 
    
}
function ascfunc(){
  var asc1=Number(document.getElementById('asc1').value)
  var asc2=Number(document.getElementById('asc2').value)
  var ascarr=new Array();
  ascarr=[asc1,asc2]
 ascarr=ascarr.sort();
 document.getElementById('asc-ans').innerHTML=ascarr;
 
 
}

//10 alerts with the values 0…9.
/*for(var i=0;i<=9;i++){
  
    alert(i)
}*/

//10th ques ans=292

var count=0; 
for (var half=0; half<=2; half++) { 
  for (var qtr=0; qtr<=4; qtr++) {
     for (var dime=0; dime<=10; dime++) { 
       for (var nick=0; nick<=20; nick++) {
          for (penny=0; penny<=100; penny++) { 
            if (50*half + 25*qtr + 10*dime + 5*nick + penny == 100) { 
              count++; } } } } } } alert(count);