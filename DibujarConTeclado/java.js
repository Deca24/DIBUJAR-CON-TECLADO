var key =
{
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};
console.log(key);

document.addEventListener("keydown", drawKeys);
var box = document.getElementById("drawing");
var p = box.getContext("2d");
var x = 150;
var y = 150;

drawline("black", 149, 149, 150, 150, p);

function drawline(color, xstart, ystart, xend, yend, c)
{
  c.beginPath();
  c.strokeStyle = color;
  c.lineWidth = 1.5;
  c.moveTo(xstart, ystart);
  c.lineTo(xend, yend);
  c.stroke();
  c.closePath();
}

function drawKeys(event)
{
  var color2 = "blue";
  var movement = 2;
  switch (event.keyCode)
  {
    case key.UP:
      drawline(color2, x, y, x, y - movement, p);
      y = y - movement;
    break;
    case key.DOWN:
      drawline(color2, x, y, x, y + movement, p);
      y = y + movement;
    break;
    case key.LEFT:
      drawline(color2, x, y, x - movement, y, p);
      x = x - movement;
    break;
    case key.RIGHT:
      drawline(color2, x, y, x + movement, y, p);
      x = x + movement;
    break;

  }
}
