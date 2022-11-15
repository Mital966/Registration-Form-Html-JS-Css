var parentdiv = document.getElementById("result")


document.querySelector("#photo").addEventListener("change",function () {
    const reader = new FileReader();

    reader.addEventListener("load", ()=>{
        localStorage.setItem("1",reader.result);
        
    });
    reader.readAsDataURL(this.files[0]);
    showimg(1)

})
document.querySelector("#hsc").addEventListener("change",function () {
    const reader = new FileReader();

    reader.addEventListener("load", ()=>{
        localStorage.setItem("2",reader.result);
    });
    reader.readAsDataURL(this.files[0]);
    
    
})
document.querySelector("#ssc").addEventListener("change",function () {
    const reader = new FileReader();

    reader.addEventListener("load", ()=>{
        localStorage.setItem("3",reader.result);
        
    });
    reader.readAsDataURL(this.files[0]);
    
    
})
document.querySelector("#sem").addEventListener("change",function () {
    const reader = new FileReader();

    reader.addEventListener("load", ()=>{
        localStorage.setItem("4",reader.result);
    });
    reader.readAsDataURL(this.files[0]);
    
})

function showimg(allInput){
    let res = localStorage.getItem(allInput)
    console.log(res)
    
    var image = new Image(60,60);
    image.src = res;
    parentdiv.appendChild(image)

}
function gotonext(){
    console.log("function working")
    window.location.href="preview.html";

}