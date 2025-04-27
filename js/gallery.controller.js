'use strict'

var gImgId = 1

function renderGallery(){
    const elGallery = document.querySelector('.gallery')
    console.log(elGallery)
    var imgs = getImgs()
    elGallery.innerHTML = imgs.map(img =>
        `<tr>
                <td><img src="${img.url}" id="${gImgId++}" onclick="onImgSelect(this)"></td>
                
            </tr>`
    ).join('')
}


function onImgSelect(img) {
    console.log(img)
    setImg(img)
}