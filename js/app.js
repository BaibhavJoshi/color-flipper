 const btn = document.getElementById("btn")
 const color = document.querySelector(".color")

 btn.addEventListener("click", function(){
    
    const randomColor = () => {
        return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, "0").toUpperCase();
    }

    let random_color = randomColor()

    document.body.style.backgroundColor = random_color

    color.textContent = random_color

 })