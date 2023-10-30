<script>
	import '../main.css'
	export let data;
</script>

<div class="app">

	

	<main>
		<slot />
	</main>
	
	
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		position: relative;
		z-index: 200;
	}
	.skipToContent {
		min-height: 2rem;
		padding: 0.8rem;	
		margin-left: 8px;
		z-index: 200;	
		position: absolute;
		transform: translateY(-100px);
		transition: all .3s;
		background-color: var(--secondarycolor) ;
		font-family: var(--basefont);
	}

	.skipToContent:focus {
		transform: translateY(0px); 
		opacity: 100;
	}

	header{
		background-color: white;
		padding: clamp(0.5rem, 2vw, 2rem);
		border-bottom: 1px solid lightgrey;
  		text-align: center;
		flex: 0 1 auto; 
		position: sticky;
		top: 0;
		z-index: 2;
		
	}

	main{
		flex: 0 1 auto;
	}

	footer {
		display: flex;
		flex-direction: column;
		flex: 1 1 auto;
		gap: var(--recipieGap);
		justify-content: center;
		align-items: center;
		background-color: var(--secondarycolor);
		padding: 2rem;
	}
</style>


<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300&display=swap" rel="stylesheet">
