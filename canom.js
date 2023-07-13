class Cannom {
constructor(x,y,width,height,angle){

this.x = x;
this.y = y;
this.width = width;
this.height = height;
this.angle = angle;
this.cannom_img = loadImage('assets/CANON.png');
this.cannom_base = loadImage('assets/cannon_base.png')
}


display(){
 console.log(this.angle);
 if (keyIsDown(UP_ARROW) && this.angle > -1.45){
this.angle -=0.02;
 }
 
 if (keyIsDown(DOWN_ARROW) && this.angle < 0.80 ){
    this.angle +=0.02;
     }


fill('#67e6a');

push();
translate(this.x,this.y);
rotate(this.angle);
imageMode(CENTER);
image(this.cannom_img,0,0,this.width,this.height);
pop();

image(this.cannom_base,70,20,200,200);
noFill();



}




}




   





















































