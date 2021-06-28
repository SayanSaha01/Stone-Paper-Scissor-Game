const x = document.querySelector(".left");    //rock
    x.addEventListener("click", myfunc1);
    x.addEventListener("click",changepic1);
    const y = document.querySelector(".centre");
    y.addEventListener("click", myfunc2);
    y.addEventListener("click",changepic2);
    const z = document.querySelector(".right");
    z.addEventListener("click", myfunc3);
    z.addEventListener("click",changepic3);
    const play=document.querySelector(".button");
    play.addEventListener("click",reset);
    function reset()
    {
        document.querySelector(".right").src="images/scissor.png";
        document.querySelector(".left").src="images/rock.png";
        document.querySelector(".centre").src="images/paper.png";
        document.querySelector("#right").textContent="";
        document.querySelector("#left").textContent="";
    }
    function myfunc1() 
    {    
        console.log("R");
        let a="R";
        const alphabet = "RPS";
        const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)]
        console.log(randomCharacter);
        if (randomCharacter=='R')
        {
            document.querySelector(".right").src="images/rock.png";
            document.querySelector("#right").textContent="AI Chose Rock";
            document.querySelector(".centre").src="images/tie.png";
            console.log(" Its a Draw !!");  
        }
        else if(randomCharacter=='S')
        {
            document.querySelector(".right").src="images/scissor.png";
            document.querySelector("#right").textContent="AI Chose Scissor";
            document.querySelector(".centre").src="images/win.png";
            console.log("Congrats you Won")
        }
        else if(randomCharacter=='P')
        {
            document.querySelector(".right").src="images/paper.png";
            document.querySelector("#right").textContent="AI Chose Paper";
            document.querySelector(".centre").src="images/lose.jpg";
            console.log("You lost");
        }
    }
    function myfunc2() 
    {   
        console.log("P");    
        let a="P"; //paper
        const alphabet = "RPS";
        const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)]
        console.log(randomCharacter);
        if (randomCharacter=='P')
        {
            document.querySelector(".right").src="images/paper.png";
            document.querySelector("#right").textContent="AI Chose Paper";
            document.querySelector(".centre").src="images/tie.png";
            console.log("Congrats Its a Draw");
        }
        else if(randomCharacter=='R')
        {
            document.querySelector(".right").src="images/rock.png";
            document.querySelector("#right").textContent="AI Chose Rock";
            document.querySelector(".centre").src="images/win.png";
            console.log("Congrats you Won");
        }
        else if(randomCharacter=='S')
        {
            document.querySelector(".right").src="images/scissor.png";
            document.querySelector("#right").textContent="AI Chose Scissor";
            document.querySelector(".centre").src="images/lose.jpg";  
            console.log("You lost")         
        }
    }
    function myfunc3() 
    {   
        console.log("S");     //scissor
        let a="S";
        const alphabet = "RPS";
        const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)]
        console.log(randomCharacter);
        if (randomCharacter=='S')
        { 
            document.querySelector(".right").src="images/scissor.png";
            document.querySelector("#right").textContent="AI Chose Scissor";
            document.querySelector(".centre").src="images/tie.png";
            console.log("Congrats Its a Draw");
        }
        else if(randomCharacter=='P')
        {
            document.querySelector(".right").src="images/paper.png";
            document.querySelector("#right").textContent="AI Chose Paper";
            document.querySelector(".centre").src="images/win.png";
            console.log("Congrats you Won");
        }
        else if(randomCharacter=='R')
        {
           document.querySelector(".right").src="images/rock.png";
           document.querySelector("#right").textContent="AI Chose Rock";
           document.querySelector(".centre").src="images/lose.jpg";
           console.log("You lost");
        }
    }
    function changepic1()
    {
        document.querySelector("#left").textContent="You Chose Rock";
        document.querySelector(".left").src="images/rock.png";
    }
    function changepic2()
    {    
        document.querySelector("#left").textContent="You Chose Paper";
        document.querySelector(".left").src="images/paper.png";  
    }
    function changepic3()
    {
        document.querySelector("#left").textContent="You Chose Scissor";
        document.querySelector(".left").src="images/scissor.png";
    }