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