/**
 * Created by jade on 2015/12/15.
 */
var lovepostZoom = new Zoom({
    box: $("#list"),
    aPosition: [
        {width: 471, height: 360, top: 0, left: 242, zIndex: 10},
        {width: 350, height: 330, top: 11, left: 0, zIndex: 6},
        {width: 350, height: 330, top: 11, left: 610, zIndex: 6}
    ],
    maxWidth:"471px",
    isShadow:true
})
lovepostZoom.init().autoPlay();



var qualityZoom = new Zoom({
    box: $("#quality-list"),
    aPosition: [
        {width: 218, height: 318, top: 0, left: 374, zIndex: 10},
        {width: 217, height: 318, top: 0, left: 187, zIndex: 8},
        {width: 217, height: 318, top: 0, left: 0, zIndex: 6},
        {width: 217, height: 318, top: 0, left: 716, zIndex: 6},
        {width: 217, height: 318, top: 0, left: 561, zIndex: 8}
    ],
    maxWidth:"218px"
})
qualityZoom.init()