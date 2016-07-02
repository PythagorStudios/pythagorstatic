/**
 * Created by finnb on 6/18/16.
 */
var Game = {};
var canvas = null;

function colors() {
    var hexString = "#" + randomInt(0, 255).toString(16) + randomInt(0, 255).toString(16) + randomInt(0, 255).toString(16);
    return hexString;
}

Game.initialize = function()
{
    var canvasObject = document.getElementById("game");
    canvas = canvasObject.getContext("2d");
}

Game.update = function()
{
    if (canvas == null)
    {
        Game.initialize();
    }
}

Game.draw = function()
{
    if (canvas == null)
    {
        alert("Context is null.");
    }
    else
    {
        /*canvas.clearRect(0, 0, canvas.canvas.width, canvas.canvas.height);
        canvas.fillStyle = colors();
        canvas.fillRect(randomInt(0,500), randomInt(0,500), randomInt(50, 75), randomInt(50, 75));*/
        canvas.fillStyle = "#000000";
        canvas.font = "30px Arial";
        canvas.fillText("WORK IN PROGRESS\nCHECK BACK LATER",canvas.canvas.width/2,canvas.canvas.height/2);
    }
}
