const Anime_Images = require('anime-images-api')
const API = new Anime_Images()
async function getIMG(){
    let { image } = await API.sfw.hug()
    console.log(image)
}
getIMG()
