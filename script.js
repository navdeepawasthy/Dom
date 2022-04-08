//Q1: Accessing the p tag having id ="text"

let a = document.getElementById("text");
console.log(a);



//Q2. Accessing h1 

let b= document.getElementsByTagName("h1");
console.log(b);
console.log(b[0].innerText);



//Q3. accessing element having class name= "box"

let c=document.getElementsByClassName("box");
console.log(c);
console.log(c[0].innerText);



//Q4 Changing "navdeep awasthy" in h1 to "Hey Mr navdeep awasthy :)"

let d=document.getElementsByTagName("h1")
console.log(d[0].innerText="Hey Mr. navdeep Awasthy"); 



//Q5 When user clicks on the button , the 3 cards direction changes


function dirChange(){
    document.getElementById("flexChange").style.flexDirection="column";
}


//Q6 difference between Window and document

// Window object : It is the top most object and outermost element of the object hierarchy as shown in Figure 1.
// Document object : Each HTML document that gets loaded into a window becomes a document object. The document contains the contents of the page. Using document object, JavaScript can modify, add and delete the HTML elements, attributes CSS styles in the page
// The window object represents a window/tab containing a DOM document where as document object is property of window object that points to the DOM document loaded in that window.
// You can access a document object either using window.document property or using document object directly as window is global object.
// The other major difference is that both window object and document object have properties and methods. Few method names are same in both objects but with different behavior. In the below example window.open() opens a new tab or window and document.open() creates a blank document within the window


// Q7 "<h1> Add one style attribute and give text color as red and id attribute and give the id value as ""heading"" in the above given h1 tag using DOM functions"

let f=document.getElementsByTagName("h1")[0];
f.setAttribute("id","heading")
document.getElementById("heading").style.color="violet";



//Q8. Change text on clicking button

function changeText(){
    document.getElementById("changeBut").innerText="Welcome to Elevation Academy";
}


//Q9 Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second


function clock(){
let hrs= document.getElementById("hour");
let min= document.getElementById("minute");
let sec= document.getElementById("second");
let am_pm= document.getElementById("ampm");

let time=new Date();

let h= time.getHours();
let m= time.getMinutes();
let s=time.getSeconds();
ampm.innerText="PM"
if(h<12){
    ampm.innerText="AM"
}
if(h==0){
    h=12;
}
if(h>12){
    h=h-12;
}
if(h<10){
    h="0"+h
}
if(s<10){
    s="0"+s
}
if(m<10){
    m="0"+m
}

hour.innerText=h;
minute.innerText=m;
second.innerText=s
}
setInterval(clock,1000)



//Q10 Create a select drop down for selecting Year 20-21, 21-22 etc. Print the item text selected

function getOption(){
  let text=document.getElementById("dropDown").value;
  document.getElementById("getText").innerText=text;
}
