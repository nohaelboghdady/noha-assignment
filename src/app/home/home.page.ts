import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
Weight:number;
Height:number;
BMI;
bm1;
bm2;
bm3;
bm4;
bm5;
on;
i;
  constructor() {}
  Calculate()
  {
 var x="BMI Calculations";
 this.bm1=x;
var y="person weight "+this.Weight+ " KG";
this.bm2=y;
var z="Height "+ this.Height+ " CM";
this.bm3=z;
var k=this.Weight
var f=(this.Height/100)*(this.Height/100)
var answer=(k/f)
this.BMI=answer;
var a="BMI:"
this.bm4=a;
if(this.BMI>24.9)
{
  var n="you are overweight";
  this.bm5=n;
}
else if(this.BMI<18.5)
{
  var nn="you are underweight"
  this.bm5=nn;
}
else 
{
var kk="you are in a Normal Weight"
this.bm5=kk;
}

  }
ON()
{
this.Calculate()
this.on=0;
if(!this.on)
{
  this.i=1;
}
else
this.i=0;

}
  

}
