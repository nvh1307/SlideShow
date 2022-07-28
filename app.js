var img = document.querySelector(".img")
var listImg = document.querySelectorAll(".part img")
var prevBtn = document.querySelector(".prev")
var nextBtn = document.querySelector(".next")


var currentIndex = 0
function update(index){
    document.querySelectorAll('.part div').forEach(item=>{
        item.classList.remove("active")
    })
    currentIndex = index
    img.src = listImg[index].getAttribute('src')
    listImg[index].parentElement.classList.add('active')
}
listImg.forEach((item,index) =>{
    item.addEventListener('click',e=>{
        // currentIndex = index
        // item.src = listImg[index].getAttribute('src')
        // console.log(item.src)
        update(index)

    })
})

prevBtn.addEventListener('click', e=>{
    if(currentIndex==0){
        currentIndex=listImg.length-1
    }else{
        currentIndex--
    }
    update(currentIndex)
})

nextBtn.addEventListener('click',e=>{
    if(currentIndex==listImg.length-1){
        currentIndex=0
    }else{
        currentIndex++
    }
    update(currentIndex)
})