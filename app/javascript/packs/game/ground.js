class Ground {
  constructor(canvas, image) {
    this.canvasWidth = canvas.width 
    this.xSize = canvas.height / 6
    this.ySize = canvas.height / 6
    this.x = canvas.width
    this.y = canvas.height - this.ySize
    this.image = image
  }

  move(velocity) {
    this.x -= velocity
  }

  isNewGroundNeeded(velocity) {
    let nextStep = this.canvasWidth - (this.x - velocity)
    if (nextStep >= this.xSize) {
      return (this.x + this.xSize)
    }
    else {
      return false
    }
  }
}

export default Ground