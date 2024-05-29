<script>
	import '../app.pcss';
	import { base } from '$app/paths';

	const myBreadcrumbs = [
	{ label: 'Session Planner', link: '/Session' },
	{ label: 'Rules Reference', link: '/Rules' },
	{ label: 'DM-ASSISTANT',},
	{ label: 'Combat Assistant', link: '/Combat' },
	{ label: 'Main Menu', link: '/' }
];
</script>

<ol class="breadcrumb">
	{#each myBreadcrumbs as crumb, i}
		{#if i < myBreadcrumbs.length}
			<li class="crumb"><a class="anchor" id={crumb.label} href={crumb.link}>{crumb.label}</a></li>
			<li class="crumb-separator" aria-hidden>&rsaquo;</li>
		{:else}
			<li class="crumb">{crumb.label}</li>
		{/if}
	{/each}
</ol>
<audio controls autoplay> <!--https://www.tutorialspoint.com/How-to-add-background-music-to-your-web-page-->
	<source src="Bugbears.mp3" type="audio/mpeg">
</audio>

<style>
	audio{
		top:8px;
		left:8px;
		position: absolute;
	}

	@font-face {
		font-family: "Enchanted Land";
		src: url('/Enchanted Land.otf');
  	}

	#DM-ASSISTANT{
		color:#f8f8ff;
		font-weight:bolder;
		font-family:'Times New Roman', Times, serif;
	}

	#DM-ASSISTANT:hover, #DM-ASSISTANT:focus{
		color: #fff;
		text-decoration: none;
		transform: translateY(0);
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0);
	}

	.breadcrumb {
	background-image: url('/Parchment shit.jpg');
	margin: 0;
	position: absolute;
	left: 50%; 
	padding:17px;
	top:0;
	transform: translateX(-50%);
	background-color: #0a0f25;;
	display: flex; 
	align-items: center; 
	justify-content: center; 
	font-family: 'Enchanted Land', cursive;
    gap: 20px;
	height: 10vh;
	} 

	.crumb a {
		background-color: #c9a678;
		color: #3c280d;
		padding: 7px 16px;
		border-radius: 5px;
		transition: all 0.3s ease;
		text-decoration: none;
		font-weight: bold;
		border-radius: 20%;
	}
	
	.crumb a:hover, .crumb a:focus {
		background-color: #b89160;
		color: #fff;
		text-decoration: none;
		transform: translateY(-2px);
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
	}

	.crumb-separator {
		display: none; /* Hide the separator for a more book-like appearance */
	}

	.anchor { 
	color: #7b9ebd; 
	padding: 10px 15px; 
	display: block;
	}

	.breadcrumb li {
	list-style: none; 
	}
</style>
<slot />
