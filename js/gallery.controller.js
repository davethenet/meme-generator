'use strict'

function renderGallery(){
    const elGallery = document.querySelector('.gallery')
    console.log(elGallery)
    var imgs = getImgs()
    elGallery.innerHTML = imgs.map(img =>
        `<tr>
                <td><img src=${img.url}></td>
                
            </tr>`
    ).join('')
}