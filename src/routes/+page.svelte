<main class="Site"> 
    <div class="pic-container">
                <h1 class="label" id="SP">Session Planner</h1>

        <a href="/Session"><img class="pic"  src="/Snip.PNG" alt="Session Planner"></a>
    </div>
    <div class="pic-container" >
                <h1 class="label" id="RR">Rules Reference</h1>

        <a href="/Rules"><img class="pic" src="/snip3.PNG" alt="Rules Reference"></a>
    </div>
    <div class="pic-container" >
                <h1 class="label" id="CA">Combat Assistant</h1>

        <a href="/Combat"><img class="pic" src="/snip4.PNG" alt="Combat Assistant"></a>
    </div>

</main> 

<style>
    main {
        background-image:url('/Cool.webp');
        background-position: center center;
        background-color:#0a0f25;
        background-repeat:no-repeat;
        background-attachment: fixed;
        background-size:contain;
        height:100%;
        width:100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;  
    }

    .label {
        color:#FFFFFF ;
        margin-bottom: 10px; 
        font-size: 2em; 
    }

    .pic-container{
        width: 40vw;
        height: 25vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }


    .pic{
        width: 10vw;
        height:10vw;
        border-radius: 50%;
        overflow:hidden;
    }

    .pic:hover, .pic:focus {
        transform: scale(1.1,1.1)
	}

    @media only screen and (max-width: 600px) {
        .src, .text-color {
            background-attachment: scroll; 
        }
    }
</style>