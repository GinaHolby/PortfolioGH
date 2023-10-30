<script>
  import { onMount } from 'svelte';

  import Arrow from "./icons/Arrow.svelte";
  import Choping from './icons/Choping.svelte';
  import Cooking from './icons/Cooking.svelte';
  import CollapsibleSection from "./CollapsibleSection.svelte"

  // variables that is used to count the number of recipies: 
  export let totalDinner
    export let totalStew
    export let totalPizza
    export let totalPasta
    export let totalPanrecipie
    export let totalOnePot
    export let totalSaladdinner
    export let totalPiedinner
    export let totalOtherdinner
  export let totalSides
    export let totalSauce
    export let totalDressing
    export let totalMarinade
  export let totalDessert
    export let totalIce
    export let totalCake
    export let totalMinicakes
    export let totalWaffles
    export let totalPastry
    export let totalDessertpie
    export let totalOtherdessert
  export let totalPreserve
    export let totalPickling
    export let totalFermentation
    export let totalDrying
    export let totalFreezing
    export let totalCanning
  export let totalLevel
    export let totalEasy
    export let totalMedium
    export let totalHard

  //variables that is used to make the filtering system work    
  export let selectedFilters
  export let difficultyLevel
  export let totalmaxTime = null;
  export let totalminTime = null;
  export let activemaxTime = null;
  export let activeminTime = null;

  // functions that happen when the filter is checked
  export function toggleNormalTag(tag) {
    if (selectedFilters.includes(tag)) { // dette skjer hvis taggen allerede er trykket på, den blir da fjernet fra arrayaen
      selectedFilters = selectedFilters.filter(t => t !== tag);
    } else {
      selectedFilters = [...selectedFilters, tag]; // dette skjer hvis tagge er uncecked, den blir lagt til i arryen. 
    }
  }
  export function toggledifficultyLevel(tag) {
    if (difficultyLevel.includes(tag)) { // dette skjer hvis taggen allerede er trykket på, den blir da fjernet fra arrayaen
      difficultyLevel = difficultyLevel.filter(t => t !== tag);
    } else {
      difficultyLevel = [...difficultyLevel, tag]; // dette skjer hvis tagge er uncecked, den blir lagt til i arryen. 
    }
  }

  function setTime(time) {
    totalmaxTime = time;
  }

  export let filterOpen = false;

   // Function to open the filter popup
 function openPopup() {
    filterOpen = true;
  }

  // Function to close the filter popup
  function closePopup() {
    filterOpen = false;
  }

   // Function that cheks how wide the screen is and if the filter should be visable. 
  onMount(() => {
    const mediaQuery = window.matchMedia('(min-width: 750px)');
    
    function handleResize(event) {
      if (event.matches) {
        openPopup();
      } else {
        closePopup();
      }
    }

    // Call handleResize initially and add an event listener for screen width changes
    handleResize(mediaQuery);
    mediaQuery.addListener(handleResize);
    
    return () => {
      // Cleanup the event listener when the component is unmounted
      mediaQuery.removeListener(handleResize);
    };
  });

</script>

<div class="section">

  <button class="arrowButton"
          aria-label="filter" 
          aria-expanded={filterOpen ? true : false }
          on:click={filterOpen ? closePopup : openPopup}
  >
    <div class="buttonLine"> <!-- the line that runns along the whole filter section -->
      <div class="arrowPadding"> <!-- the padding around the arrow -->
        <div class=" {filterOpen ? "minimize" :  "expand"  } "> 
          <Arrow/>
        </div>
      </div>
    </div>
  </button>
  
  <div class="filter" class:open={filterOpen}>

    <CollapsibleSection headerText={'Middag'} total={totalDinner} expanded={true} class="categories">
    
      <label for="container" class="category">
        <input 
          aria-label="Gryte {totalStew} oppskrifter"
          class="check" type="checkbox" 
          on:change={() => toggleNormalTag('stew')}
        >
        <span class="checkmark"> </span> 
        <p> Gryte ({totalStew}) </p>
      </label>
  
      <label for="container" class="category link">
        <input 
          aria-label="Pizza {totalPizza} oppskrifter"  
          type="checkbox" 
          on:change={() => toggleNormalTag('pizza')}
        >
        <span class="checkmark"> </span> 
        <p> Pizza ({totalPizza}) </p>
      </label>
  
      <label for="container" class="category">
        <input 
          aria-label="Pasta {totalPasta} oppskrifter" 
          type="checkbox" 
          on:change={() => toggleNormalTag('pasta')}
        >
        <span class="checkmark"> </span> 
        <p> Pasta ({totalPasta}) </p>
      </label>
  
      <label for="container" class="category">
        <input 
          aria-label="Ovnsretter {totalPanrecipie} oppskrifter" 
          type="checkbox" 
          on:change={() => toggleNormalTag('panrecipie')} 
        >
        <span class="checkmark"> </span>
        <p> Ovnsretter ({totalPanrecipie}) </p>
      </label>
  
      <label for="container" class="category">
        <input 
          aria-label="One-Pot {totalOnePot} oppskrifter" 
          type="checkbox" 
          on:change={() => toggleNormalTag('one-pot')}
        >
        <span class="checkmark"> </span> 
        <p> One-Pot ({totalOnePot}) </p>
      </label>
  
      <label for="container" class="category">
        <input 
          aria-label="Middagssalat {totalSaladdinner} oppskrifter" 
          type="checkbox" 
          on:change={() => toggleNormalTag('saladdinner')} 
        >
        <span class="checkmark"> </span>
        <p> Middagssalat ({totalSaladdinner}) </p>
      </label>
  
      <!-- <label for="container" class="category">
        <input 
          aria-label="Middagspai {totalPizza} oppskrifter" 
          type="checkbox" 
          on:change={() => toggleNormalTag('piedinner')}
        >
        <span class="checkmark"> </span> 
        <p> Middagspai ({totalPiedinner}) </p>
      </label> -->
  
      <label for="container" class="category">
        <input 
          aria-label="Annen middag {totalOtherdinner} oppskrifter" 
          type="checkbox" 
          on:change={() => toggleNormalTag('otherdinner')}
        >
        <span class="checkmark"> </span> 
        <p> Annet ({totalOtherdinner}) </p>
      </label>
  
    </CollapsibleSection>
  
    <CollapsibleSection 
      headerText={'Tilbehør'} 
      total={totalSides} 
      expanded={false} 
      class="categories"
    >
      
      <label for="container" class="category">
        <input 
          aria-label="Sauser {totalSauce} oppskrifter" 
          type="checkbox" 
          on:change={() => toggleNormalTag('sauce')} 
        >
        <span class="checkmark"> </span> 
        <p> Sauser ({totalSauce}) </p>
      </label>
  
      <label for="container" class="category link">
        <input 
          aria-label="Dip og Dressing {totalDressing} oppskrifter" 
          type="checkbox" 
          on:change={() => toggleNormalTag('dressing')}
        >
        <span class="checkmark"> </span> 
        <p> Dip og Dressing ({totalDressing}) </p>
      </label>
  
      <label for="container" class="category">
        <input 
          aria-label="Marinade {totalMarinade} oppskrifter" 
          type="checkbox" 
          on:change={() => toggleNormalTag('marinade')} 
        >
        <span class="checkmark"> </span> 
        <p> Marinade ({totalMarinade}) </p>
      </label>
  
    </CollapsibleSection>

    <CollapsibleSection 
      headerText={'Dessert'} 
      total={totalDessert} 
      expanded={false} 
      class="categories"
    >
    
      <label for="container" class="category">
        <input 
          aria-label="Is {totalIce} oppskrifter" 
          type="checkbox" 
          on:change={() => toggleNormalTag('ice')}
        >
        <span class="checkmark"> </span> 
        <p> Is ({totalIce}) </p>
      </label>
    
      <label for="container" class="category link">
        <input 
          aria-label="Kaker {totalCake} oppskrifter" 
          type="checkbox" 
          on:change={() => toggleNormalTag('cake')}
        >
        <span class="checkmark"> </span> 
        <p> Kaker ({totalCake}) </p>
      </label>
    
      <label for="container" class="category">
        <input 
          aria-label="Småkaker {totalMinicakes} oppskrifter" 
          type="checkbox" 
          on:change={() => toggleNormalTag('minicakes')}
        >
        <span class="checkmark"> </span> 
        <p> Småkaker ({totalMinicakes}) </p>
      </label>
    
      <label for="container" class="category">
        <input 
          aria-label="Vafler og Pannekaker {totalWaffles} oppskrifter" 
          type="checkbox" 
          on:change={() => toggleNormalTag('waffles')} 
        >
        <span class="checkmark"> </span> 
        <p> Vafler og Pannekaker ({totalWaffles}) </p>
      </label>
    
      <label for="container" class="category">
        <input 
          aria-label="Søt gjærbakst {totalPastry} oppskrifter" 
          type="checkbox" 
          on:change={() => toggleNormalTag('pastry')} 
        >
        <span class="checkmark"> </span> 
        <p> Søt gjærbakst ({totalPastry}) </p>
      </label>
    
      <label for="container" class="category">
        <input 
          aria-label="Dessertpai {totalDessertpie} oppskrifter" 
          type="checkbox" 
          on:change={() => toggleNormalTag('dessertpie')} 
        >
        <span class="checkmark"> </span> 
        <p> Dessertpai ({totalDessertpie}) </p>
      </label>
    
      <label for="container" class="category">
        <input 
          aria-label="Annen Dessert {totalOtherdessert} oppskrifter" 
          type="checkbox" 
          on:change={() => toggleNormalTag('otherdessert')} 
        >
        <span class="checkmark"> </span> 
        <p> Annet ({totalOtherdessert}) </p>
      </label>
    
    </CollapsibleSection>

    <CollapsibleSection 
      headerText={'Konserver selv'} 
      total={totalPreserve} 
      expanded={false} 
      class="categories"
    >

      <label for="container" class="category">
        <input 
          aria-label="Sylting {totalPickling} oppskrifter" 
          type="checkbox" 
          on:change={() => toggleNormalTag('pickling')} 
        >
        <span class="checkmark"> </span> 
        <p> Sylting ({totalPickling}) </p>
      </label>
    
      <label for="container" class="category link">
        <input 
          aria-label="Fermentering {totalFermentation} oppskrifter" 
          type="checkbox" 
          on:change={() => toggleNormalTag('fermentation')} 
        >
        <span class="checkmark"> </span> 
        <p> Fermentering ({totalFermentation}) </p>
      </label>
    
      <label for="container" class="category">
        <input 
          aria-label="Tørking {totalDrying} oppskrifter" 
          type="checkbox" 
          on:change={() => toggleNormalTag('drying')} 
        >
        <span class="checkmark"> </span> 
        <p> Tørking ({totalDrying}) </p>
      </label>
    
      <label for="container" class="category">
        <input 
          aria-label="Frysing {totalFreezing} oppskrifter" 
          type="checkbox" 
          on:change={() => toggleNormalTag('freezing')} 
        >
        <span class="checkmark"> </span> 
        <p> Frysing ({totalFreezing}) </p>
      </label>
    
      <label for="container" class="category">
        <input 
          aria-label="Hermetisering {totalCanning} oppskrifter" 
          type="checkbox" 
          on:change={() => toggleNormalTag('canning')} 
        >
        <span class="checkmark"> </span> 
        <p> Hermetisering ({totalCanning}) </p>
      </label>
    
    </CollapsibleSection>

    <CollapsibleSection 
      headerText={'Vanskelighetsgrad'} 
      expanded={false} 
      class="categories"
    >

      <label for="container" class="category">
        <input 
          aria-label="Enkel {totalEasy} oppskrifter" 
          type="checkbox" 
          on:change={() => toggledifficultyLevel('enkel')} 
        >
        <span class="checkmark"> </span> 
        <p> Enkel ({totalEasy}) </p>
      </label>
    
      <label for="container" class="category link">
        <input 
          aria-label="Middels {totalMedium} oppskrifter" 
          type="checkbox" 
          on:change={() => toggledifficultyLevel('middels')} 
        >
        <span class="checkmark"> </span> 
        <p> Middels ({totalMedium}) </p>
      </label>
    
      <label for="container" class="category">
        <input 
          aria-label="Vanskelig {totalHard} oppskrifter" 
          type="checkbox" 
          on:change={() => toggledifficultyLevel('vanskelig')} 
        >
        <span class="checkmark"> </span> 
        <p> Vanskelig ({totalHard}) </p>
      </label>
    
    </CollapsibleSection>

    <div class="time">
      <div class="icon">

        <Choping/>
      </div>

      <div class="timeFilter">

        <h3>Tilberedningstid</h3> 
        <div class="timeInputs">
          <div class="timeInput">
            <input 
              aria-label="Tilberedningstid, minimum i minutter" 
              type="number" min="0" class="inputField"  
              bind:value={activeminTime} 
              on:input={() => setTime(totalmaxTime)} 
            />
            <p>min</p>
          </div>
          <p> - </p>
          <div class="timeInput">
            <input 
              aria-label="Tilberedningstid, maksimum i minutter" 
              type="number" min="0" class="inputField" 
              bind:value={activemaxTime} 
              on:input={() => setTime(totalmaxTime)} 
            />
            <p>min</p>
          </div>
          
        </div>
      </div>


    </div>

      <div class="time">
        <div class="icon">

          <Cooking/>
        </div>
        <div class="timeFilter">

        <h3>Total tid</h3> 
        
        <div class="timeInputs">
          <div class="timeInput">
            <input 
              aria-label="Total tid, minimum i minutter" 
              type="number" min="0" class="inputField"  
              bind:value={totalminTime} 
              on:input={() => setTime(totalmaxTime)} 
            />
            <p>min</p>
          <!-- <select class="timeinput" bind:value={selectedUnit}>
            {#each timeUnits as unit}
              <option value={unit}>{unit}</option>
            {/each}
          </select> -->
          </div>
          <p>   -    </p>
          <div class="timeInput">
            <input 
              aria-label="Total tid, maksimum i minutter" 
              type="number" min="0"  class="inputField" 
              bind:value={totalmaxTime} 
              on:input={() => setTime(totalmaxTime)} 
            />
            <p>min</p>
          <!-- <select class="timeinput" bind:value={selectedUnit}>
            {#each timeUnits as unit}
              <option value={unit}>{unit}</option>
            {/each}
          </select> -->
          </div>
        </div>

      </div>

      </div>


  </div>

</div>


<style>


  .section{
    display: flex;
    height: 100%;
    flex-direction: row-reverse;
  }

  @media screen and (max-width: 750px) {  /* mobile L */
    .section{
    width: 100%;
  } }

/***   FILTER-SYSTEM   *******************************/

  .filter{
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    padding-left: 1.5rem;
    background-color: var(--secondarycolormild);
    display: none;
  }

  @media screen and (max-width: 750px) {  /* mobile L */
    .filter{
    width: 100vw;
  } }

  .open {
    display: block;
  }

  .category{
    font-family: var(--basefont);
    display: flex; 
    gap: 0.5rem;
    padding-bottom: 0.4rem;
  }

/***  TIME FILTERS   *******************************/
  .time{
    display: flex;
    padding-top: 1rem;
    align-items: center;
  }
  .icon{
    transform: scale(0.8) translate(-0.5rem, 0.3rem);
  }
  .timeFilter{
    padding: 0rem 0 0 0rem ;
  }
  .timeInputs{
    display: flex;
    gap: 0.5rem;
    padding-top: 0.5rem
  }
  
  .timeInput{
    display: flex;
    box-shadow: none;
    gap: 2px;
  }
  .inputField{
    width: 3em;
  }

/***   ARROW-BUTTON   *******************************/

  @media screen and (max-width: 750px) {  /* mobile L */
    .arrowButton{
      display: none;
    }
  }
  @media screen and (min-width: 750px) {  /* tablet and  pc */
    button{
      width: 15px;
      border: none;
    }

    .buttonLine{
      height: 100%;
      background-color: var(--secondarycolormild);
      position: relative;
    }

    .arrowPadding {
      background-color: var(--secondarycolormild);
      margin: 0;
      padding: 2em 0;
      position: sticky;
      top: 50%; /* Position the button in the middle */
      width: 30px;
      border-radius: 0px 100px 100px 0px;
    }
    
    .expand{
      rotate: 0deg;
      transform: scale(1.5);
    }
    .minimize{
      rotate: -180deg;
      transform: scale(1.5);
    }
  }

</style>