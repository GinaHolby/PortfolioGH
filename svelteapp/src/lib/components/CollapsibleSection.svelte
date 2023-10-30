<script>
    export let headerText;
    export let total
    export let expanded = true
    import Arrow from "./icons/Arrow.svelte";
</script>

<div class="collapsible">

  <div aria-label="Hovedkategori {headerText  }"  class="categoryheader">
    
      <button aria-label="{headerText}" aria-expanded={expanded} on:click={() => expanded = !expanded}>
        <div class=" {expanded ? "expand" : "minimize" } ">
          <Arrow/>
        </div>
      </button>

      <h3>
        {headerText}
        {#if total != undefined}
          ({total})
        {/if}  
      </h3>

  </div>
    
    <div class='contents categories' hidden={!expanded}>
        <slot></slot>
    </div>
</div>

<style>
  .expand{
    rotate: 90deg;
  }
  .minimize{
    rotate: -90deg;
  }

  .categoryheader{
    font-family: var(--basefont);
    display: flex; 
    align-items: first baseline;
    gap: 0.5rem;
  }

	
  button {
    background-color: var(--secondarycolormild);
    display: flex;
		justify-content: space-between;
		border: none;
		margin: 0;
		padding: 1em 0.5em;
  }
    
  button[aria-expanded="true"] {
    border-top: 1px solid var(--gray-light, #eee);
  }

   /*  button[aria-expanded="true"] .vert {
        display: none;
    }

    button:focus svg{
        outline: 2px solid;
    }

    button [aria-expanded="true"] rect {
        fill: currentColor;
    }

    svg {
        height: 0.7em;
				width: 0.7em;
    } */

  .categories{
    padding-left: 2.1rem;
    padding-bottom: 0.5rem;
  } 
  
</style>