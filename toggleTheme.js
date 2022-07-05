function toggleTheme(){
    let body = document.getElementsByTagName('body')[0];
    let img = document.getElementsByTagName('img')[0]
    if(body.className === "bodyBackgroundBlue"){
        body.className = "bodyBackgroundBeige"
        img.src = "./Web/Logos/Mas logos/Mesa de trabajo 5.png"
    }else {
        body.className = "bodyBackgroundBlue"
        img.src = "./Web/Logos/Mas logos/Mesa de trabajo 4.png"
    }

}