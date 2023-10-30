<script>

  export let allBlocks;
  import { urlFor, changeMinutes, roundQuantity } from "../utils";
  export let currentPortions;
  export let initialPortions;

  $: changeInPortions = currentPortions / initialPortions;
</script>
<section>
  
{#each allBlocks as block, i}
  <div class="step_layer1">

    {#if block.baseRecipieTitle == undefined}
      <p></p>
    {:else}
      <a class="baseRecipieTitle" href="/recipie/{block.baseRecipieTitle.slug.current}">
        <p>{block.baseRecipieTitle.recipieTitle}</p>
      </a> 
    {/if} 
  
    <div class="step_layer2">

      <h4 aria-label="steg {i+1}" class="stepNumber"> {i+1}</h4>

      <div class="step_layer3">

        <div class="stepTitleAndTime">
          <h4 class="stepTitle"> {block.instructions.stepTitle}</h4>
          <p aria-label="total tid"> {block.instructions.total ? 
              changeMinutes(block.instructions.total) : ''}
          </p>
        </div>

        <!-- * goes through all the information in each step and creates sentences of them -->
        <div class="stepInstructions">
      
          {#each block.instructions.stepInstructions as instruction}
            <span class="instructions">
              {#if instruction._type === 'quantity'}
                <span class="p">
                  {#if instruction.quant !== undefined }
                    { roundQuantity(instruction.quant
                      * changeInPortions 
                      * (block.multiplier ? block.multiplier : '1'))}
                    {instruction.units} 
                  {/if}
                  {instruction.extraInformation ?? ""}
                  {instruction.ingredients.title}
                </span>
              {/if}
              {#if instruction._type === 'block' & instruction.listItem === 'bullet'}
                <li class="bullet"></li>
                <span class="p"> {instruction.children[0].text}</span> 
              {/if}
              {#if instruction._type === 'block' & instruction.listItem !== 'bullet'}
                <span class="p">{instruction.children[0].text}</span>
              {/if}
              {#if instruction._type === 'image'}  
              <div class="instructionImages oneImage">
                <img class="instructionImage" 
                     src="{urlFor(instruction.asset._ref).url()}" 
                     alt=""
                >
              </div> 
              {/if}
              {#if instruction._type === 'twoImages'}
              <div class="instructionImages twoImages">
                <img class="instructionImage" src="{urlFor(instruction.image1of2.asset._ref).url()}" alt="">
                <img class="instructionImage" src="{urlFor(instruction.image2of2.asset._ref).url()}" alt="">
              </div>   
              {/if}
              {#if instruction._type === 'threeImages'} 
                <div class="instructionImages threeImages">
                  <img class="instructionImage threeImage" src="{urlFor(instruction.image1of3.asset._ref).url()}" alt="">
                  <img class="instructionImage threeImage" src="{urlFor(instruction.image2of3.asset._ref).url()}" alt="">
                  <img class="instructionImage threeImage" src="{urlFor(instruction.image3of3.asset._ref).url()}" alt="">
                </div>  
              {/if}
            </span>
          {/each}
        
        </div>
      </div>
    </div>
  </div>
{/each}
</section>
<style>

  .instructionImages{
    display: flex;
    gap: 1rem;
    width: 100%;
    overflow: scroll;

    padding: 1rem 0rem 0rem 0rem;
  }

  .instructionImage{
    flex-grow: 1;
    height: min(55vw, 300px);
    object-fit: cover;
    transform: translate(-1rem);
    min-width: 300px;
    
  }

  .threeImage{
    /* height: min(30vw, 300px); */
  }
  @media screen and (width < 500px){
    .threeImages{
    }
    .threeImage{
    width: 100%;
    object-fit: cover; 
    padding: 0rem 0rem 0rem 0rem;
  }
  }
  section{
    width: 100%;
  }
  .step_layer1{
    background-color: #ffffff;
    padding: 0.1rem;
    margin-bottom: var(--recipieGap); 
    display: flex;
    flex-direction: column;
  }
  .baseRecipieTitle{
    padding: 0.5rem;
  }
  .stepNumber{
    padding: 1rem 0rem 0 1rem;
  }
  .step_layer2{
    width: 100%;
    display: flex;
  }
  .step_layer3{
    background-color: #ffffff;
    padding: 1rem 0rem 1rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 0rem;
    width: calc(100% - 2rem);
  }

  .stepTitleAndTime{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .stepTitle{
    padding-right: 1rem;
  }

  .stepInstructions{
    padding: 0 1rem;
  }
  
  
  .bullet{
    transform: translate(-1rem, 1.15rem);
  }

  .p{
    font-family: var(--basefont);
    font-size: 1rem;
    font-weight: 200;
  }
  
</style>
