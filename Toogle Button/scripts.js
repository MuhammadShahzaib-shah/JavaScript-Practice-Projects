let color = "white";
let colorChange = () => {
    if (color == "white") {
        let dev = document.getElementById("sab")
        dev.style.justifyContent = "end";
        dev.style.boxShadow="5px 12px 16px black "
        dev.style.backgroundColor="white"
        let dav=document.getElementById("hi")
        dav.style.backgroundColor="black";
        let colours = document.querySelector("body")
        colours.style.backgroundColor = "black";
        color = "black"

    }
    else {
        let dev = document.getElementById("sab")
        dev.style.boxShadow="5px 12px 16px white "
        dev.style.justifyContent = "start";
        dev.style.backgroundColor="black"
        let dav=document.getElementById("hi")
        dav.style.backgroundColor="white";
        let colours = document.querySelector("body")
        colours.style.backgroundColor = "white"
        color = "white"

    }


}