<script>
    import { onMount } from 'svelte';

    let noteText = '';

    // Load saved text from localStorage when the component mounts
    onMount(() => {
        const savedText = localStorage.getItem('noteText');
        if (savedText) {
            noteText = savedText;
        }
    });

    // Save text to localStorage whenever it changes
    function handleInput(event) {
        noteText = event.target.value;
        localStorage.setItem('noteText', noteText);
    }
</script>

<style>
    @font-face {
        font-family: "Enchanted Land";
        src: url('/Enchanted Land.otf');
    }

    body {
        margin: 0;
        padding: 0;
        font-family: 'Enchanted Land', sans-serif;
        background-color: #2c2c2c; /* Dark background for contrast */
        display: flex;
        justify-content: center;
        align-items: flex-start; /* Align items to start from the top */
        height: 100vh;
        background-image: url('/path/to/dnd-background.jpg'); /* Optional: D&D themed background image */
        background-size: cover;
        background-position: center;
    }

    .note-container {
        width: 100%;
        height: calc(100% - 73px);
        margin-top: 73px;
        background: rgba(235, 222, 189, 0.9); /* Parchment color with transparency */
        border: 2px solid #8B4513; /* Saddle brown border */
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
        padding: 20px;
        box-sizing: border-box;
        position: relative;
        background-image: url('/Cooly.webp'); /* Replace with the actual path to the background image */
        background-size: cover;
        background-position: center;
    }

    textarea {
        width: 100%;
        height: 100%;
        font-family: 'Enchanted Land', sans-serif;
        font-size: 1.5em;
        color: #5c3a1e; /* Dark brown text color */
        background: rgba(255, 255, 255, 0.5); /* Semi-transparent white background to improve text visibility */
        border: none;
        outline: none;
        resize: none;
        padding: 10px;
        box-sizing: border-box;
    }

    textarea::placeholder {
        color: #a0522d; /* Sienna color for placeholder text */
    }

    .decor-left, .decor-right {
        position: absolute;
        top: 0;
        width: 50px;
        height: 100%;
        opacity: 0.7;
    }

    .decor-left {
        left: 0;
    }

    .decor-right {
        right: 0;
        transform: scaleX(-1); /* Mirror image for right side */
    }
</style>

<div class="note-container">
    <div class="decor-left"></div>
    <textarea placeholder="Write your adventure here..." bind:value={noteText} on:input={handleInput}></textarea>
    <div class="decor-right"></div>
</div>
