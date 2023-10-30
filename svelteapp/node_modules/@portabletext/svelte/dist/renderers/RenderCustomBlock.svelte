<script>export let global;
$: ({ components } = global);
export let node;
export let parentBlock;
export let indexInParent;
export let isInline = false;
$: ({ _type } = node);
$: customComponent = components.types[_type];
$: if (!customComponent) {
    global.missingComponentHandler(_type, 'block');
}
// Using a function is the only way to use TS in Svelte reactive assignments
$: componentProps = (() => {
    return {
        global,
        value: node,
        indexInParent,
        parentBlock,
        isInline
    };
})();
</script>

<svelte:component this={customComponent || components.unknownType} portableText={componentProps} />
