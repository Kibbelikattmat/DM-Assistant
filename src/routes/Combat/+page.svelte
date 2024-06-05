<script>
import { onMount, onDestroy } from 'svelte';

let combatants = [];
let listenersAdded = false;

onMount(() => {
    let combatstore = window.localStorage.getItem("combatants");

    if (combatstore != null) {
        combatants = JSON.parse(combatstore);
        for (let combatant of combatants) {
            createCombatant(combatant.name, combatant.notes, combatant.initiative, combatant.hp, false);
        }
    }

    if (!listenersAdded) {
        document.addEventListener('keydown', handleKeyDown);
        listenersAdded = true;
    }
});

onDestroy(() => {
    if (listenersAdded) {
        document.removeEventListener('keydown', handleKeyDown);
        listenersAdded = false;
    }
});

function handleKeyDown(event) {
    if (event.key === '<') {
        createEmptyCombatant();
    } else if (event.key === '-') {
        createPrefilledCombatant();
    }
}

function createNewDiv() {
    const choice = prompt("Enter '1' to add a pre-filled combatant or '2' to add an empty combatant:");

    if (choice === '1') {
        createPrefilledCombatant();
    } else if (choice === '2') {
        createEmptyCombatant();
    } else {
        alert("Invalid choice. Please enter '1' or '2'.");
    }
}

function createPrefilledCombatant() {
    let initiative = prompt("Enter initiative:");
    if (initiative === null || initiative.trim() === "") return; 
    initiative = parseInt(initiative, 10);
    if (isNaN(initiative)) {
        alert("Invalid initiative. Please enter a number.");
        return;
    }

    let hp = prompt("Enter HP:");
    if (hp === null || hp.trim() === "") return;
    hp = parseInt(hp, 10);
    if (isNaN(hp)) {
        alert("Invalid HP. Please enter a number.");
        return;
    }

    let name = prompt("Enter combatant name:");
    if (name === null || name.trim() === "") return; 

    let notes = prompt("Enter notes:");
    if (notes === null) notes = ""; 

    createCombatant(name, notes, initiative, hp, true);
}

function createEmptyCombatant() {
    createCombatant('Combatant', 'Notes', '', '', true);
}

function saveCombatants() {
    let combatantString = JSON.stringify(combatants);
    window.localStorage.setItem("combatants", combatantString);
}

function createCombatant(name, notes, initiative, hp, save) {
    if (save) {
        combatants = [...combatants, { name, notes, initiative, hp }];
        saveCombatants();
    }

    const newDiv = document.createElement('div');

    const nameSpan = document.createElement('span');
    nameSpan.textContent = name;
    nameSpan.style.color = 'yellow';
    nameSpan.contentEditable = 'true';
    nameSpan.style.whiteSpace = 'pre-wrap'; 
    nameSpan.style.maxWidth = '150px'; 
    nameSpan.addEventListener('input', updateCombatant); 

    const notesSpan = document.createElement('span');
    notesSpan.textContent = notes;
    notesSpan.style.color = 'white';
    notesSpan.contentEditable = 'true';
    notesSpan.style.marginLeft = '20px';
    notesSpan.style.marginRight = '20px';
    notesSpan.style.whiteSpace = 'pre-wrap';
    notesSpan.style.maxWidth = '150px'; 
    notesSpan.addEventListener('input', updateCombatant); 

    const inputWrapper = document.createElement('div');
    inputWrapper.style.display = 'flex';
    inputWrapper.style.alignItems = 'center';
    inputWrapper.style.flexWrap = 'wrap';

    const initiativeInput = document.createElement('input');
    initiativeInput.type = 'number';
    initiativeInput.className = 'rank-input';
    initiativeInput.style.width = '50px';
    initiativeInput.style.textAlign = 'right';
    initiativeInput.value = initiative;
    initiativeInput.addEventListener('change', updateCombatant); 

    const initiativeText = document.createElement('span');
    initiativeText.textContent = 'Initiative';
    initiativeText.style.fontSize = 'medium';
    initiativeText.style.marginLeft = '5px';
    initiativeText.style.color = 'yellow';

    const hpWrapper = document.createElement('div');
    hpWrapper.style.display = 'flex';
    hpWrapper.style.alignItems = 'center';
    hpWrapper.textContent = '';
    hpWrapper.style.marginLeft = '20px'; 

    const hpInput = document.createElement('input');
    hpInput.type = 'text'; 
    hpInput.style.width = '50px';
    hpInput.style.textAlign = 'right';
    hpInput.value = hp;
    hpInput.addEventListener('change', updateCombatant); 

    const hpText = document.createElement('span');
    hpText.textContent = 'HP';
    hpText.style.fontSize = 'medium';
    hpText.style.marginLeft = '5px';
    hpText.style.color = 'yellow';

    // Event listener for HP input to handle math expressions
    hpInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            const currentValue = parseInt(hpInput.value, 10) || 0;
            const newValue = prompt("Enter adjustment (e.g., -10):");
            if (newValue !== null && newValue.trim() !== "") {
                try {
                    const result = eval(currentValue + newValue);
                    hpInput.value = result;
                    updateCombatant(); 
                } catch (error) {
                    alert("Invalid input.");
                }
            }
        }
    });

    inputWrapper.appendChild(initiativeInput);
    inputWrapper.appendChild(initiativeText);

    hpWrapper.appendChild(hpInput);
    hpWrapper.appendChild(hpText);

    inputWrapper.appendChild(hpWrapper); 

    const buttonWrapper = document.createElement('div');
    buttonWrapper.style.display = 'flex';
    buttonWrapper.style.flexDirection = 'column';
    buttonWrapper.style.marginLeft = '10px'; 

    const duplicateButton = document.createElement('button');
    duplicateButton.textContent = 'Duplicate';
    duplicateButton.style.borderColor = 'black';
    duplicateButton.style.borderWidth = '3px';
    duplicateButton.style.backgroundColor = 'blue';
    duplicateButton.addEventListener('click', () => duplicateCombatant(newDiv));

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.style.backgroundColor = 'red';
    deleteButton.style.borderColor = 'black';
    deleteButton.style.borderWidth = '3px';
    deleteButton.style.color = 'white';
    deleteButton.style.marginTop = '5px'; 
    deleteButton.addEventListener('click', () => deleteCombatant(newDiv));

    buttonWrapper.appendChild(duplicateButton);
    buttonWrapper.appendChild(deleteButton);

    newDiv.appendChild(nameSpan);
    newDiv.appendChild(notesSpan);
    newDiv.appendChild(inputWrapper);
    newDiv.appendChild(buttonWrapper); 
    newDiv.style.border = '2px solid yellow';
    newDiv.style.margin = '5px';
    newDiv.style.padding = '10px';
    newDiv.style.flex = '1';
    newDiv.style.display = 'flex';
    newDiv.style.flexWrap = 'wrap'; 
    newDiv.style.justifyContent = 'space-between';
    newDiv.style.alignItems = 'center';
    newDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; 
    newDiv.classList.add('dynamic-div'); 

    const container = document.querySelector('.container');

    container.appendChild(newDiv);

    sortDivs();
}

function duplicateCombatant(combatantDiv) {
    const name = combatantDiv.querySelector('span').textContent;
    const notes = combatantDiv.querySelectorAll('span')[1].textContent;
    const initiative = combatantDiv.querySelector('input.rank-input').value;
    const hp = combatantDiv.querySelectorAll('input')[1].value;
    createCombatant(name, notes, initiative, hp, true);
}

function deleteCombatant(combatantDiv) {
    const index = Array.from(combatantDiv.parentNode.children).indexOf(combatantDiv);
    combatants.splice(index, 1); 
    window.localStorage.setItem("combatants", JSON.stringify(combatants)); // Update localStorage
    combatantDiv.remove(); 
}

function updateCombatant() {
    combatants = Array.from(document.querySelectorAll('.dynamic-div')).map(div => {
        return {
            name: div.querySelector('span[contenteditable]').textContent,
            notes: div.querySelectorAll('span[contenteditable]')[1].textContent,
            initiative: div.querySelector('input.rank-input').value,
            hp: div.querySelectorAll('input[type="text"]')[0].value
        };
    });
    saveCombatants();
}

function deleteAllCombatants() {
    const container = document.querySelector('.container');
    container.innerHTML = '';
    combatants = [];
    saveCombatants();
}

function sortDivs() {
    const container = document.querySelector('.container');
    const divs = Array.from(container.getElementsByClassName('dynamic-div'));

    divs.sort((a, b) => {
        const aValue = parseInt(a.querySelector('input.rank-input').value, 10) || 0;
        const bValue = parseInt(b.querySelector('input.rank-input').value, 10) || 0;
        return bValue - aValue;
    });

    divs.forEach(div => container.appendChild(div));
}
</script>

<main class="Site">
    <img src="Battlebackground.webp" alt="hej" class="pic">

    <button class="Combatant" on:click={createNewDiv}>Add Combatant (&lt;/-)</button>
    <button class="Combatant smaller" on:click={deleteAllCombatants}>Delete All Combatants</button>
        
    <div class="container">
    </div>
</main>

<style>
    @font-face {
    font-family: "Enchanted Land";
    src: url('/Enchanted Land.otf');
    }

    .container {
        height: 704px;
        width: 700px;
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        text-align: center;
        top: 73px;
        z-index: 2;
        overflow: scroll;
        display: flex;
        flex-direction: column;
    }

    .Site {
        height: 100%;
        width: 100%;
    }

    .Combatant {
        background-color: #FFD700;
        border: none;
        color: black;
        padding: 15px 32px;
        font-weight: bold;
        position: absolute;
        top: 20%;
        left: 10%;
        transform: translate(-50%, -50%);
        z-index: 100;
        font-family: 'Enchanted Land', cursive;
        border-radius: 5px;
        box-shadow: 0px 0px 10px #000000;
    }

    .Combatant:hover {
        background-color: #D4AF37;
        color: #fff;
        text-decoration: none;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    }

    .Combatant.smaller {
        padding: 10px 20px;
        top: 30%; 
    }

    .pic {
        width: 1536px;
        height: 704px;
        top: 73px;
        transform: scale(1, 1);
        position: absolute;
        z-index: 1;
    }
</style>
