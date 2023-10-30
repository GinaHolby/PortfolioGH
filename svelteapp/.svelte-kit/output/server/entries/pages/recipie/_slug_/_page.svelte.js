import { c as create_ssr_component, e as each, a as escape, v as validate_component, d as add_attribute } from "../../../../chunks/index2.js";
import { c as changeMinutes, L as Level, C as Choping, f as findtime, a as Cooking, u as urlFor } from "../../../../chunks/Rating.svelte_svelte_type_style_lang.js";
function translateCategoryWord(language2, categoryWord) {
  const translations = {
    dinner: "Middag",
    stew: "Gryte",
    soup: "Suppe",
    pizza: "Pizza",
    pasta: "Pasta",
    panrecipie: "Ovnsret",
    onePot: "One-Pot",
    saladdinner: "Middagssalat",
    piedinner: "Middagspai",
    otherdinner: "Annen middag",
    sides: "Tilbehør",
    sauce: "Saus",
    dressing: "Dressing",
    dip: "Dip",
    marinade: "Marinade",
    minies: "Småretter",
    tapas: "Tapas",
    sidesalad: "Sidesalat",
    baking: "Brødbakst",
    sandwich: "Smørbrød",
    lunchbox: "Matpakkemat",
    toppings: "Pålegg",
    otherminies: "Annen smårett",
    dessert: "Dessert",
    ice: "Is",
    cake: "Kake",
    minicakes: "Småkaker",
    waffles: "Vafler og Pannekaker",
    pastry: "Søt gjærbakst",
    dessertpie: "Dessertpai",
    otherdessert: "Annen dessert",
    preserve: "Preserver selv",
    pickling: "Sylting",
    fermentation: "Fermentering",
    drying: "Tørking",
    freezing: "Frysing",
    canning: "Hermetisering",
    otherkonserving: "Annen konservering",
    preferances: "Preferanser",
    lowglysimic: "lav glysimic",
    vegetarian: "Vegetar",
    vegan: "Vegansk",
    nationality: "Nasjonalitet",
    italian: "Italiensk",
    asian: "Asiatisk",
    norwegian: "Norsk",
    seasonandholyday: "Sesong og Høytider",
    grill: "Grillmat",
    christmas: "Jul",
    easter: "Påske"
  };
  if (language2 === "Norwegian" && translations[categoryWord]) {
    return translations[categoryWord];
  } else {
    return categoryWord;
  }
}
function translateCategoryList(language2, categoryList) {
  const filteredCategoryList = categoryList.filter((category) => category !== null);
  return filteredCategoryList.map((category) => translateCategoryWord(language2, category));
}
const Plus = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="15" height="15" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="6.5" cy="6.5" r="6" stroke="black"></circle><path d="M3.5 6.5H9.5" stroke="black" stroke-linecap="round"></path><path d="M6.5 9.5V3.5" stroke="black" stroke-linecap="round"></path></svg>`;
});
const Minus = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="15" height="15" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="6.5" cy="6.5" r="6" stroke="black"></circle><path d="M3.5 6.5H9.5" stroke="black" stroke-linecap="round"></path></svg>`;
});
const Steps_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "section.svelte-19kz05r{width:100%}.step_layer1.svelte-19kz05r{background-color:#f0efef;padding:0.1rem;margin:1rem 0;display:flex;flex-direction:column}.baseRecipieTitle.svelte-19kz05r{padding:0.5rem}.stepNumber.svelte-19kz05r{padding:1rem 0.5rem}.step_layer2.svelte-19kz05r{width:100%;display:flex}.step_layer3.svelte-19kz05r{background-color:#ffffff;padding:1rem;display:flex;flex-direction:column;gap:0rem;width:100%}.stepTitleAndTime.svelte-19kz05r{display:flex;justify-content:space-between;padding-bottom:0.5rem}.stepInstructions.svelte-19kz05r{padding-left:1rem}.instructions.svelte-19kz05r{position:relative}.bullet.svelte-19kz05r{transform:translate(-1rem);position:absolute;top:0px}",
  map: null
};
const Steps = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentPortions;
  let { allBlocks } = $$props;
  let { portions } = $$props;
  if ($$props.allBlocks === void 0 && $$bindings.allBlocks && allBlocks !== void 0)
    $$bindings.allBlocks(allBlocks);
  if ($$props.portions === void 0 && $$bindings.portions && portions !== void 0)
    $$bindings.portions(portions);
  $$result.css.add(css$2);
  currentPortions = portions / 4;
  return `<section class="svelte-19kz05r">
${each(allBlocks, (block, i) => {
    return `<div class="step_layer1 svelte-19kz05r">${block.baseRecipieTitle == void 0 ? `<p></p>` : `<a class="baseRecipieTitle svelte-19kz05r" href="${"/recipie/" + escape(block.baseRecipieTitle.slug.current, true)}"><h4>${escape(block.baseRecipieTitle.recipieTitle)}</h4>
      </a>`} 
  
    <div class="step_layer2 svelte-19kz05r"><h3 class="stepNumber svelte-19kz05r">${escape(i + 1)}</h3>

      <div class="step_layer3 svelte-19kz05r"><div class="stepTitleAndTime svelte-19kz05r"><h3 class="stepTitle">${escape(block.instructions.stepTitle)}</h3>
             <h4>${escape(block.instructions.total ? changeMinutes(block.instructions.total) : "")}</h4></div>

        
        <div class="stepInstructions svelte-19kz05r">${each(block.instructions.stepInstructions, (instruction) => {
      return `<span class="instructions svelte-19kz05r">${instruction._type === "quantity" ? `<span>${escape(instruction.quant * currentPortions * (block.multiplier ?? "1"))} 
                  ${escape(instruction.units)} 
                  ${escape(instruction.ingredients.title)}
                </span>` : ``}
              ${instruction._type === "block" & instruction.listItem === "bullet" ? `<p class="linebreak"></p> 
                <li class="bullet svelte-19kz05r"></li>
                <span>${escape(instruction.children[0].text)}</span>` : ``}
              ${instruction._type === "block" & instruction.listItem !== "bullet" ? `<span>${escape(instruction.children[0].text)}</span>` : ``}
            </span>`;
    })}</div>
      </div></div>
  </div>`;
  })}
</section>`;
});
const Ingredients_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".ingredients.svelte-jx4cp9{display:flex;flex-direction:column;gap:5px;margin:1rem 0}",
  map: null
};
const Ingredients = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentPortions;
  let { allBlocks } = $$props;
  let { portions } = $$props;
  if ($$props.allBlocks === void 0 && $$bindings.allBlocks && allBlocks !== void 0)
    $$bindings.allBlocks(allBlocks);
  if ($$props.portions === void 0 && $$bindings.portions && portions !== void 0)
    $$bindings.portions(portions);
  $$result.css.add(css$1);
  currentPortions = portions / 4;
  return `<section><div class="ingredients svelte-jx4cp9">${each(allBlocks, (block) => {
    return `${block.instructions ? `${each(block.instructions.stepInstructions, (instruction) => {
      return `${instruction._type === "quantity" ? `<li>${escape(instruction.quant * currentPortions * (block.multiplier ? block.multiplier : "1"))} ${escape(instruction.units)} ${escape(instruction.ingredients.title)}</li>` : ``}`;
    })}` : ``}`;
  })}</div>

</section>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".hero.svelte-asrnzd{width:100%;display:flex;min-height:calc(100vh - 4rem)}@media( orientation: portrait){.hero.svelte-asrnzd{flex-direction:column-reverse}}.categories.svelte-asrnzd{display:flex;gap:1rem\n  }.categorytag.svelte-asrnzd{background-color:rgb(242, 209, 214);padding:0.5rem 1rem;border-radius:2px}.heroInfo.svelte-asrnzd{display:flex;flex-direction:column;text-align:center;justify-content:center;align-items:center;margin:auto;padding:1rem}@media( orientation: landscape){.heroInfo.svelte-asrnzd{gap:var(--recipiheroL)}}@media( orientation: portrait){.heroInfo.svelte-asrnzd{padding:2rem 1rem;gap:var(--recipiheroP);min-width:80%}}.heroImage.svelte-asrnzd{object-fit:cover}@media( orientation: landscape){.heroImage.svelte-asrnzd{width:50%}}@media( orientation: portrait){.heroImage.svelte-asrnzd{height:clamp(10rem, 35vh, 20rem)}}.icons.svelte-asrnzd{display:flex;justify-content:space-around;width:100%;border-top:solid lightgrey 1px;border-bottom:solid lightgrey 1px;align-items:flex-end;padding:var(--recipiheroP) 0\n  }.icon.svelte-asrnzd{display:flex;flex-direction:column;gap:0.5rem;align-items:center}.portions.svelte-asrnzd{display:flex;justify-content:center;align-items:center;gap:1rem;padding:1rem}button.svelte-asrnzd{background-color:transparent;border:none}.recipieAndIngredients.svelte-asrnzd{display:flex;gap:4rem;padding:1rem;margin:0 auto;max-width:1000px}@media( orientation: landscape){.recipieAndIngredients.svelte-asrnzd{margin:auto}}@media( orientation: portrait){.recipieAndIngredients.svelte-asrnzd{flex-direction:column;gap:4rem;padding:4rem;gap:1rem;padding:1rem}}.recipie.svelte-asrnzd{width:100%}.instructionCards.svelte-asrnzd{display:flex;padding:0.1rem;widows:100%}",
  map: null
};
let language = "Norwegian";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let dynamicPortions;
  let allBlocks;
  let translatedCategoryList;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  dynamicPortions = 4;
  allBlocks = data?.recipies[0].allinstructions;
  translatedCategoryList = translateCategoryList(language, data.recipies[0].categorylist);
  return `${$$result.head += `<!-- HEAD_svelte-148rz3r_START -->${$$result.title = `<title> Oppskrift til ${escape(data.recipies[0].recipieTitle)} </title>`, ""}<!-- HEAD_svelte-148rz3r_END -->`, ""}

${each(data.recipies, (recipie) => {
    return `
  <div class="hero svelte-asrnzd"><div class="heroInfo svelte-asrnzd">${translatedCategoryList != null ? `<div class="categories svelte-asrnzd" aria-label="categorier">${each(translatedCategoryList, (category) => {
      return `<div class="categorytag svelte-asrnzd"><h4>${escape(category)}</h4>
          </div>`;
    })}
        </div>` : ``}
    
      
      <h2>${escape(recipie.recipieTitle)}</h2>
      
      <h3>${escape(recipie.recipieDescription)}</h3>

      <div class="icons svelte-asrnzd"><div class="icon svelte-asrnzd"><div>${validate_component(Level, "Level").$$render($$result, {}, {}, {})}</div>
          <h4>${escape(recipie.level)}</h4></div>
        <div class="icon svelte-asrnzd"><div>${validate_component(Choping, "Choping").$$render($$result, {}, {}, {})}</div>
          <h4>${escape(findtime(recipie).act)}</h4></div>
        <div class="icon svelte-asrnzd"><div>${validate_component(Cooking, "Cooking").$$render($$result, {}, {}, {})}</div>
          <h4>${escape(findtime(recipie).tot)}</h4>
        </div></div>	

      <div>
        <h4>Porsjoner:</h4>
        <div class="portions svelte-asrnzd"><button class="svelte-asrnzd">${validate_component(Minus, "Minus").$$render($$result, {}, {}, {})}</button>
          <h2>${escape(dynamicPortions)}</h2>
          <button class="svelte-asrnzd">${validate_component(Plus, "Plus").$$render($$result, {}, {}, {})}</button></div>
      </div></div>

    <img class="heroImage svelte-asrnzd"${add_attribute("src", urlFor(recipie.coverimageUrl).url(), 0)}${add_attribute("alt", recipie.coverimagAltText, 0)}></div>

  

  <div class="recipieAndIngredients svelte-asrnzd"><div class="ingredients"><h2>Ingredienser </h2>
      <div class="ingredientsList">${validate_component(Ingredients, "Ingredients").$$render($$result, { allBlocks, portions: dynamicPortions }, {}, {})}
      </div></div>

    <div class="recipie svelte-asrnzd"><h2>Fremgangsmåte </h2>
      <div class="instructionCards svelte-asrnzd">${validate_component(Steps, "Steps").$$render($$result, { allBlocks, portions: dynamicPortions }, {}, {})}</div>
    </div></div> `;
  })}`;
});
export {
  Page as default
};
