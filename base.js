class base
{
 constructor(x,y,width,height)
 {
    var baseop=
 {
   isStatic:true

 }
 
  this.body=Bodies.rectangle(x,y,width,height,baseop);
  this.width=width;
  this.height=height;

  World.add(world,this.body);


 }
 display()
 {
    var pos=this.body.position;
    rectMode(CENTER);
    rect(pos.x,pos.y,this.width,this.height)


 }


}