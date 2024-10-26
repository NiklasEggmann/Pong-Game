let x
let y
let r = 20

let speedX = 5
let speedY = -5

let h = 10
let w = 50

let rr = 0
let gg = 0
let bb = 0

let counter = 0

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke()
  rectMode(CENTER)
  x = random(windowWidth)
  y = windowHeight/2

  //textSize(10)
}

function draw() {
  background(rr, gg, bb);
  fill((255-rr), (255-gg), (255-bb))

  ellipse(x, y, r);
  text(counter, 10, 20)

  x = x + speedX
  y = y + speedY

  if (x > windowWidth-r/2 || x < r/2) {
    speedX = - speedX
  }

  if (y < r/2) {
    speedY = - speedY
  }

  if (y > windowHeight-(r/2)-(h) && x > mouseX - w && x < mouseX + w) {
    speedY = - (speedY+0.5)
    speedX = speedX+0.5
    counter += 1

    rr = random(255)
    gg = random(255)
    bb = random(255)

  }

  if (y > windowHeight+w/2) {
    y = windowHeight/2
    speedY = -5
    counter = 0
  }


 rect(mouseX, windowHeight-h/2, w*2, h)

//console.log(speedX, speedY)

}