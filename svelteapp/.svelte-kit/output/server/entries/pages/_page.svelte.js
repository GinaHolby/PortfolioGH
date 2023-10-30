import { c as create_ssr_component, a as escape, d as add_attribute, v as validate_component, b as subscribe, o as onDestroy, e as each } from "../../chunks/index2.js";
import { w as writable } from "../../chunks/index.js";
import { f as findtime, u as urlFor, L as Level, C as Choping, a as Cooking } from "../../chunks/Rating.svelte_svelte_type_style_lang.js";
const createSearchStore = (data) => {
  const { subscribe: subscribe2, set, update } = writable({
    data,
    filtered: data,
    search: ""
  });
  return {
    subscribe: subscribe2,
    set,
    update
  };
};
const searchHandler = (store) => {
  const searchTerm = store.search.toLowerCase() || "";
  store.filtered = store.data.filter((item) => {
    const searchterm = item.searchTerms.toLowerCase().includes(searchTerm.toLowerCase());
    return searchterm;
  });
};
const Arrow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="10" height="10" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1978_20248)"><path d="M12.0002 7.99993C12.0004 6.34188 3.99964 0.499986 5.00023 1.00002C6.0007 1.49999 12.0004 6.15798 12.0002 7.99993ZM12.0002 7.99993C12 9.65798 6.32635 14.3439 5.00042 14.9999C3.67449 15.6559 11.9999 9.84188 12.0002 7.99993Z" stroke="black" stroke-linecap="round"></path></g><defs><clipPath id="clip0_1978_20248"><rect width="16" height="16" fill="none"></rect></clipPath></defs></svg>`;
});
const CollapsibleSection_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: '.expand.svelte-1ri3fo1{rotate:90deg}.minimize.svelte-1ri3fo1{rotate:-90deg}.categoryheader.svelte-1ri3fo1{font-family:var(--basefont);display:flex;align-items:first baseline;gap:0.5rem}button.svelte-1ri3fo1{background-color:var(--secondarycolormild);display:flex;justify-content:space-between;border:none;margin:0;padding:1em 0.5em}button[aria-expanded="true"].svelte-1ri3fo1{border-top:1px solid var(--gray-light, #eee)}.categories.svelte-1ri3fo1{padding-left:2.1rem;padding-bottom:0.5rem}',
  map: null
};
const CollapsibleSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { headerText } = $$props;
  let { total } = $$props;
  let { expanded = true } = $$props;
  if ($$props.headerText === void 0 && $$bindings.headerText && headerText !== void 0)
    $$bindings.headerText(headerText);
  if ($$props.total === void 0 && $$bindings.total && total !== void 0)
    $$bindings.total(total);
  if ($$props.expanded === void 0 && $$bindings.expanded && expanded !== void 0)
    $$bindings.expanded(expanded);
  $$result.css.add(css$2);
  return `<div class="collapsible"><div aria-label="${"Hovedkategori " + escape(headerText, true)}" class="categoryheader svelte-1ri3fo1"><button${add_attribute("aria-expanded", expanded, 0)} class="svelte-1ri3fo1"><div class="${"" + escape(expanded ? "expand" : "minimize", true) + " svelte-1ri3fo1"}">${validate_component(Arrow, "Arrow").$$render($$result, {}, {}, {})}</div></button>

      <h3>${escape(headerText)}
        ${total != void 0 ? `(${escape(total)})` : ``}</h3></div>
    
    <div class="contents categories svelte-1ri3fo1" ${!expanded ? "hidden" : ""}>${slots.default ? slots.default({}) : ``}</div>
</div>`;
});
const CategoriesandFilters_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".section.svelte-1kuymz3{display:flex;height:100%}.SRassessability.svelte-1kuymz3{position:absolute;opacity:0}@media screen and (max-width: 750px){.section.svelte-1kuymz3{width:100%}}.filter.svelte-1kuymz3{position:relative;display:flex;flex-direction:column;padding:1rem;background-color:var(--secondarycolormild);display:none}@media screen and (max-width: 750px){.filter.svelte-1kuymz3{width:100vw}}.open.svelte-1kuymz3{display:block}.category.svelte-1kuymz3{font-family:var(--basefont);display:flex;gap:0.5rem;padding-bottom:0.4rem}.timeFilter.svelte-1kuymz3{padding:1rem 0 0 2rem }.timeInputs.svelte-1kuymz3{display:flex;gap:0.5rem;padding-top:0.5rem\n  }.timeInput.svelte-1kuymz3{display:flex;box-shadow:none;gap:2px}.inputField.svelte-1kuymz3{width:4em}@media screen and (max-width: 750px){.arrowButton.svelte-1kuymz3{display:none}}@media screen and (min-width: 750px){button.svelte-1kuymz3{width:15px;border:none}.buttonLine.svelte-1kuymz3{height:100%;background-color:var(--secondarycolor);position:relative}.arrowPadding.svelte-1kuymz3{background-color:var(--secondarycolor);margin:0;padding:2em 0;position:sticky;top:50%;width:30px;border-radius:0px 100px 100px 0px}.expand.svelte-1kuymz3{rotate:0deg;transform:scale(1.5)}.minimize.svelte-1kuymz3{rotate:-180deg;transform:scale(1.5)}}",
  map: null
};
const CategoriesandFilters = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { totalDinner } = $$props;
  let { totalStew } = $$props;
  let { totalPizza } = $$props;
  let { totalPasta } = $$props;
  let { totalPanrecipie } = $$props;
  let { totalOnePot } = $$props;
  let { totalSaladdinner } = $$props;
  let { totalPiedinner } = $$props;
  let { totalOtherdinner } = $$props;
  let { totalSides } = $$props;
  let { totalSauce } = $$props;
  let { totalDressing } = $$props;
  let { totalMarinade } = $$props;
  let { totalDessert } = $$props;
  let { totalIce } = $$props;
  let { totalCake } = $$props;
  let { totalMinicakes } = $$props;
  let { totalWaffles } = $$props;
  let { totalPastry } = $$props;
  let { totalDessertpie } = $$props;
  let { totalOtherdessert } = $$props;
  let { totalPreserve } = $$props;
  let { totalPickling } = $$props;
  let { totalFermentation } = $$props;
  let { totalDrying } = $$props;
  let { totalFreezing } = $$props;
  let { totalCanning } = $$props;
  let { totalLevel } = $$props;
  let { totalEasy } = $$props;
  let { totalMedium } = $$props;
  let { totalHard } = $$props;
  let { selectedFilters } = $$props;
  let { difficultyLevel } = $$props;
  let { totalmaxTime = null } = $$props;
  let { totalminTime = null } = $$props;
  let { activemaxTime = null } = $$props;
  let { activeminTime = null } = $$props;
  function toggleNormalTag(tag) {
    if (selectedFilters.includes(tag)) {
      selectedFilters = selectedFilters.filter((t) => t !== tag);
    } else {
      selectedFilters = [...selectedFilters, tag];
    }
  }
  function toggledifficultyLevel(tag) {
    if (difficultyLevel.includes(tag)) {
      difficultyLevel = difficultyLevel.filter((t) => t !== tag);
    } else {
      difficultyLevel = [...difficultyLevel, tag];
    }
  }
  let { filterOpen = false } = $$props;
  if ($$props.totalDinner === void 0 && $$bindings.totalDinner && totalDinner !== void 0)
    $$bindings.totalDinner(totalDinner);
  if ($$props.totalStew === void 0 && $$bindings.totalStew && totalStew !== void 0)
    $$bindings.totalStew(totalStew);
  if ($$props.totalPizza === void 0 && $$bindings.totalPizza && totalPizza !== void 0)
    $$bindings.totalPizza(totalPizza);
  if ($$props.totalPasta === void 0 && $$bindings.totalPasta && totalPasta !== void 0)
    $$bindings.totalPasta(totalPasta);
  if ($$props.totalPanrecipie === void 0 && $$bindings.totalPanrecipie && totalPanrecipie !== void 0)
    $$bindings.totalPanrecipie(totalPanrecipie);
  if ($$props.totalOnePot === void 0 && $$bindings.totalOnePot && totalOnePot !== void 0)
    $$bindings.totalOnePot(totalOnePot);
  if ($$props.totalSaladdinner === void 0 && $$bindings.totalSaladdinner && totalSaladdinner !== void 0)
    $$bindings.totalSaladdinner(totalSaladdinner);
  if ($$props.totalPiedinner === void 0 && $$bindings.totalPiedinner && totalPiedinner !== void 0)
    $$bindings.totalPiedinner(totalPiedinner);
  if ($$props.totalOtherdinner === void 0 && $$bindings.totalOtherdinner && totalOtherdinner !== void 0)
    $$bindings.totalOtherdinner(totalOtherdinner);
  if ($$props.totalSides === void 0 && $$bindings.totalSides && totalSides !== void 0)
    $$bindings.totalSides(totalSides);
  if ($$props.totalSauce === void 0 && $$bindings.totalSauce && totalSauce !== void 0)
    $$bindings.totalSauce(totalSauce);
  if ($$props.totalDressing === void 0 && $$bindings.totalDressing && totalDressing !== void 0)
    $$bindings.totalDressing(totalDressing);
  if ($$props.totalMarinade === void 0 && $$bindings.totalMarinade && totalMarinade !== void 0)
    $$bindings.totalMarinade(totalMarinade);
  if ($$props.totalDessert === void 0 && $$bindings.totalDessert && totalDessert !== void 0)
    $$bindings.totalDessert(totalDessert);
  if ($$props.totalIce === void 0 && $$bindings.totalIce && totalIce !== void 0)
    $$bindings.totalIce(totalIce);
  if ($$props.totalCake === void 0 && $$bindings.totalCake && totalCake !== void 0)
    $$bindings.totalCake(totalCake);
  if ($$props.totalMinicakes === void 0 && $$bindings.totalMinicakes && totalMinicakes !== void 0)
    $$bindings.totalMinicakes(totalMinicakes);
  if ($$props.totalWaffles === void 0 && $$bindings.totalWaffles && totalWaffles !== void 0)
    $$bindings.totalWaffles(totalWaffles);
  if ($$props.totalPastry === void 0 && $$bindings.totalPastry && totalPastry !== void 0)
    $$bindings.totalPastry(totalPastry);
  if ($$props.totalDessertpie === void 0 && $$bindings.totalDessertpie && totalDessertpie !== void 0)
    $$bindings.totalDessertpie(totalDessertpie);
  if ($$props.totalOtherdessert === void 0 && $$bindings.totalOtherdessert && totalOtherdessert !== void 0)
    $$bindings.totalOtherdessert(totalOtherdessert);
  if ($$props.totalPreserve === void 0 && $$bindings.totalPreserve && totalPreserve !== void 0)
    $$bindings.totalPreserve(totalPreserve);
  if ($$props.totalPickling === void 0 && $$bindings.totalPickling && totalPickling !== void 0)
    $$bindings.totalPickling(totalPickling);
  if ($$props.totalFermentation === void 0 && $$bindings.totalFermentation && totalFermentation !== void 0)
    $$bindings.totalFermentation(totalFermentation);
  if ($$props.totalDrying === void 0 && $$bindings.totalDrying && totalDrying !== void 0)
    $$bindings.totalDrying(totalDrying);
  if ($$props.totalFreezing === void 0 && $$bindings.totalFreezing && totalFreezing !== void 0)
    $$bindings.totalFreezing(totalFreezing);
  if ($$props.totalCanning === void 0 && $$bindings.totalCanning && totalCanning !== void 0)
    $$bindings.totalCanning(totalCanning);
  if ($$props.totalLevel === void 0 && $$bindings.totalLevel && totalLevel !== void 0)
    $$bindings.totalLevel(totalLevel);
  if ($$props.totalEasy === void 0 && $$bindings.totalEasy && totalEasy !== void 0)
    $$bindings.totalEasy(totalEasy);
  if ($$props.totalMedium === void 0 && $$bindings.totalMedium && totalMedium !== void 0)
    $$bindings.totalMedium(totalMedium);
  if ($$props.totalHard === void 0 && $$bindings.totalHard && totalHard !== void 0)
    $$bindings.totalHard(totalHard);
  if ($$props.selectedFilters === void 0 && $$bindings.selectedFilters && selectedFilters !== void 0)
    $$bindings.selectedFilters(selectedFilters);
  if ($$props.difficultyLevel === void 0 && $$bindings.difficultyLevel && difficultyLevel !== void 0)
    $$bindings.difficultyLevel(difficultyLevel);
  if ($$props.totalmaxTime === void 0 && $$bindings.totalmaxTime && totalmaxTime !== void 0)
    $$bindings.totalmaxTime(totalmaxTime);
  if ($$props.totalminTime === void 0 && $$bindings.totalminTime && totalminTime !== void 0)
    $$bindings.totalminTime(totalminTime);
  if ($$props.activemaxTime === void 0 && $$bindings.activemaxTime && activemaxTime !== void 0)
    $$bindings.activemaxTime(activemaxTime);
  if ($$props.activeminTime === void 0 && $$bindings.activeminTime && activeminTime !== void 0)
    $$bindings.activeminTime(activeminTime);
  if ($$props.toggleNormalTag === void 0 && $$bindings.toggleNormalTag && toggleNormalTag !== void 0)
    $$bindings.toggleNormalTag(toggleNormalTag);
  if ($$props.toggledifficultyLevel === void 0 && $$bindings.toggledifficultyLevel && toggledifficultyLevel !== void 0)
    $$bindings.toggledifficultyLevel(toggledifficultyLevel);
  if ($$props.filterOpen === void 0 && $$bindings.filterOpen && filterOpen !== void 0)
    $$bindings.filterOpen(filterOpen);
  $$result.css.add(css$1);
  return `<div class="section svelte-1kuymz3"><h2 class="SRassessability svelte-1kuymz3">Filter</h2>
  
  <div class="${["filter svelte-1kuymz3", filterOpen ? "open" : ""].join(" ").trim()}">${validate_component(CollapsibleSection, "CollapsibleSection").$$render(
    $$result,
    {
      headerText: "Middag",
      total: totalDinner,
      expanded: true,
      class: "categories"
    },
    {},
    {
      default: () => {
        return `<label for="container" class="category svelte-1kuymz3"><input class="check" type="checkbox" name="" id="">
          <span class="checkmark"></span> 
          Gryte (${escape(totalStew)})
        </label>
  
        <label for="container" class="category link svelte-1kuymz3"><input type="checkbox" name="" id="">
          <span class="checkmark"></span> 
          
          Pizza (${escape(totalPizza)})
        </label>
  
        <label for="container" class="category svelte-1kuymz3"><input type="checkbox" name="" id="">
          <span class="checkmark"></span> 
          Pasta (${escape(totalPasta)})
        </label>
  
        <label for="container" class="category svelte-1kuymz3"><input type="checkbox" name="" id="">
          <span class="checkmark"></span> 
          Ovnsretter (${escape(totalPanrecipie)})
        </label>
  
        <label for="container" class="category svelte-1kuymz3"><input type="checkbox" name="" id="">
          <span class="checkmark"></span> 
          One-Pot (${escape(totalOnePot)})
        </label>
  
        <label for="container" class="category svelte-1kuymz3"><input type="checkbox" name="" id="">
          <span class="checkmark"></span> 
          Middagssalat (${escape(totalSaladdinner)})
        </label>
  
        
  
        <label for="container" class="category svelte-1kuymz3"><input type="checkbox" name="" id="">
          <span class="checkmark"></span> 
          Annet (${escape(totalOtherdinner)})
        </label>`;
      }
    }
  )}

      ${validate_component(CollapsibleSection, "CollapsibleSection").$$render(
    $$result,
    {
      headerText: "Tilbehør",
      total: totalSides,
      expanded: false,
      class: "categories"
    },
    {},
    {
      default: () => {
        return `<label for="container" class="category svelte-1kuymz3"><input type="checkbox" name="" id="">
          <span class="checkmark"></span> 
          Sauser (${escape(totalSauce)})
        </label>
  
        <label for="container" class="category link svelte-1kuymz3"><input type="checkbox" name="" id="">
          <span class="checkmark"></span> 
          
          Dip og Dressing (${escape(totalDressing)})
        </label>
  
        <label for="container" class="category svelte-1kuymz3"><input type="checkbox" name="" id="">
          <span class="checkmark"></span> 
          Marinade (${escape(totalMarinade)})
        </label>`;
      }
    }
  )}

      ${validate_component(CollapsibleSection, "CollapsibleSection").$$render(
    $$result,
    {
      headerText: "Dessert",
      total: totalDessert,
      expanded: false,
      class: "categories"
    },
    {},
    {
      default: () => {
        return `<label for="container" class="category svelte-1kuymz3"><input type="checkbox" name="" id="">
          <span class="checkmark"></span> 
          Is (${escape(totalIce)})
        </label>
  
        <label for="container" class="category link svelte-1kuymz3"><input type="checkbox" name="" id="">
          <span class="checkmark"></span> 
          Kaker (${escape(totalCake)})
        </label>
  
        <label for="container" class="category svelte-1kuymz3"><input type="checkbox" name="" id="">
          <span class="checkmark"></span> 
          Småkaker (${escape(totalMinicakes)})
        </label>
  
        <label for="container" class="category svelte-1kuymz3"><input type="checkbox" name="" id="">
          <span class="checkmark"></span> 
          Vafler og Pannekaker (${escape(totalWaffles)})
        </label>
  
        <label for="container" class="category svelte-1kuymz3"><input type="checkbox" name="" id="">
          <span class="checkmark"></span> 
          Søt gjærbakst (${escape(totalPastry)})
        </label>

        <label for="container" class="category svelte-1kuymz3"><input type="checkbox" name="" id="">
          <span class="checkmark"></span> 
          Dessertpai (${escape(totalDessertpie)})
        </label>

        <label for="container" class="category svelte-1kuymz3"><input type="checkbox" name="" id="">
          <span class="checkmark"></span> 
          Annet (${escape(totalOtherdessert)})
        </label>`;
      }
    }
  )}

      ${validate_component(CollapsibleSection, "CollapsibleSection").$$render(
    $$result,
    {
      headerText: "Konserver selv",
      total: totalPreserve,
      expanded: false,
      class: "categories"
    },
    {},
    {
      default: () => {
        return `<label for="container" class="category svelte-1kuymz3"><input type="checkbox" name="" id="">
          <span class="checkmark"></span> 
          Sylting (${escape(totalPickling)})
        </label>
  
        <label for="container" class="category link svelte-1kuymz3"><input type="checkbox" name="" id="">
          <span class="checkmark"></span> 
          Fermentering (${escape(totalFermentation)})
        </label>
  
        <label for="container" class="category svelte-1kuymz3"><input type="checkbox" name="" id="">
          <span class="checkmark"></span> 
          Tørking (${escape(totalDrying)})
        </label>
  
        <label for="container" class="category svelte-1kuymz3"><input type="checkbox" name="" id="">
          <span class="checkmark"></span> 
          Frysing (${escape(totalFreezing)})
        </label>
  
        <label for="container" class="category svelte-1kuymz3"><input type="checkbox" name="" id="">
          <span class="checkmark"></span> 
          Hermetisering (${escape(totalCanning)})
        </label>`;
      }
    }
  )}

      ${validate_component(CollapsibleSection, "CollapsibleSection").$$render(
    $$result,
    {
      headerText: "Vanskelighetsgrad",
      expanded: false,
      class: "categories"
    },
    {},
    {
      default: () => {
        return `<label for="container" class="category svelte-1kuymz3"><input type="checkbox" name="" id="">
          <span class="checkmark"></span> 
          Enkel (${escape(totalEasy)})
        </label>
  
        <label for="container" class="category link svelte-1kuymz3"><input type="checkbox" name="" id="">
          <span class="checkmark"></span> 
          Middel (${escape(totalMedium)})
        </label>
  
        <label for="container" class="category svelte-1kuymz3"><input type="checkbox" name="" id="">
          <span class="checkmark"></span> 
          Vanskelig (${escape(totalHard)})
        </label>`;
      }
    }
  )}

      <div class="timeFilter svelte-1kuymz3"><h3>Total tid</h3> 
        
        <div class="timeInputs svelte-1kuymz3"><div class="timeInput svelte-1kuymz3"><input class="inputField svelte-1kuymz3"${add_attribute("value", totalminTime, 0)}>
            <h4>min</h4>
          </div>
          <h4>-    </h4>
          <div class="timeInput svelte-1kuymz3"><input class="inputField svelte-1kuymz3"${add_attribute("value", totalmaxTime, 0)}>
            <h4>min</h4>
          </div></div></div>

      <div class="timeFilter svelte-1kuymz3"><h3>Aktiv tid</h3> 
        <div class="timeInputs svelte-1kuymz3"><div class="timeInput svelte-1kuymz3"><input class="inputField svelte-1kuymz3"${add_attribute("value", activeminTime, 0)}>
            <h4>min</h4></div>
          <h4>- </h4>
          <div class="timeInput svelte-1kuymz3"><input class="inputField svelte-1kuymz3"${add_attribute("value", activemaxTime, 0)}>
            <h4>min</h4></div></div></div></div>

  <button class="arrowButton svelte-1kuymz3"><div class="buttonLine svelte-1kuymz3">
      <div class="arrowPadding svelte-1kuymz3">
        <div class="${"" + escape(filterOpen ? "minimize" : "expand", true) + " svelte-1kuymz3"}">${validate_component(Arrow, "Arrow").$$render($$result, {}, {}, {})}</div></div></div></button>

</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "button.svelte-5qboi3{-webkit-appearance:none;border:none;border-radius:var(--cardRadius);font-size:1rem}section.svelte-5qboi3{display:flex;min-height:calc(100vh - 20rem)}.searchAndRecipies.svelte-5qboi3{display:flex;flex-direction:column;gap:var(--gridgap);margin:var(--gridgap);width:100%}.searchBar.svelte-5qboi3{grid-area:search;width:100%;padding:1rem;-webkit-appearance:none;border:var(--linecolorlight);border-radius:var(--cardRadius);font-size:var(--mediumtext)}@media screen and (max-width: 750px){section.svelte-5qboi3{flex-direction:column;min-height:calc(100vh - 4rem);position:relative}.searchAndRecipies.svelte-5qboi3{flex-direction:column-reverse;gap:0;margin:0px;flex:1;position:sticky;bottom:0}.searchSection.svelte-5qboi3{position:sticky;bottom:0;z-index:3}.recipies.svelte-5qboi3{margin:var(--gridgap);flex:1}.removeRecipies.svelte-5qboi3{display:none}}.filterAndSort.svelte-5qboi3{display:flex}.filterButton.svelte-5qboi3{display:none}@media screen and (max-width: 750px){.filterButton.svelte-5qboi3{display:block;flex-grow:1;padding:1rem;-webkit-appearance:none;border:var(--linecolorlight);border-radius:var(--cardRadius);font-size:var(--mediumtext)}}.foodCardContainer.svelte-5qboi3{display:grid;grid-template-columns:repeat(auto-fill, minmax(calc(200px + 10%), 1fr));gap:var(--gridgap)}.foodCard.svelte-5qboi3{background-color:var(--cardBackground);text-align:center;box-shadow:var(--cardShadow);border-radius:var(--cardRadius)}.coverImage.svelte-5qboi3{width:100%;border-radius:var(--cardRadius);height:clamp(10rem, 15vw, 30rem);object-fit:cover}.information.svelte-5qboi3{padding:var(--cardgap);display:flex;flex-direction:column;gap:var(--cardgap)}.iconContainer.svelte-5qboi3{display:flex;justify-content:space-around;align-items:flex-end}.icon.svelte-5qboi3{display:flex;flex-direction:column;align-items:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filteredRecipies;
  let count;
  let $searchStore, $$unsubscribe_searchStore;
  let { data } = $$props;
  let selectedFilters = [];
  let difficultyLevel = [];
  let totalmaxTime = null;
  let totalminTime = null;
  let activemaxTime = null;
  let activeminTime = null;
  const searchRecipies = data.recipies.map((recipie) => ({
    ...recipie,
    searchTerms: `${recipie.recipieTitle}`,
    cat: `${recipie.categorylist}`,
    totaltime: findtime(recipie).totmin,
    activetime: findtime(recipie).actmin
  }));
  const searchStore = createSearchStore(searchRecipies);
  $$unsubscribe_searchStore = subscribe(searchStore, (value) => $searchStore = value);
  const unsubscribe = searchStore.subscribe((model) => searchHandler(model));
  onDestroy(unsubscribe);
  let filterOpen = false;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    filteredRecipies = $searchStore.filtered.filter((hello) => {
      if ((selectedFilters.length === 0 || selectedFilters.some((tag) => hello.cat.includes(tag))) && (difficultyLevel.length === 0 || difficultyLevel.some((tag) => hello.level.includes(tag))) && (!totalmaxTime || hello.totaltime <= totalmaxTime) && (!totalminTime || hello.totaltime >= totalminTime) && (!activemaxTime || hello.activetime <= activemaxTime) && (!activeminTime || hello.activetime >= activeminTime)) {
        return true;
      } else {
        return false;
      }
    });
    count = filteredRecipies.reduce(
      (accumulator, element) => {
        const categories = element.cat;
        const difficulty = element.level;
        accumulator.dinner += categories.includes("stew") || categories.includes("soup") || categories.includes("pizza") || categories.includes("pasta") || categories.includes("panrecipie") || categories.includes("onePot") || categories.includes("saladdinner") || categories.includes("piedinner") || categories.includes("otherdinner");
        accumulator.stew += categories.includes("stew");
        accumulator.soup += categories.includes("soup");
        accumulator.pizza += categories.includes("pizza");
        accumulator.pasta += categories.includes("pasta");
        accumulator.panrecipie += categories.includes("panrecipie");
        accumulator.onePot += categories.includes("onePot");
        accumulator.saladdinner += categories.includes("saladdinner");
        accumulator.piedinner += categories.includes("piedinner");
        accumulator.otherdinner += categories.includes("otherdinner");
        accumulator.sides += categories.includes("sauce") || categories.includes("dressing") || categories.includes("dip") || categories.includes("marinade");
        accumulator.sauce += categories.includes("sauce");
        accumulator.dressing += categories.includes("dressing");
        accumulator.dip += categories.includes("dip");
        accumulator.marinade += categories.includes("marinade");
        accumulator.dessert += categories.includes("ice") || categories.includes("cake") || categories.includes("minicakes") || categories.includes("waffles") || categories.includes("pastry") || categories.includes("dessertpie") || categories.includes("otherdessert");
        accumulator.ice += categories.includes("ice");
        accumulator.cake += categories.includes("cake");
        accumulator.minicakes += categories.includes("minicakes");
        accumulator.waffles += categories.includes("waffles");
        accumulator.pastry += categories.includes("pastry");
        accumulator.dessertpie += categories.includes("dessertpie");
        accumulator.otherdessert += categories.includes("otherdessert");
        accumulator.preserve += categories.includes("pickling") || categories.includes("fermentation") || categories.includes("drying") || categories.includes("freezing") || categories.includes("canning") || categories.includes("otherkonserving");
        accumulator.pickling += categories.includes("pickling");
        accumulator.fermentation += categories.includes("fermentation");
        accumulator.drying += categories.includes("drying");
        accumulator.freezing += categories.includes("freezing");
        accumulator.canning += categories.includes("canning");
        accumulator.otherkonserving += categories.includes("otherkonserving");
        accumulator.level += difficulty === "easy" || difficulty === "medium" || difficulty === "hard";
        accumulator.easy += difficulty === "easy";
        accumulator.medium += difficulty === "medium";
        accumulator.hard += difficulty === "hard";
        return accumulator;
      },
      {
        dinner: 0,
        stew: 0,
        soup: 0,
        pizza: 0,
        pasta: 0,
        panrecipie: 0,
        onePot: 0,
        saladdinner: 0,
        piedinner: 0,
        otherdinner: 0,
        sides: 0,
        sauce: 0,
        dressing: 0,
        dip: 0,
        marinade: 0,
        dessert: 0,
        ice: 0,
        cake: 0,
        minicakes: 0,
        waffles: 0,
        pastry: 0,
        dessertpie: 0,
        otherdessert: 0,
        preserve: 0,
        pickling: 0,
        fermentation: 0,
        drying: 0,
        freezing: 0,
        canning: 0,
        otherkonserving: 0,
        level: 0,
        easy: 0,
        medium: 0,
        hard: 0
      }
    );
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-4ii7aa_START -->${$$result.title = `<title> Hovedside </title>`, ""}<!-- HEAD_svelte-4ii7aa_END -->`, ""}
  
<section class=" svelte-5qboi3"><div class="filter">${validate_component(CategoriesandFilters, "CategoriesandFilters").$$render(
      $$result,
      {
        filterOpen,
        totalDinner: count.dinner,
        totalStew: count.stew,
        totalSoup: count.soup,
        totalPizza: count.pizza,
        totalPasta: count.pasta,
        totalPanrecipie: count.panrecipie,
        totalOnePot: count.onePot,
        totalSaladdinner: count.saladdinner,
        totalPiedinner: count.piedinner,
        totalOtherdinner: count.otherdinner,
        totalSides: count.sides,
        totalSauce: count.sauce,
        totalDressing: count.dressing,
        totalDip: count.dip,
        totalMarinade: count.marinade,
        totalDessert: count.dessert,
        totalIce: count.ice,
        totalCake: count.cake,
        totalMinicakes: count.minicakes,
        totalWaffles: count.waffles,
        totalPastry: count.pastry,
        totalDessertpie: count.dessertpie,
        totalOtherdessert: count.otherdessert,
        totalPreserve: count.preserve,
        totalPickling: count.pickling,
        totalFermentation: count.fermentation,
        totalDrying: count.drying,
        totalFreezing: count.freezing,
        totalCanning: count.canning,
        totalOtherkonserving: count.otherkonserving,
        totalLevel: count.level,
        totalEasy: count.easy,
        totalMedium: count.medium,
        totalHard: count.hard,
        selectedFilters,
        difficultyLevel,
        totalmaxTime,
        totalminTime,
        activemaxTime,
        activeminTime
      },
      {
        selectedFilters: ($$value) => {
          selectedFilters = $$value;
          $$settled = false;
        },
        difficultyLevel: ($$value) => {
          difficultyLevel = $$value;
          $$settled = false;
        },
        totalmaxTime: ($$value) => {
          totalmaxTime = $$value;
          $$settled = false;
        },
        totalminTime: ($$value) => {
          totalminTime = $$value;
          $$settled = false;
        },
        activemaxTime: ($$value) => {
          activemaxTime = $$value;
          $$settled = false;
        },
        activeminTime: ($$value) => {
          activeminTime = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>

  <div class="searchAndRecipies svelte-5qboi3"><div class="searchSection svelte-5qboi3"><input class="searchBar svelte-5qboi3" type="text" placeholder="Søk etter oppskrifter"${add_attribute("value", $searchStore.search, 0)}>
    
      <div class="filterAndSort svelte-5qboi3"><button class="filterButton svelte-5qboi3">Filter
        </button>
        </div></div>

    <div class="${["recipies svelte-5qboi3", ""].join(" ").trim()}"><div class="foodCardContainer svelte-5qboi3">${data.recipies && data.recipies.length ? `
          ${each(filteredRecipies, (recipie) => {
      return `<a href="${"/recipie/" + escape(recipie.slug.current, true)}" class="container" aria-label="${"oppskrift på " + escape(recipie.recipieTitle, true) + ", med vanskelighetsgrad: " + escape(recipie.level, true) + ". Den tar " + escape(findtime(recipie).tot, true) + " å lage, der " + escape(findtime(recipie).act, true) + " er aktive."}" tabindex="0"><div class="foodCard svelte-5qboi3"><img class="coverImage svelte-5qboi3"${add_attribute("src", urlFor(recipie.coverimageUrl).url(), 0)}${add_attribute("alt", recipie.coverimagAltText, 0)}>
                
                
                <div class="information svelte-5qboi3"><h3>${escape(recipie.recipieTitle)}</h3>

                  <div class="iconContainer svelte-5qboi3"><div class="icon svelte-5qboi3"><div>${validate_component(Level, "Level").$$render($$result, {}, {}, {})}</div>
                      <h4>${escape(recipie.level)}</h4></div>
                    <div class="icon svelte-5qboi3"><div>${validate_component(Choping, "Choping").$$render($$result, {}, {}, {})}</div>
                      <h4>${escape(findtime(recipie).act)}</h4></div>
                    <div class="icon svelte-5qboi3"><div>${validate_component(Cooking, "Cooking").$$render($$result, {}, {}, {})}</div>
                      <h4>${escape(findtime(recipie).tot)}</h4>
                    </div></div>
                </div></div>
            </a>`;
    })}` : `<h4>No recipies found :(</h4>`}</div></div></div>

</section>`;
  } while (!$$settled);
  $$unsubscribe_searchStore();
  return $$rendered;
});
export {
  Page as default
};
