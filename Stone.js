class Stone{
    constructor(x,y,w,h){
        var options={
            restitution:1,
            friction:0.9,
            density:12
        }

        this.x=x
        this.y=y
        this.width=w
        this.height=h

        this.body=Bodies.rectangle(x,y,w,h,options)
        World.add(world, this.body)

        //stone.setCollider("circle",0,0,400);
    }

    display(){

        var stonepos=this.body.position
        rectMode(CENTER)

        fill ("black")
        rect(stonepos.x,stonepos.y,this.width,this.height)



    }
}