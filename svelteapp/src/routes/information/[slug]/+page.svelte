<script>
     export let data;
</script>

{#each data.information as info}
    <main id="main-content">
        <h2>{info.infoHeader}</h2>

        <div class="paragraph">
            {#each info.informatinParagraphs as instruction}
                <span>
                    {#if instruction._type === 'block' & instruction.children[0].marks[0] === 'strong'}
                        <h3 class="subheader"> {instruction.children[0].text}</h3> 
                    {/if}
                    {#if instruction._type === 'block' & instruction.children[0].marks[0] !== 'strong'}
                        <p>{instruction.children[0].text}</p> 
                    {/if}
                </span>
            {/each}
        </div>
    </main>
{/each}

<style>

    main{
        max-width: 700px;
        padding: 24px;
        margin: 48px auto;
        min-height: calc(100vh - 20rem);
    }
    .subheader{
        padding-top: 12px;
    }
    .paragraph{
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding-top: 12px;
    }
</style>