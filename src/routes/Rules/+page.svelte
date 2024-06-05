<script>
    const Headers = [
        'Ready', 
        'Unseen attackers and Targets', 
        'Opportunity Attacks', 
        'Grappling and Shoving', 
        'Cover', 
        'Mounting and Dismounting', 
        'Underwater Combat', 
        'Charmed', 
        'Frightened', 
        'Incapacitated', 
        'Paralyzed', 
        'Petrified', 
        'Prone', 
        'Restrained', 
        'Stunned', 
        'Unconscious'
    ];

    const Explanations = [
    `Ready: Sometimes you want to get the jump on a foe or wait for a particular circumstance before you act. To do so, you can take the Ready action on your turn, which lets you act using your reaction before the start of your next turn. You decide what perceivable circumstance will trigger your reaction, then choose the action you will take in response to that trigger, or move up to your speed. You can take your reaction right after the trigger finishes or ignore the trigger. When you ready a spell, it requires concentration and if your concentration is broken, the spell dissipates without taking effect.`,
    `Unseen Attackers and Targets: Combatants often try to escape their foes' notice by hiding, casting the invisibility spell, or lurking in darkness. When you attack a target that you can't see, you have disadvantage on the attack roll. This is true whether you're guessing the target's location or you're targeting a creature you can hear but not see. If the target isn't in the location you targeted, you automatically miss. When a creature can't see you, you have advantage on attack rolls against it. If you are hidden—both unseen and unheard—when you make an attack, you give away your location when the attack hits or misses.`,
    `Opportunity Attacks: In a fight, everyone is constantly watching for a chance to strike an enemy who is fleeing or passing by. You can make an opportunity attack when a hostile creature that you can see moves out of your reach. To make the opportunity attack, you use your reaction to make one melee attack against the provoking creature. The attack occurs right before the creature leaves your reach. You can avoid provoking an opportunity attack by taking the Disengage action, teleporting, or when moved by an external force.`,
    `Grappling and Shoving: When you want to grab a creature or wrestle with it, you can use the Attack action to make a special melee attack, a grapple. If you're able to make multiple attacks with the Attack action, this attack replaces one of them. The target of your grapple must be no more than one size larger than you and must be within your reach. Using at least one free hand, you try to seize the target by making a grapple check instead of an attack roll: a Strength (Athletics) check contested by the target's Strength (Athletics) or Dexterity (Acrobatics) check (the target chooses the ability to use). Escaping a grapple requires a contested check as well.`,
    `Cover: Walls, trees, creatures, and other obstacles can provide cover during combat, making a target more difficult to harm. A target can benefit from cover only when an attack or other effect originates on the opposite side of the cover. Half cover gives a +2 bonus to AC and Dexterity saving throws. Three-quarters cover provides a +5 bonus. Total cover prevents a target from being directly attacked or targeted by most spells.`,
    `Mounting and Dismounting: A knight charging into battle on a warhorse, a wizard casting spells from the back of a griffon, or a cleric soaring through the sky on a pegasus all enjoy the benefits of speed and mobility that a mount can provide. Once during your move, you can mount a creature that is within 5 feet of you or dismount. Doing so costs an amount of movement equal to half your speed. If your mount is forced to move or knocked prone, you must make a Dexterity saving throw or fall off.`,
    `Underwater Combat: When adventurers pursue sahuagin back to their undersea homes, fight off sharks in an ancient shipwreck, or find themselves in a flooded dungeon room, they must fight in a challenging environment. Underwater, melee weapon attacks by creatures without a swimming speed have disadvantage unless the weapon is a dagger, javelin, shortsword, spear, or trident. Ranged weapon attacks automatically miss beyond normal range, and even within normal range, they have disadvantage unless the weapon is a crossbow, a net, or a thrown weapon like a javelin. Creatures and objects fully immersed in water have resistance to fire damage.`,
    "Charmed: A charmed creature can't attack the charmer or target the charmer with harmful abilities or magical effects. The charmer has advantage on any ability check to interact socially with the creature.",
    "Frightened: A frightened creature has disadvantage on ability checks and attack rolls while the source of its fear is within line of sight. The creature can't willingly move closer to the source of its fear.",
    "Incapacitated: An incapacitated creature can't take actions or reactions.",
    "Paralyzed: A paralyzed creature is incapacitated and can't move or speak. The creature automatically fails Strength and Dexterity saving throws. Attack rolls against the creature have advantage, and any attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature.",
    "Petrified: A petrified creature is transformed, along with any nonmagical object it is wearing or carrying, into a solid inanimate substance (usually stone). Its weight increases by a factor of ten, and it ceases aging. The creature is incapacitated, can't move or speak, and is unaware of its surroundings. Attack rolls against the creature have advantage, the creature automatically fails Strength and Dexterity saving throws, and the creature has resistance to all damage. The creature is immune to poison and disease, although a poison or disease already in its system is suspended, not neutralized.",
    "Prone: A prone creature's only movement option is to crawl, unless it stands up and thereby ends the condition. The creature has disadvantage on attack rolls. An attack roll against the creature has advantage if the attacker is within 5 feet of the creature. Otherwise, the attack roll has disadvantage.",
    "Restrained: A restrained creature's speed becomes 0, and it can't benefit from any bonus to its speed. Attack rolls against the creature have advantage, and the creature's attack rolls have disadvantage. The creature has disadvantage on Dexterity saving throws.",
    "Stunned: A stunned creature is incapacitated, can't move, and can speak only falteringly. The creature automatically fails Strength and Dexterity saving throws. Attack rolls against the creature have advantage.",
    "Unconscious: An unconscious creature is incapacitated, can't move or speak, and is unaware of its surroundings. The creature drops whatever it's holding and falls prone. The creature automatically fails Strength and Dexterity saving throws. Attack rolls against the creature have advantage. Any attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature.",
    ];

    let activeExplanation = null;
</script>

<main class="site">
    <div class="container">
        <div>
            <div class="headers">
                {#each Headers as header, index}
                    <div class="text" 
                        on:mouseover={() => activeExplanation = index} 
                        on:mouseout={() => activeExplanation = null}>
                        {header}
                        {#if activeExplanation === index}
                            <div class="explanation">{Explanations[index]}</div>
                        {/if}
                    </div>
                {/each}
            </div>
        </div>
    </div>
</main>

<style>
    @font-face {
		font-family: "Enchanted Land";
		src: url('/Enchanted Land.otf');
  	}

    .text {
        gap:5px;
        margin: 10px;
        width: fit-content;    
        border-radius: 5px;
		color: #3c280d; 
		transition: all 0.3s ease;
		text-decoration: none;
		font-weight: bold;
		border-radius: 20%;
        font-family: 'Enchanted Land', cursive;
        padding: 5px; 
        position: relative;
    }

    .headers{
        display: grid;
        grid-template-columns: repeat(4,1fr);
        gap: 70px 0px; 
        margin-top: 70px; 
        margin-left: 90px;
        margin-right: 90px;
        justify-items: center;
    }

    .explanation {
        background-color: #fffbe6; 
        padding: 10px;
        margin-top: 5px;
        border-radius: 5px;
        text-align: left;
        font-size: 14px;
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        position: absolute;
        width: 25vw;
        z-index: 4;
        left: -6vw;
    }

    .container{
        position: relative;
        width: 50%;
        height: 90vh;
        top: 10vh;
        text-align: center;
        background-image: url("/Parchment paper.jpg" );
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        transform: scale(1.4,1);
    }

    .site{
        background-image: url('/Parchment shit.jpg');
        background-position: center center;
        background-attachment: fixed;
        background-size:contain;
        height:100%;
        width:100%;
        display: flex;
        justify-content:center;
        overflow-y: hidden;
        overflow-x: hidden; 
    }
</style>