// 1

var name="Ilija";
var lastName="Zikic";
var age=32;
var car="Volvo";
var model="s40";
var year=2001;
console.log(name+ " "+lastName+ " ima "+age+ " godina "+" i vozi "+car+" "+model+" "+year+ " godiste");

// 2

var number1=200;
var number2=300;
var number3=500;
var number4=number1;
var number5=number2;
var number6=number2+number1;
console.log(number1+number2);
console.log(number6+number4+number5+1000);

// 3

var array=["Ilija", "Ivana", "Mirjana", age, car, number6];
console.log(array[0]+" i "+array[1]+" i "+array[2]+" voze "+array[4]+" "+model+ " 2016 godiste");

// 4 

var info={
	ime:"Ilija",
	prezime:"Zikic",
	nadimak:"Kica",
	preduzece:"Microsoft",
	odsek:"Software developer"
}
// console.log(info.ime + " " + info.prezime + " vozi " + array[4] + " " + model + " i radi u " + info.preduzece + " kao " + info.odsek);
// for(property in info){
	// console.log(property);
// }//Kako istampati samo value in info

// 5

var name=prompt('Enter your name:');
if(name=="Ilija"){
	console.log("true");
}else{
	console.log("false");
}

// 6

var firstName=prompt('Enter a name:');
var names=["Ilija", "Danilo", "Ivana", "Mirjana"];
for(var i=0; i<names.length; i++){
	if(firstName==names[i]){
		var x=1;
}
}
if(x==1){
	console.log('DA');
}else{
	console.log('NE');
}

// 7

var pitanje=prompt('Da li je ime u bazi?');
var imenaZaProveru=["Ilija", "Danilo", "Ivana", "Mirjana"];
for(var i=0; i<imenaZaProveru.length; i++){
	if(imenaZaProveru[i]==pitanje){
		var klupa=25;
	}
}
if(klupa==25){
	console.log("Ime je u bazi");
}else{
	console.log("Ime nije u bazi");
}

// 8

var array=["Ilija", "Danilo", "Milica", "Ivana", "Igor"];
for(var i=0; i<array.length; i++){
	console.log(array[i]);
}

// 9

var username=prompt('Unesite vas username:');
var password=prompt('Unesite vas password:');
if(username=="Ilija" && password=="Zikic"){
	console.log("Uspesno logovanje");
}else{
	if(username=="Ilija"){
		console.log("Neispravan password");
	}else{
		if(password=="Zikic"){
			console.log("Neispravan username")
		}else{
			console.log("neispravan username i password");
		}
	}
}

// 10

var username=prompt("Unesi username");
var password=prompt("Unesi password");
var color=prompt("Unesi zeljenu boju");
var p=document.getElementsByTagName('p');
for(var i=0; i<p.length; i++){
	if(username=="Ilija" && password=="Zikic"){
		p[i].style.color=color;
	}
}


// 11

var x=prompt('user');
var y=prompt('pass');
var z=prompt('color');
var c=document.getElementsByTagName('p');
 for(var i=0; i<c.length; i++){
 	if(x=="Ilija" && y=="100"){
 		c[i].style.backgroundColor="red";
 	}
 }

 // 12

var number1=parseInt(prompt("Broj"));
var number2=parseInt(prompt("Broj"));
if(number1+number2==100){
	console.log("true");
}else{
	console.log("false");
}

// 13
var x=["Ilija", "Danilo", "Ivana", "Mirjana"];
for(var i=0; i<x.length; i++){
	console.log(x[i]);
}

// 14

var sviParagrafi=document.getElementsByTagName('p');
//sviParagrafi[0].style.backgroundColor="blue"; 
for(var i=0; i<sviParagrafi.length; i++){
	sviParagrafi[i].style.backgroundColor="silver";
	sviParagrafi[i].style.color="red";
	sviParagrafi[i].style.fontFamily="Arial";
	sviParagrafi[i].style.fontSize="40px";
	sviParagrafi[i].style.border="1px solid yellow";
}

// 15

var paragrafs=document.getElementsByClassName('par1');
for(var i=0; i<paragrafs.length; i++){
	console.log(paragrafs[i]);
	paragrafs[i].style.color="red"
}

var paragrafs2=document.getElementsByClassName('par2');
for(var i=0; i<paragrafs2.length; i++){
	console.log(paragrafs2[i]);
	paragrafs2[1].style.color="blue";
	paragrafs2[i].style.backgroundColor="silver";
}


// 16

var unorder=document.getElementsByTagName('ul');
for(var i=0; i<unorder.length; i++){
	console.log(unorder[i]);
	unorder[2].style.backgroundColor="silver";
	unorder[1].style.color="blue";
	unorder[i].style.fontSize="25px"
}

// 17

// var header=document.getElementsByTagName('h1')
// header[0].style.color="red";
// header[1].style.color="blue";
// for(var i=0; i<header.length; i++){
// 	console.log(header[i]);
// 	header[i].style.backgroundColor="yellow";

// }

// 18

var header2=document.getElementById('header2');
for(var i=0; i<header2.length; i++){
	console.log(header2[i]);
}
var header=document.getElementsByTagName('h1');
for(var i=0; i<header.length; i++){
	console.log(header[i]);
}

// 19

var header=document.getElementById('header1');
header.style.color="red";

var headers=document.getElementsByTagName('h1');
for(var i=0; i<headers.length; i++){
	headers[i].style.color="blue";
}

// 20

var prva=25;
var druga=prva;
var treca=23;
var names=["Ilija", "Danilo", "Ivana", "Mirjana", prva, druga];
// console.log(names[4]);
// console.log(names);
// console.log(x+y+" deda ima godina.");
// console.log(names[0]+" i "+names[1]+" uce JS i ucice ga jos "+(prva+druga)+" godina.")

function myFunction(a,b,c,d){
	console.log(a+b-c+d);
}

myFunction(prva,druga,treca,names[4]);

// 21
var x=0;
while(x<10){
	console.log(x);
	x++;
}

var x=10;
var y=25;
console.log(x,y);
console.log(x+y);

// 21

var username=prompt('Enter your username:');
var lastName=prompt('Enter your last name:');
if(username=="Kica" && lastName=="1984"){
	console.log('Uspesno ste prijavljeni')
}else{
	if(username=="Kica"){
		console.log('Vase lastName nije korektno.');
	}else{
		if(lastName=="1984"){
			console.log('Vase username nije korektno');
		}else{
			console.log('Vase username i vase lasName nije korektno');
		}
	}
}

// 22

var color=prompt('Zeljena boja:')
var imena=["Crna", "Bela", "Zelena"];
for(var i=0; i<imena.length; i++){
	if(color==imena[i]){
		var x=1;
	}
}

if(x==1){
	console.log('Boja postoji');
}else{
	console.log('Boje nema');
}

// 23
var kola=prompt('Izaberi auto');

var germanCars=["Audi", "Mercedes", "BMW", "WW"];
var swedenCars=["Volvo", "Saab"];
var italianCars=["Fiat", "Alfa"];

var cars=[germanCars, swedenCars, italianCars];

for(var i=0; i<germanCars.length; i++){
	if(germanCars[i]==kola){
		var x=1;
	}

}

if(x==1){
	console.log('da');
}else{
	console.log('ne');
}

// 24

var ul=document.getElementsByTagName('ul');
for(var i=0; i<ul.length; i++){
	ul[0].style.color="red";
	ul[2].style.color="red";
}

// 25

var li=document.getElementsByTagName('li');
for(var i=0; i<li.length; i++){
	li[1].style.color="blue";
}

// 26

var ponovoImena=["Dragutin", "Milorad", "Milunka"];
console.log(ponovoImena[0]);
console.log(ponovoImena[2]);
for(var i=0; i<ponovoImena.length; i++){
	console.log(ponovoImena[i]);
}

// 27

var objekat={
	name:"Ilija",
	prezime:"Zikic",
	age:32
}
for(value in objekat){
	console.log(value);	
}

// 28

var unordered=document.getElementsByTagName('ul');
var lists=unordered[0].getElementsByTagName('li');

for(var i=0; i<lists.length; i++){
	lists[i].style.backgroundColor="blue";
}

// 29
var liste=document.getElementsByTagName('li');
liste[0].style.backgroundColor="red";

// 30
 var ul=document.getElementsByTagName('ul');
 ul[1].style.backgroundColor="red";

// 31

var ul=document.getElementsByTagName('ul');
var li=ul[0].getElementsByTagName('li');
li[1].style.color="silver";

// 32

var par=document.getElementsByClassName('par1');
for(var i=0; i<par.length; i++){
	par[i].style.color="red";
	par[0].style.fontSize="26px";
	par[1].style.backgroundColor="blue";
	par[2].style.fontFamily="Arial"
}
// 33
var naslov=document.getElementById('header1');
naslov.style.color="red";


// 34
var naslov=document.getElementsByTagName('h1');
naslov[0].style.color="red";
console.log(naslov[0]);

// 35
 
 var headers=document.getElementsByTagName('h1');
 headers[1].style.backgroundColor="silver";
 for(var i=0; i<headers.length; i++){
 	headers[i].style.color="red";
 }

 // 36

var h1=document.getElementsByTagName('h1');
for(var i=0; i<h1.length; i++){
	h1[i].style.backgroundColor="red";
	h1[0].style.color="blue";
	h1[1].style.color="yellow";
	h1[2].style.color="green";
}

var par=document.getElementsByTagName('p');
for(i=0; i<par.length; i++){
	par[i].style.backgroundColor="silver";
}
var par1=document.getElementsByClassName('par1');
for(var i=0; i<par1.length; i++){
	par1[0].style.fontSize="25px"
}

var par2=document.getElementsByClassName('par2');
for(var i=0; i<par2.length; i++){
par2[i].style.border="5px solid blue";
par2[i].style.borderRadius="10px"
}
par2[0].style.color="green";

var ul=document.getElementsByTagName("ul");
for(var i=0; i<ul.length; i++){
	ul[i].style.backgroundColor="yellow";
	ul[1].style.color="red";
}

var li1=ul[0].getElementsByTagName('li');
for(var i=0; i<li1.length; i++){
	li1[i].style.fontSize="25px";
	li1[0].style.color="red";
}

// 37
 var x=document.getElementsByTagName('p');
 for(var i=0; i<x.length; i++){
 	x[6].style.color="red";
 }


// 38

var naslov1=document.getElementsByTagName('h1');
for(var i=0; i<naslov1.length; i++){
	naslov1[i].style.backgroundColor="red";
	naslov1[1].style.color="green";
}

// 39
var paragrafs=document.getElementsByTagName('p');
var x=prompt("Unesi ime");
var y=prompt("Unesi sifru");
if(x=="Kica" && y=="1984"){
	for(i=0; i<paragrafs.length; i++){
		paragrafs[i].style.color="red";
	}
}

// 40

var x=document.getElementsByClassName('li2');
var y=document.getElementsByTagName('p');
var z=document.getElementById("header1");

var name=prompt("Unesi ime");
var lastName=prompt("Unesi prezime");

if(name=="1" && lastName=="1"){
	for(var i=0; i<x.length; i++){
		x[i].style.color="blue"; 
	for(var ii=0; ii<y.length; ii++){
		y[ii].style.color="red";
	z.style.color="yellow";	

	}	
	}
}

// 41
var x=document.getElementsByClassName('li2');
var y=document.getElementsByTagName('p');
var z=document.getElementById("header1");

var name=prompt("Unesi ime");
var lastName=prompt("Unesi prezime");

if(name=="1" && lastName=="1"){
	for(var i=0; i<x.length && i<y.length; i++){
		x[i].style.color="red";
		y[i].style.color="red";

	}
}

// 42
var y=["ilija","Mirjana", "Ivana"]
var x=0;
while(x<10){
	console.log(x)
	x++
 }
 for(i=0; i<y.length; i++){
 	console.log(y[i]);
 }

 for(var i=0; i<10; i++){
 	console.log("Kica"+" "+i);
 }

// 43

var lista=prompt('Unesite zemlju:')
var country=["Serbia", "Sweden", "Denmark", "Australia","Canada"];

for(var i=0; i<country.length; i++){
	if(lista==country[i]){
		var x=1;
	}
}
if(x==1){
	console.log('Zemlja je u bazi podataka');
}else{
	console.log("Zemlja nije u bazi podataka");
}

// 44

var p=document.getElementsByTagName('p');

var lista=prompt('Unesite zemlju:')
var country=["Serbia", "Sweden", "Denmark", "Australia","Canada"];

for(var i=0; i<country.length; i++){
	if(lista==country[i]){
		var x=1;
	}
}

if(x==1){
	for(i=0; i<p.length; i++){
	p[i].style.color="red";
}
}else{
	console.log('netacno');
}


// 45

var lista=prompt('Unesite zemlju:')
var country=["Serbia", "Sweden", "Denmark", "Australia","Canada"];
var list=document.getElementsByTagName('li');

for(var i=0; i<country.length; i++){
	if(lista==country[i]){
		var z=1;
	}
}

if(z==1){
	for(i=0; i<list.length; i++){
		list[i].style.color="red";
	}
}else{
	console.log('Ne');
}

// 46
var unorder=document.getElementsByTagName("ul");
var lists=unorder[0].getElementsByTagName('li');
var paragrafs=document.getElementsByTagName('p');
for(var i=0; i<paragrafs.length && i<lists.length; i++){
	paragrafs[i].style.backgroundColor="blue";
	paragrafs[0].style.color="red";
	paragrafs[1].style.fontSize="25px";
	paragrafs[2].style.border="5px solid red";
	lists[i].style.color="yellow";
	lists[0].style.backgroundColor="silver";
}

// 47

var zemlja=prompt("Unesi zemlju:");
var grad=prompt('Unesi grad');
var paragrafs=document.getElementsByTagName('p');

if(zemlja=="Serbia" && grad=="Bor"){
	for(var i=0; i<paragrafs.length; i++){
		paragrafs[i].style.color="red";
	}
}else{
	paragrafs[0].style.color="blue";
}

// 48

var zemlja=prompt("Unesi zemlju:");
var grad=prompt('Unesi grad');

var country=["Serbia", "Sweden", "Denmark", "Australia","Canada"];
var cityes=["Bor", "Malmo", "Kopenhagen", "Sidnej", "Otava"];

var paragrafs=document.getElementsByTagName('p');

for(var i=0; i<country.length && i<cityes.length; i++){
	if(country[i]==zemlja && cityes[i]==grad){
		var x=1;
	}
}
if(x==1){
	for(var i=0; i<paragrafs.length; i++){
	paragrafs[i].style.color="red";
	}

}

// 49

var name=prompt('Unesi ime');
var lastName=prompt("Unsei prezime");

var imena=["Ilija", "Ivana", "Pera"];
var prezimena=["Zikic", "Milovanovic", "Bozic"];

var paragrafi=document.getElementsByClassName('par2');

for(i=0; i<imena.length && i<prezimena.length; i++){
	if(imena[i]==name && prezimena[i]==lastName){
		var x=1;
	}
}

if(x==1){
	for(var i=0; i<paragrafi.length; i++){
		paragrafi[i].style.backgroundColor="silver"
	}
}else{
	 paragrafi[0].style.backgroundColor="red";
}

// 50

var klasa1=document.getElementsByClassName('par1');
var klasa2=document.getElementsByClassName('par2');
var klasa3=document.getElementsByClassName('li1');
var klasa4=document.getElementsByClassName('li2');

for(i=0; i<klasa1.length && i<klasa2.length && i<klasa3.length && i<klasa4.length; i++){
	klasa1[i].style.color="red";
	klasa2[i].style.color="blue";
	klasa3[i].style.color="silver";
	klasa4[i].style.color="green";
}

// 51

var animal=prompt("Unesi zivotinju");
var rod=prompt("Unesi rod");

var x=["Cat", "Dog", "Duck"];
var y=["Male", "Female"];

var lists=document.getElementsByTagName('li');

for(var i=0; i<x.length && i<y.length; i++){
	if(x[i]==animal && y[i]==rod){
		var x=1;
	}
}

if(x==1){
	for(var i=0; i<lists.length; i++){
		lists[i].style.color="red";
	}
}else{
	lists[0].style.color="blue";
}


// 52
var jedan=prompt("Unesi");
var dva=prompt("Unesi");
var x=document.getElementsByTagName('p');
var objekat={
	name:"Ilija",
	prezime:"Zikic",
	age:32
}
if(jedan==objekat.name && dva==objekat.prezime){
	for(var i=0; i<x.length; i++){
		x[i].style.color="red";
	}
}



