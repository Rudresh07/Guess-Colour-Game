var arr =[0,1,2,3,4,5];
var r= Math.floor((Math.random())*256);
var g= Math.floor((Math.random())*256);
var b= Math.floor((Math.random())*256);

document.getElementById("colorName").innerHTML="("+r+","+g+","+b+")";

var index=Math.floor((Math.random())*3);

document.getElementById(index).style.backgroundColor="rgb("+r+","+g+","+b+")";

arr.splice(index,1);

var r1= Math.floor((Math.random())*256);
var g1= Math.floor((Math.random())*256);
var b1= Math.floor((Math.random())*256);

document.getElementById(arr[0]).style.backgroundColor="rgb("+r1+","+g1+","+b1+")";

var r2= Math.floor((Math.random())*256);
var g2= Math.floor((Math.random())*256);
var b2= Math.floor((Math.random())*256);

document.getElementById(arr[1]).style.backgroundColor="rgb("+r2+","+g2+","+b2+")";

var r3= Math.floor((Math.random())*256);
var g3= Math.floor((Math.random())*256);
var b3= Math.floor((Math.random())*256);

document.getElementById(arr[2]).style.backgroundColor="rgb("+r3+","+g3+","+b3+")";

var r4= Math.floor((Math.random())*256);
var g4= Math.floor((Math.random())*256);
var b4= Math.floor((Math.random())*256);

document.getElementById(arr[3]).style.backgroundColor="rgb("+r4+","+g4+","+b4+")";

var r5= Math.floor((Math.random())*256);
var g5= Math.floor((Math.random())*256);
var b5= Math.floor((Math.random())*256);

document.getElementById(arr[4]).style.backgroundColor="rgb("+r5+","+g5+","+b5+")";

function guess() {
    if(document.activeElement.id==index){
        document.getElementById("colorName").innerHML="CORRECT !!";
        document.getElementById("colorName").style.color="lightgreen";
    }
    else{
        document.getElementById("colorName").innerHML="WRONG !!";
        document.getElementById("colorName").style.color="red";
    }
    document.getElementByClassName("btn")[0].removeAttribute("onclick");
    document.getElementByClassName("btn")[1].removeAttribute("onclick");
    document.getElementByClassName("btn")[2].removeAttribute("onclick");


}
function replay(){
    window.location.reload();
}
