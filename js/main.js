'use strict'

let gElCanvas
let gCtx



function onInit(){
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    console.log('gCtx', gCtx)
    var meme = getMeme()
    // console.log(meme)
    renderMeme(meme)
    renderGallery()
}

function onClearCanvas(){
    
}

function renderMeme(meme){
    drawImg(meme)
    setTimeout(() => {
        renderLines(meme)
      }, "70");
      drawFrame()
}

function renderLines(meme){
    var inc = gElCanvas.width / 4
    for (var i = 0 ; i < meme.lines.length ; i++){
        drawText(meme.lines[i].txt, gElCanvas.width / 2, inc, meme);
        setPos(i,gElCanvas.width / 2, inc)
        inc += 50
    }
}

function onDownloadImg(elLink) {
    const imgContent = gElCanvas.toDataURL('image/jpeg')
    elLink.href = imgContent
}

function onChangeTxtColor(color) {
    setColor(color.value)
}

function onFontSize(sign){
    setFontSize(sign)
}

function onAddLine(){
    addLine()
}

function onSwitchLine(){
    switchLine()
}