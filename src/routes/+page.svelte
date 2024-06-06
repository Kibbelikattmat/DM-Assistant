<script>
    import { base } from '$app/paths';
    import { onMount } from "svelte";

    onMount(() => console.log("base:", base));
</script>

<main class="Site">
    <div class="pic-container">
        <h1 class="label" id="SP">Session Planner</h1>
        <a href="{base ? base : ''}/Session"><img class="pic" src="Snip.PNG" alt="Session Planner"></a>
    </div>
    <div class="pic-container">
        <h1 class="label" id="RR">Rules Reference</h1>
        <a href="{base ? base : ''}/Rules"><img class="pic" src="snip3.PNG" alt="Rules Reference"></a>
    </div>
    <div class="pic-container">
        <h1 class="label" id="CA">Combat Assistant</h1>
        <a href="{base ? base : ''}/Combat"><img class="pic" src="snip4.PNG" alt="Combat Assistant"></a>
    </div>
</main>

<style>
    @font-face {
        font-family: "Enchanted Land";
        src: url('/Enchanted Land.otf');
    }

    body {
        margin: 0;
        padding: 0;
        font-family: 'Enchanted Land', sans-serif;
        background-color: #2c2c2c; 
        display: flex;
        justify-content: center;
        align-items: flex-start; 
        height: 100vh;
        background-size: cover;
        background-position: center;
    }

    .Site {
        width: 100%;
        height: calc(100% - 73px);
        margin-top: 73px;
        background: rgba(235, 222, 189, 0.9); 
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
        padding: 20px;
        box-sizing: border-box;
        position: relative;
        background-image: url('/Cool.webp'); 
        background-size: cover;
        background-position: center;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .label {
        color: #FFFFFF;
        margin-bottom: 10px;
        font-size: 2em;
    }

    .pic-container {
        width: 40vw;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 10px;
    }

    .pic {
        width: 100%;
        height: auto;
        max-width: 10vw;
        max-height: 10vw;
        border-radius: 50%;
        overflow: hidden;
    }

    .pic:hover, .pic:focus {
        transform: scale(1.1, 1.1);
    }

    @media only screen and (max-width: 600px) {
        .pic-container {
            width: 80%;
        }

        .pic {
            max-width: 20vw;
            max-height: 20vw;
        }
    }
</style>
