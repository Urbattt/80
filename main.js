var allnames=[];
var displaynames=[];
function submit() {

for(var i=1; i<=4; i++){
var name=document.getElementById("i"+i).value;
allnames.push(name);
} 
var lengthofallnames=allnames.length;
for(var i=0; i<lengthofallnames; i++){
displaynames.push("<h4>name-"+allnames[i]+"</h4>");

}
document.getElementById("displaywithcomma").innerHTML=displaynames;
var displaynameswithoutcomma=displaynames.join("&");
document.getElementById("displaywithoutcomma").innerHTML=displaynameswithoutcomma;
console.log(allnames);
document.getElementById("buttonsubmit").style.display="none";
document.getElementById("buttonsort").style.display="inline-block";
}

function sorting() {
    
    console.log(allnames);
allnames.sort();
console.log(allnames);

var sortednames=[]
var lengthofnames=allnames.length;
for(var i=0; i<lengthofnames; i++){
sortednames.push("<h2>name-"+allnames[i]+"<h2>");

}
document.getElementById("displaywithcomma").innerHTML=sortednames;
var sortednameswithoutcomma=sortednames.join("#");
document.getElementById("displaywithoutcomma").innerHTML=sortednameswithoutcomma;
}

function search() {
var s=document.getAnimations("guest").value;
var found=0;
var j;
for(j=0;j<allnames.length; j++){
if(s==allnames[j]){

    found=found+1;
}
}

document.getElementById("e").innerHTML="name found "+found+" time/s";

}