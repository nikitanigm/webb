var i = -1
let imagesUrls = ["./images/doge.jpg","./images/1.png","./images/2.png","./images/moln.jpg","./images/car.jpg"]
document.getElementById('imageButton').addEventListener("click", setRan-domImage)
docu-ment.getElementById('rng').addEventListener("change",()=>{document.getElementById("txt").value = document.getElementById("rng").value})
document.getElementById('slideshowBtn').addEventListener("click", ()=>{
        setInterval(()=>{
            setRandomImage();
        },parseFloat(getTime()));
    })
function setRandomImage()
{
    let randomIndex = (imagesUrls.length-1) * Math.random();
    if (i!=randomIndex)
    {
        docu-ment.getElementById('controlImage').setAttribute('src',imagesUrls[randomIndex.toFixed()])
        i = randomIndex
    }
}
function getTime()
{
    console.log(document.getElementById("rng").value)
    return document.getElementById("rng").value
}
