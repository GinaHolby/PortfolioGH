<script>
  export let rating;

  let integerRate = 0;
  let decimalRate = 0;
  let average = 0;

  if(rating !== null && rating.length > 0) {
    average = rating.reduce(
    (accumulator, current) => accumulator + current, 0
    ) / rating.length;
  }
  
  integerRate = Math.floor(average);
  decimalRate = average % 1;
</script>

<ul 
  role="presentation" 
  aria-label={`Gjennomsnitt vurderingverdi ${average} av 5`}>
  {#if rating !== null && rating.length > 0}
    {#each {length: integerRate} as i}
      <li class="fill-100"></li>
    {/each}
    {#if decimalRate > 0 
      && decimalRate < 0.25}
      <li class="fill-25"></li>
      {:else if 
        decimalRate > 0.25 
        && decimalRate <= 0.50}
        <li class="fill-50"></li>
      {:else if 
        decimalRate > 0.5 
        && decimalRate <= 0.75}
        <li class="fill-75"></li>
      {:else if 
        decimalRate > 0.75}
        <li class="fill-100"></li>
      {:else}
        <li class="fill-0"></li>
    {/if}
    {#if integerRate < 4 }
      {#each {length: (4 - integerRate)} as i}
        <li class="fill-0"></li>
      {/each}
    {/if}
    {:else}
    {#each {length: 5} as i}
      <li class="fill-0"></li>
    {/each}
  {/if}
</ul>

<style>
  ul {
    list-style-type: none;
    display: flex;
    gap: 0.3rem;
    width: 100%;
    justify-content: center;
    margin: 0.8rem 0;
  }

  ul li {
    width: 0.6rem;
    height: 0.6rem;
    background-color:  var(--ratingColorBck);
    border-radius: 100%;
  }

  .fill-100 {
    background-color: var(--ratingColor);
  }

  .fill-0 {
    background-color: var(--ratingColorBck);
  }

  .fill-50 {
    background: 
      linear-gradient(
        90deg, 
        var(--ratingColor) 50%, 
        var(--ratingColorBck) 50%);
  }

  .fill-25 {
    background: 
      linear-gradient(
        90deg, 
        var(--ratingColor) 25%,  
        var(--ratingColorBck) 25%);
  }

  .fill-75 {
    background: 
      linear-gradient(
        90deg, 
        var(--ratingColor) 75%,  
        var(--ratingColorBck) 75%);
  }
</style>
