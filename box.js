AFRAME.registerComponent('movebox', {
  schema: {
    movex: {
    type: 'number', default: 1,
  },
    movey: {
      type: 'number', default: 2
    }},
  tick: function () {
    this.data.movex += 0.3
    this.data.movey += 0.2
    let pos = this.el.getAttribute('position')
    let rot = this.el.getAttribute('rotation')
    pos.x = this.data.movex
    pos.y = this.data.movey
    rot.x = this.data.movex
    rot.y = this.data.movey
    rot.z = this.data.movex
    this.el.setAttribute('position', {
      x: pos.x,
      y: pos.y,
      z: pos.z
    })
    this.el.setAttribute('rotation', {
      x: rot.x,
      y: rot.y,
      z: rot.z
    })
  }
})

AFRAME.registerComponent('mobox', {
  schema: {
    movex: {
    type: 'number', default: 1,
  },
    movey: {
      type: 'number', default: 2
    }},
  tick: function () {
    this.data.movex -= 0.3
    this.data.movey += 0.2
    let pos = this.el.getAttribute('position')
    let rot = this.el.getAttribute('rotation')
    pos.x = this.data.movex
    pos.y = this.data.movey
    rot.x = this.data.movex
    rot.y = this.data.movey
    rot.z = this.data.movex
    this.el.setAttribute('position', {
      x: pos.x,
      y: pos.y,
      z: pos.z
    })
    this.el.setAttribute('rotation', {
      x: rot.x,
      y: rot.y,
      z: rot.z
    })
  }
})

AFRAME.registerComponent('movox', {
  schema: {
    movex: {
    type: 'number', default: 1,
  },
    movey: {
      type: 'number', default: 2
    }},
  tick: function () {
    this.data.movex += 0.3
    this.data.movey -= 0.2
    let pos = this.el.getAttribute('position')
    let rot = this.el.getAttribute('rotation')
    pos.x = this.data.movex
    pos.y = this.data.movey
    rot.x = this.data.movex
    rot.y = this.data.movey
    rot.z = this.data.movex
    this.el.setAttribute('position', {
      x: pos.x,
      y: pos.y,
      z: pos.z
    })
    this.el.setAttribute('rotation', {
      x: rot.x,
      y: rot.y,
      z: rot.z
    })
  }
})

AFRAME.registerComponent('moox', {
  schema: {
    movex: {
    type: 'number', default: 1,
  },
    movey: {
      type: 'number', default: 2
    }},
  tick: function () {
    this.data.movex -= 0.3
    this.data.movey -= 0.2
    let pos = this.el.getAttribute('position')
    let rot = this.el.getAttribute('rotation')
    pos.x = this.data.movex
    pos.y = this.data.movey
    rot.x = this.data.movex
    rot.y = this.data.movey
    rot.z = this.data.movex
    this.el.setAttribute('position', {
      x: pos.x,
      y: pos.y,
      z: pos.z
    })
    this.el.setAttribute('rotation', {
      x: rot.x,
      y: rot.y,
      z: rot.z
    })
  }
})