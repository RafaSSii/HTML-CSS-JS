function controle(){
        var btn = document.getElementById ("btn");
        var b1 = document.getElementById("bola-01");
        var b2 = document.getElementById("bola-02");
        var b3 = document.getElementById("bola-03");
        var b4 = document.getElementById("bola-04");
    
        if(btn.innerText == "Pausar"){
            btn.innerText = "Play";
            container.style.backgroundColor = "#000";
            container.style.backgroundColor = "#000";
            b1.style.animationPlayState = "paused";
            b2.style.animationPlayState = "paused";
            b3.style.animationPlayState = "paused";
            b4.style.animationPlayState = "paused";
}
        else{
            btn.innerHTML = "Pausar";
            container.style.backgroundColor = "#FFF";
            b1.style.animationPlayState = "running";
            b2.style.animationPlayState = "running";
            b3.style.animationPlayState = "running";
            b4.style.animationPlayState = "running";
}
}


    
        
    