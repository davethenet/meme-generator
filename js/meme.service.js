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
            color: 'blue',
            posX: 0,
            posY: 0
        }
    ]
}



var gKeywordsSearchCountMap = {'funny': 12, 'cat': 16, 'baby': 2}


function getMeme(){
    return gMeme
}

function setLineTxt(){
    var elTxt = document.querySelector('.textInput')
    gMeme.lines[gMeme.selectedLineId].txt = elTxt.value
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
        
        // drawText(meme.lines[1].txt, gElCanvas.width / 4, gElCanvas.height / 2, meme)
    }
}


function drawText(text, x, y, meme) {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = meme.lines[gMeme.selectedLineId].color
    gCtx.fillStyle = meme.lines[gMeme.selectedLineId].color
    gCtx.font = meme.lines[gMeme.selectedLineId].size + 'px Ariel'
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'
  
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
  }

function setColor(color){
    console.log(color)
    gMeme.lines[gMeme.selectedLineId].color = color
    renderMeme(gMeme)
}

function setFontSize(sign){
   sign === '+' ? gMeme.lines[0].size++ : gMeme.lines[gMeme.selectedLineId].size--
    renderMeme(gMeme)
}

function addLine(){
    gMeme.lines.push ( {
        txt: 'New Line',
        size: 40,
        color: 'blue'
    })
    renderMeme(gMeme)
}



function switchLine(){
    if (gMeme.selectedLineId < gMeme.lines.length-1){
        gMeme.selectedLineId ++
    }
    else gMeme.selectedLineId = 0
}

function drawFrame(){
      // 3) Measure the text
  const metrics = gCtx.measureText(gMeme.lines[gMeme.selectedLineId].txt);
  console.log(metrics)
  // width of the text
  const textWidth = metrics.width;
  // height using bounding-box metrics (supported in modern browsers)
  const textHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;

  // 4) Draw the frame around it
  gCtx.strokeRect(
    gElCanvas.width,
    gElCanvas.height - metrics.actualBoundingBoxAscent,
    textWidth,
    textHeight
  );
}

function setPos(i,x,y){
    gMeme.lines[i].posX = x
    gMeme.lines[i].posY = y
}