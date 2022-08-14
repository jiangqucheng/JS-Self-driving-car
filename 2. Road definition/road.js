class Road{
    constructor(center_x, width, roadParamDict){
        this.width = width;
        this.laneCount = roadParamDict.laneCount;

        this.laneSeparatorColor = roadParamDict.laneSeparatorColor;
        this.laneSeparatorWidth = roadParamDict.laneSeparatorWidth;
        this.roadBorderColor = roadParamDict.roadBorderColor;
        this.roadBorderWidth = roadParamDict.roadBorderWidth;

        const infinity=roadParamDict.infinity;  // fake infinity
        this.left = center_x-width/2;
        this.right = center_x+width/2;
        this.top = -infinity;
        this.bottom = infinity;

        // road border
        const topLeft={x:this.left,y:this.top};
        const topRight={x:this.right,y:this.top};
        const bottomLeft={x:this.left,y:this.bottom};
        const bottomRight={x:this.right,y:this.bottom};
        this.borders=[
            [topLeft,bottomLeft],  // left road border
            [topRight,bottomRight]  // right road border
        ];
    }

    getLaneCenter(laneIndex){
        const laneWidth=this.width/this.laneCount;
        return this.left+laneWidth/2+
            Math.min(laneIndex,this.laneCount-1)*laneWidth;
    }

    draw(ctx){

        ctx.lineWidth=this.laneSeparatorWidth;
        ctx.strokeStyle=this.laneSeparatorColor;

        for(let i=1;i<=this.laneCount-1;i++){
            const x=lerp(
                this.left,
                this.right,
                i/this.laneCount
            );
            
            ctx.setLineDash([20,20]);
            ctx.beginPath();
            ctx.moveTo(x,this.top);
            ctx.lineTo(x,this.bottom);
            ctx.stroke();
        }

        ctx.lineWidth=this.roadBorderWidth;
        ctx.strokeStyle=this.roadBorderColor;

        ctx.setLineDash([]);
        this.borders.forEach(border=>{
            ctx.beginPath();
            ctx.moveTo(border[0].x,border[0].y);
            ctx.lineTo(border[1].x,border[1].y);
            ctx.stroke();
        });
    }
}