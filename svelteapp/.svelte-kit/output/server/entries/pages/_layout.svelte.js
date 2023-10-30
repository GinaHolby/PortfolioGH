import { c as create_ssr_component, e as each, a as escape } from "../../chunks/index2.js";
const main = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".app.svelte-uh16rz{display:flex;flex-direction:column;min-height:100vh}header.svelte-uh16rz{background-color:white;padding:2rem;border-bottom:1px solid lightgrey;text-align:center;flex:0 1 auto;position:sticky;top:0;z-index:2}main.svelte-uh16rz{flex:0 1 auto}footer.svelte-uh16rz{display:flex;flex-direction:column;flex:1 1 auto;gap:var(--gridgap);justify-content:center;align-items:center;background-color:var(--secondarycolor);padding:2rem}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="app svelte-uh16rz"><header class="svelte-uh16rz"><a href="/"><h1>Min Matassistent </h1></a></header>

	<main class="svelte-uh16rz">${slots.default ? slots.default({}) : ``}</main>
	
	<footer class="svelte-uh16rz">${each(data.information, (info) => {
    return `<a tabindex="0" href="${"/information/" + escape(info.slug.current, true)}"><h3>${escape(info.infoHeader)}</h3> 
			</a>`;
  })}</footer></div>




<link rel="preconnect" href="https://fonts.googleapis.com"> 
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> 
<link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Montserrat:wght@100&family=Quicksand:wght@300;700&display=swap" rel="stylesheet">`;
});
export {
  Layout as default
};
