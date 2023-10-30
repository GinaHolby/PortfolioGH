import { c as create_ssr_component, e as each, a as escape } from "../../../../chunks/index2.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".subheader.svelte-1985byo{font-size:large;font-weight:bold}main.svelte-1985byo{max-width:700px;padding:24px;margin:48px auto;min-height:calc(100vh - 20rem)}.paragraph.svelte-1985byo{display:flex;flex-direction:column;gap:16px;padding-top:24px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${each(data.information, (info) => {
    return `<main class="svelte-1985byo"><h2>${escape(info.infoHeader)}</h2>

        <div class="paragraph svelte-1985byo">${each(info.informatinParagraphs, (instruction) => {
      return `<span>${instruction._type === "block" & instruction.children[0].marks[0] === "strong" ? `<span class="subheader svelte-1985byo">${escape(instruction.children[0].text)}</span> <br>` : ``}
                    ${instruction._type === "block" & instruction.children[0].marks[0] !== "strong" ? `<span>${escape(instruction.children[0].text)}</span> <br>` : ``}
                </span>`;
    })}</div>
    </main>`;
  })}`;
});
export {
  Page as default
};
