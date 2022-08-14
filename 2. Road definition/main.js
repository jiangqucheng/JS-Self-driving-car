
// get and init the camera canvas.
const canvas = document.getElementById("myCanvas");
canvas.width = SYS_PARAM.canvas.width;
const ctx = canvas.getContext("2d");

// init road and car object.
const road = new Road(canvas.width/2, canvas.width*0.9, SYS_PARAM.road);
const car = new Car(road.getLaneCenter(SYS_PARAM.init.car_on_lane_num), SYS_PARAM.car);

animate();

function animate(){
    car.update();

    canvas.height=window.innerHeight;

    ctx.save();
    ctx.translate(0, -car.y + canvas.height*SYS_PARAM.canvas.focus_point_percentage);

    road.draw(ctx);
    car.draw(ctx);

    ctx.restore();
    requestAnimationFrame(animate);
}