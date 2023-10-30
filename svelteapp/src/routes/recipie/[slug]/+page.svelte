<script>
  export let data;
  import { translateCategoryList   } from '$lib/translations.js';
  import  { urlFor } from '../../../lib/utils'
  import  { findtime } from '../../../lib/utils'
  import Cooking from '../../../lib/components/icons/Cooking.svelte';
  import Choping from '../../../lib/components/icons/Choping.svelte';
  import Level from '../../../lib/components/icons/Level.svelte';
  import Plus from '../../../lib/components/icons/Plus.svelte';
  import Minus from '../../../lib/components/icons/Minus.svelte';
  import Steps from '../../../lib/components/Steps.svelte';
  import Ingredients from '../../../lib/components/Ingredients.svelte'; 
  import Rating from '../../../lib/components/Rating.svelte';

  $: allBlocks = data?.recipies[0].allinstructions;

  let currentPortions = data?.recipies[0].portions;
  let initialPortions = data?.recipies[0].portions;
  function increasePortions() {
    if (currentPortions >= 100) {
      currentPortions += 10
    } else {
      currentPortions += 1
    }
    
  };
  function decreasePortions() {
    if (currentPortions > 100) {
      currentPortions -= 10
    } else if (currentPortions > 1) {
      currentPortions -= 1
    } 
  };

  let language = 'Norwegian'; 
  $: translatedCategoryList = translateCategoryList(language, data.recipies[0].categorylist);

</script>

<svelte:head> <title> {data.recipies[0].recipieTitle} </title></svelte:head>

{#each data.recipies as recipie}

  <!-- *** Hero -------------------------->
  <div class="hero">
    <div class="heroInfo">
  
      {#if translatedCategoryList != null}
      <div class="categories" aria-label="categorier">
          {#each translatedCategoryList as category (category)}
          <div class="categorytag">
            <p>{category}</p>
          </div>
          {/each}
        </div>
      {/if}
      
      <h2>{recipie.recipieTitle}</h2>
      <!-- <Rating rating={recipie.rating} /> -->
      <p>{recipie.recipieDescription ?? ''}</p>

      <div class="icons"> 
        <div class="icon">
          <div> <Level></Level> </div>
          <b aria-label="vanskelighetsgrad">{recipie.level}</b>
        </div>
        <div class="icon">
          <div> <Choping></Choping> </div>
          <b aria-label="aktiv tid" >{findtime(recipie).act}</b>
        </div>
        <div class="icon">
          <div> <Cooking></Cooking> </div>
          <b aria-label="total tid" >{findtime(recipie).tot}</b>
        </div>
      </div>	<!-- done icons -->

      <div> <!-- Portions -->
        <h4> {recipie.portionsEtc ?? 'Porsjoner:'}</h4>
        <div class="portions">
          <button class="minusButton" aria-label="reduser antall porsjoner" on:click={decreasePortions}> – </button>
          <input aria-label="antall porsjoner" id="number" min="0" type="number" bind:value={currentPortions} />
          <button aria-label="øk antall porsjoner" on:click={increasePortions} > + </button>
        </div>
      </div>
     
    </div>

    <img  class="heroImage" src={urlFor(recipie.coverimageUrl).url()}  
          alt="{recipie.coverimagAltText}">

  </div>

  <!-- *** Ingredient ---------------->
 
  <section>
    <div class="container">
      <h3 class="ingredientTitle"> Ingredienser </h3>
      <div class="ingredientList">
        <Ingredients {allBlocks} {currentPortions} {initialPortions} />
      </div>
    </div> 
  </section>

<!-- *** Recipie ---------------->

  <section class="recipies">
    <div class="container">
      <h3 class="ingredientTitle"> Fremgangsmåte </h3>
      <div class="instructionCards">
        <Steps {allBlocks} {currentPortions} {initialPortions} />
      </div>
      <p>{recipie.extraInstruction ?? ""}</p>
    </div>
  </section>

{/each}

<style>
  .hero{
    background-color: var(--secondarycolormild);
      width: 100%;
      display: flex;
      height: MAX(calc(100vh - 3rem), 500px)
  } @media (orientation: portrait){
    .hero{
        flex-direction: column-reverse;
    }
  }

/* <!-- * --- HERO INFORMATION --- */
  .heroInfo{
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin: auto;
    padding: 1rem 1rem;
  } @media ( orientation: landscape){
    .heroInfo{
      gap: var(--recipieGapM);
      min-width: MAX(300px + 10vw, 40%);
    }
  } @media ( orientation: portrait){
    .heroInfo{
      gap: var(--recipieGapM);
      min-width: MAX(200px + 35vw, 80%);
    }
  } 

  /* <!-- * --- CATEGORIES ---*/

  .categories{
    display: flex;
    gap: 1rem
  }
  .categorytag{
    background-color: rgb(242, 209, 214);
    padding: 0.5rem 1rem;
    border-radius: var(--cardRadius);
  }

  .heroImage{
    object-fit: cover;
  }@media ( orientation: landscape){
    .heroImage{
      width: 50%;
    }
  } @media ( orientation: portrait){
    .heroImage{
      height: max(10rem, 50vh);
    }
  }

/* <!-- * --- ICONS AND PORTIONS --- */

  .icons{
    display: flex;
    justify-content: space-around;
    width: 100%;
    border-top: solid lightgrey 1px;
    border-bottom: solid lightgrey 1px;
    align-items: flex-end;
    padding: var(--recipieGapM) 0
  }
  .icon{
    display: flex;
    flex-direction: column; 
    gap: 0.5rem;
    align-items: center;
    flex: 1 1;
  }
  .portions{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
    padding: 0 1rem;

  }
  button {
    background-color: transparent;
    border: none;
    font-size: 2rem;
    font-family: var(--basefont);
    font-weight: 100;
  }
  .minusButton{
    transform: translate(-1px, -2px);
  }

  /* Chrome, Safari, Edge, Opera */
  #number::-webkit-inner-spin-button,
  #number::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  /* Firefox */
  #number {
    -moz-appearance: textfield;
    width: 3rem;
    text-align: center;
    font-family: var(--basefont);
    height: 1.7rem;
    border: var(--linecolorlight);
    font-size: 1rem;
    font-weight: 200;
  }

/***  <!-- *  INGREDIENTS AND RECIPIE --------------- ***/
  section{
    padding: clamp(32px, 8vw , 8rem ) var(--recipieGap);;
  }
  .container{
    display: flex;
    flex-direction: column;
    margin: auto;
    max-width: 700px;
  }

/* <!-- * --- INGREDIENST --- */

  .ingredientTitle{
    text-align: center;
    margin-bottom: 1rem;
  }
  .ingredientList{
    display: flex;
    margin: auto 0;
    justify-content: center;
  } @media ( orientation: landscape){
    .ingredientList{
      min-width: 40%;
    }
  } @media ( orientation: portrait){
    .ingredientList{
      min-width: 80%;
    }
  } 

/* <!-- * --- RECIPIE --- */
  .recipies{
    background-color: var(--secondarycolormild);
  }
</style>
