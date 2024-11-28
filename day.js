function createStars(){
    const container = document.querySelector("body");
    let i = document.querySelector("star")
    for(let i=0;i<1500;i++){
        const star=document.createElement("dev");
        star.className="star";

        star.style.top=Math.random()*100 + "%";
        star.style.left=Math.random()*100 + "%";

        container.appendChild(star);
    }
}
createStars();