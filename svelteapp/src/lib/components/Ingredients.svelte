<script>
  import { roundQuantity } from "$lib/utils";
  export let allBlocks;
  export let currentPortions;
  export let initialPortions;

  $: changeInPortions = currentPortions / initialPortions;

  console.log(allBlocks);

</script>

<section>

  <div class="ingredients">
    {#each allBlocks as block}
      {#if block.instructions}
        {#each block.instructions.stepInstructions as instruction}
          {#if instruction._type === 'quantity'}
            <div class="ingredientContainer">
              <p class="ingredient">
                {instruction.extraInformation ?? ""}
                {instruction.ingredients.title}
              </p>
              <p class="quantity">
                {#if instruction.quant !== undefined }
                  { roundQuantity(instruction.quant
                    * changeInPortions 
                    * (block.multiplier ? block.multiplier : '1'))}
                  {instruction.units} 
                {/if}
              </p>
            </div>
          {/if}
        {/each}
      {/if}   
    {/each}
  </div>

</section>

<style>
  
  .ingredients{
    min-width: 300px;
  }
  .ingredientContainer{
    border-bottom: var(--linecolorsuperlight);
    padding: 0.5rem 1rem ;
    display: grid;
    grid-template-columns: auto 6rem;
    justify-content: space-between;
  }
  .quantity{
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }
</style>
