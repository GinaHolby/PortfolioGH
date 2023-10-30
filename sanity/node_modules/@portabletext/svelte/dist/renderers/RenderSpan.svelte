<script>import { spanToPlainText } from '@portabletext/toolkit';
export let global;
$: ({ components } = global);
export let node;
export let parentBlock;
$: ({ markType } = node);
$: markComponent = components.marks[markType];
$: if (!markComponent) {
    global.missingComponentHandler(markType, 'mark');
}
// Using a function is the only way to use TS in Svelte reactive assignments
$: markProps = (() => {
    return {
        global,
        parentBlock,
        markType,
        value: node.markDef,
        markKey: node.markKey,
        plainTextContent: spanToPlainText(node)
    };
})();
</script>

<svelte:component this={markComponent || components.unknownMark} portableText={markProps}>
  <slot />
</svelte:component>
