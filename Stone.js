class Stone{
    constructor(x,y,width,height){
    var options={
     isStatic:false,
     restitution:0,
     friction:1,
     density:1.2
     }
this.x=x;
this.y=y;
this.image=loadImage("images/stone.png");
this.body=Bodies.circle(this.x,this.y,this.r/2,options)
World.add(world,body);

}
display(){
var stonepose=this.body.position;
push()
translate(stonepose.x,stonepose.y);
fill(255,0,255)
imageMode(CENTER);
ellipseMode(RADIUS);
image(this.image,0,0,this.r*2,this.r*2)
pop()
}
}