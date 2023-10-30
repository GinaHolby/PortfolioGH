<script>export let global;
$: ({ components } = global);
export let node;
export let indexInParent;
$: ({ style = 'normal' } = node);
$: blockComponent =
    typeof components.block === 'function' ? components.block : components.block[style];
$: if (!blockComponent) {
    global.missingComponentHandler(style, 'blockStyle');
}
// Using a function is the only way to use TS in Svelte reactive assignments
$: blockProps = (() => {
    return {
        global,
        indexInParent,
        value: node
    };
})();
</script>

<svelte:component this={blockComponent || components.unknownBlockStyle} portableText={blockProps}>
  <slot />
</svelte:component>
