'use strict'


var gImgs = [
    {id: 1, url: 'img/1.jpg', keywords:['funny', 'cat']},
    {id: 2, url: 'img/2.jpg', keywords:['funny', 'cat']}

]

var gMeme = {
    selectedImgId: 5,
    selectedLineId: 0,
    lines: [
        {
            txt: 'I sometimes eat Falafel',
            size: 40,
            color: 'blue'
        }
    ]
}

var gKeywordsSearchCountMap = {'funny': 12, 'cat': 16, 'baby': 2}


function getMeme(){
    return gMeme
}

function setLineTxt(){
    var elTxt = document.querySelector('.textInput')
    gMeme.lines[0].txt = elTxt.value
    renderMeme(gMeme)
}

function getImgs(){
    return gImgs
}

function setImg(img){
    console.log(img.id)
    gMeme.selectedImgId = img.id
    renderMeme(gMeme)
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

