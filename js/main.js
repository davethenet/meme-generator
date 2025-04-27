'use strict'

let gElCanvas
let gCtx


function onInit(){
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    console.log('gCtx', gCtx)
    var meme = getMeme()
    console.log(meme)
    renderMeme(meme)
}

function onClearCanvas(){
    
}

function renderMeme(meme){
    drawImg(meme)
}

function drawImg(meme) {
    const img = new Image()
    img.src = `img/${meme.selectedImgId}.jpg`
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        drawText(meme.lines[0].txt, gElCanvas.width / 2, gElCanvas.height / 2, meme)

    }
}


function drawText(text, x, y, meme) {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = meme.lines[0].color
    gCtx.fillStyle = meme.lines[0].color
    gCtx.font = meme.lines[0].size + 'px Ariel'
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'
  
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
  }

