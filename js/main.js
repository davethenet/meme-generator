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
    renderGallery()
}

function onClearCanvas(){
    
}

function renderMeme(meme){
    drawImg(meme)
}

function onDownloadImg(elLink) {
    const imgContent = gElCanvas.toDataURL('image/jpeg')
    elLink.href = imgContent
}