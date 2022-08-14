const SYS_PARAM = {
    car:
    {
        width:30,  // px
        height:50,  // px
        acceleration:0.2,
        angleDiviation:0.02,
        maxSpeed:8,
        friction:0.05,
    },
    road:
    {
        infinity:1000000,  // px
        laneCount:4,
        laneSeparatorColor:"#FFF",
        laneSeparatorWidth:5,
        roadBoarderColor:"#FFB432", 
        roadBoarderWidth:8,
    },
    canvas:
    {
        width:220, // width of the camera canvas.
        focus_point_percentage:0.7,  // set the focused car at the [num] percentage vertical position of the canvas. 
    },
    init:
    {
        car_on_lane_num:2,  // the initial place where to put car at.
    }
}