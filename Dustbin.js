class Dustbin {
  constructor(x,y,w,h) {
    var options = {
       isStatic:true,
       'restitution':0,
       'friction':1,
       'density':0.1,
     }
     this.image=loadImage("dustbingreen.png")

     this.leftbody = Bodies.rectangle(x,y,w,h,options);
     this.rightbody = Bodies.rectangle(x+120,y,w,h,options);
     this.bottombody = Bodies.rectangle(x+60,y+40,w+80,h-80,options)
     this.width = w;
     this.height = h;

     World.add(world,this.leftbody);
     World.add(world,this.rightbody);
     World.add(world,this.bottombody);


  }
  display()
  {
    var posleft= this.leftbody.position;
    var posright = this.rightbody.position;
    var posbottom = this.bottombody.position;

    image(this.image,posbottom.x-60,posbottom.y-80,this.width+100,this.height)

    //rect(posleft.x,posleft.y,this.width,this.height);
   // rect(posright.x,posright.y,this.width,this.height);
    //rect(posbottom.x,posbottom.y,this.width+80,this.height-80);

    imageMode(CENTER);
    fill(255);

  }
  

 };
/*class Dustbin {
    constructor(x,y,width,height) {
      var options = {
         isStatic:true,
         'restitution':0,
         'friction':1,
         'density':0.1,
       }
       this.body = Bodies.rectangle(x,y,width,height,options);
       this.width = width;
       this.height = height;

       World.add(world,this.body);


    }
     display(){
      rectMode(CENTER);

      fill(255);


      rect(this.body.position.x,this.body.position.y,this.width,this.height);




     }

   };*/