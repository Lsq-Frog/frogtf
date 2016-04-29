/**
 * Created by lai on 2016/4/28.
 */

// A cross-browser requestAnimationFrame
var requestAnimFrame = (function(){
    return window.requestAnimationFrame       ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      ||
        window.msRequestAnimationFrame     ||
        function(callback){
            window.setTimeout(callback, 1000 / 60);
        };
})();

// Create the canvas
var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");
document.getElementById('gameCanvas').width = document.body.clientWidth;
document.getElementById('gameCanvas').height = document.body.clientHeight;
var img = document.createElement("img")
ctx.drawImage()
Map.draw(MapTwo, ctx);