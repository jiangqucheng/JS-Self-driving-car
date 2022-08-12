class Car{
    constructor(x, y, width, height){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;

        this.speed=0;
        this.acceleration=0.2;
        this.maxSpeed=3;
        this.friction=0.05;
        this.angle=0;

        this.controls=new Controls();
    }

    update(){
        this.#move();
    }

    #move(){
        if(this.controls.forward){
            this.speed+=this.acceleration;
        }
        if(this.controls.reverse){
            this.speed-=this.acceleration;
        }

        if(this.speed>this.maxSpeed){
            this.speed=this.maxSpeed;
        }
        if(this.speed<-this.maxSpeed/2){
            this.speed=-this.maxSpeed/2;
        }

        if(this.speed>0 && this.controls.forward!=true){
            this.speed-=this.friction;
        }
        if(this.speed<0 && this.controls.reverse!=true){
            this.speed+=this.friction;
        }
        if(Math.abs(this.speed)<this.friction){
            this.speed=0;
        }

        if(this.speed!=0){
            const speed_div=this.speed/this.maxSpeed;
            if(this.controls.left){
                this.angle+=0.03*speed_div;
            }
            if(this.controls.right){
                this.angle-=0.03*speed_div;
            }
        }

        this.x-=Math.sin(this.angle)*this.speed;
        this.y-=Math.cos(this.angle)*this.speed;
    }

    draw(ctx){
        ctx.save();
        ctx.translate(this.x,this.y);
        ctx.rotate(-this.angle);

        ctx.beginPath();
        ctx.rect(
            -this.width/2,
            -this.height/2,
            this.width,
            this.height
        );
        ctx.fill();

        ctx.beginPath();
        ctx.lineWidth="3";
        ctx.strokeStyle="grey";
        ctx.arc(0,0,5, (-90-135)/180*Math.PI, (-90+135)/180*Math.PI);
        ctx.stroke();

        ctx.restore();
    }
}