import imageUrlBuilder from "@sanity/image-url";
import { c as create_ssr_component } from "./index2.js";
const builder = imageUrlBuilder({
  baseUrl: "https://cdn.sanity.io",
  projectId: "boi47aji",
  dataset: "production"
});
function urlFor(source) {
  return builder.image(source).size(source.width, source.height).fit("crop");
}
function changeMinutes(minutes) {
  if (60 < minutes && minutes < 60 * 24) {
    const totalHoures = minutes / 60;
    const integerHoures = Math.trunc(minutes / 60);
    const rest = Math.trunc((totalHoures - integerHoures) * 60);
    if (rest < 5) {
      minutes = integerHoures + "t";
    } else if (rest > 55) {
      minutes = integerHoures + 1 + "t";
    } else {
      minutes = integerHoures + "t og " + rest + "min";
    }
  } else if (minutes > 60 * 24) {
    const totalHoures = minutes / (60 * 24);
    const integerHoures = Math.trunc(minutes / (60 * 24));
    const rest = Math.round((totalHoures - integerHoures) * 24);
    if (rest == 0) {
      minutes = integerHoures + "d";
    } else {
      minutes = integerHoures + "d og " + rest + "t";
    }
  } else {
    minutes = minutes + "min";
  }
  return minutes;
}
function findtime(recipie) {
  const timer = recipie.allinstructions.map((station) => {
    return {
      totall: station.instructions && station.instructions.total !== void 0 ? station.instructions.total : 0,
      activee: station.instructions && station.instructions.active !== void 0 ? station.instructions.active : 0
    };
  });
  let totalSum = 0;
  timer.forEach((num) => {
    totalSum += num.totall;
  });
  let activeSum = 0;
  timer.forEach((num) => {
    activeSum += num.activee;
  });
  return {
    tot: changeMinutes(totalSum),
    totmin: totalSum,
    act: changeMinutes(activeSum),
    actmin: activeSum
  };
}
const Choping = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="30" height="35" viewBox="0 0 63 68" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M56.6301 46.2678C55.0662 45.3714 10.5858 30.1157 10.361 30.7864C10.1362 31.457 11.1507 36.1293 12.8113 39.0626C14.5159 42.0736 16.1641 43.3621 18.8413 45.554C24.413 50.1158 34.7084 53.8453 35.8273 52.7287C36.9462 51.6122 36.2802 48.0333 37.1748 47.5873C38.0693 47.1413 52.8205 53.1954 54.6091 53.4211C56.3977 53.6467 58.3361 52.6333 58.861 50.7424C59.3834 48.861 58.1939 47.1642 56.6301 46.2678Z" stroke="black"></path><path d="M58 7C58 8.10457 57.1046 9 56 9C54.8954 9 54 8.10457 54 7C54 5.89543 54.8954 5 56 5C57.1046 5 58 5.89543 58 7Z" fill="black"></path><path d="M30.222 16H31.9998M31.9998 16C31.9998 16 31.9998 17.3929 31.9998 18.2855M31.9998 16H33.7777M31.9998 18.2855C28.2394 18.4365 25.3417 21.2304 25.185 24.8562C25.0214 28.6429 28.0701 31.9114 31.9998 31.9983C36.093 32.0889 39.4521 28.5044 39.1109 24.5705C38.797 20.9508 35.7671 18.2729 31.9998 18.2855Z" stroke="black" stroke-linecap="round"></path><path d="M37.6299 18.2855L39.4077 19.9996" stroke="black" stroke-linecap="round"></path><path d="M24.5928 19.9996L26.3706 18.2855" stroke="black" stroke-linecap="round"></path><path d="M32 25L36 24" stroke="black" stroke-linecap="round"></path><path d="M49.4999 43.4999C49.4999 43.4999 57.633 35.4999 57.9999 32.4999C58.3668 29.5 50.7674 24.9539 51.9999 19.4999C53.1263 14.5151 59.0003 14.4999 61.5003 10.4999C63.0664 7.99424 62.6218 5.05689 60.5003 3C58.9532 1.49995 56.0003 0.499952 53.0003 1.99992C50.0003 3.4999 47.5003 10.4999 43.5003 11.9999C39.5003 13.4999 34.5 6.5 31 6C27.5 5.5 1.99999 32 0.999905 34.9999C-0.000180181 37.9999 24.9999 62.5 27.9998 63C30.9997 63.5 43.5 50 43.5 50" stroke="black" stroke-linecap="round"></path></svg>`;
});
const Cooking = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="30" height="30" viewBox="0 0 57 47" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27.222 24H28.9998M28.9998 24C28.9998 24 28.9998 25.3929 28.9998 26.2855M28.9998 24H30.7777M28.9998 26.2855C25.2394 26.4365 22.3417 29.2304 22.185 32.8562C22.0214 36.6429 25.0701 39.9114 28.9998 39.9983C33.093 40.0889 36.4521 36.5044 36.1109 32.5705C35.797 28.9508 32.7671 26.2729 28.9998 26.2855Z" stroke="black" stroke-linecap="round"></path><path d="M34.6299 26.2855L36.4077 27.9996" stroke="black" stroke-linecap="round"></path><path d="M21.5928 27.9996L23.3706 26.2855" stroke="black" stroke-linecap="round"></path><path d="M29 33L33 32" stroke="black" stroke-linecap="round"></path><path d="M52.9783 17.4463C52.9783 17.4463 56.5053 17.3244 56.5 17.4462C56.4576 18.4216 56.094 20.5889 56 20.9462C55.7593 21.8608 53.1918 21.5251 52.9783 23.4463C51.9783 32.4462 52.5 41.346 51.5 45.9462C51.3783 46.5061 6.1449 46.4462 5.97829 45.9463C4.47838 41.4462 5.97829 28.9462 4.47829 23.4463C3.96967 21.5814 1.71565 21.8358 1.49121 20.9462C1.36485 20.4453 1.00616 18.4462 1 17.4462C0.99957 17.3764 4.47829 17.4463 4.47829 17.4463M52.9783 17.4463C52.9783 17.4463 51.9783 14.7926 49.9778 12.9462C44.5608 7.94628 35.4783 7.94628 35.4783 7.94628M52.9783 17.4463H4.47829M35.4783 7.94628C35.4783 7.94628 35.8228 6.63454 34.4783 3.94628C33.1337 1.25802 24.4778 1.44616 22.9783 3.94628C21.4788 6.4464 21.9783 7.94628 21.9783 7.94628M35.4783 7.94628H21.9783M21.9783 7.94628C21.9783 7.94628 14.4778 7.44628 7.4778 12.9462C5.25346 14.6938 4.47829 17.4463 4.47829 17.4463" stroke="black" stroke-linecap="round"></path><path d="M55.9808 5C55.9808 5 54 5.55172 54 7.2069C54 8.86207 56.2285 9.00527 55.9808 10.5172C55.7708 11.7982 54 13 54 13" stroke="black" stroke-linecap="round"></path><path d="M49.9808 1C49.9808 1 48 1.55172 48 3.2069C48 4.86207 50.2285 5.00527 49.9808 6.51724C49.7708 7.79825 48 9 48 9" stroke="black" stroke-linecap="round"></path><path d="M4.98077 5C4.98077 5 3 5.55172 3 7.2069C3 8.86207 5.22855 9.00527 4.98077 10.5172C4.77084 11.7982 3 13 3 13" stroke="black" stroke-linecap="round"></path><path d="M10.9808 1C10.9808 1 9 1.55172 9 3.2069C9 4.86207 11.2285 5.00527 10.9808 6.51724C10.7708 7.79825 9 9 9 9" stroke="black" stroke-linecap="round"></path></svg>`;
});
const Level = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="30" height="30" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.00038 45.4999C4.47151 44.9717 4.49994 32.5 4.9999 32C5.49987 31.5 14.5392 31.5 15 32C15.4608 32.5 15.4999 44.9999 15.0001 45.4999C14.5002 46 5.5009 45.9999 5.00038 45.4999Z" stroke="black" stroke-linecap="round"></path><path d="M20 45.4999C19.5001 45 19.4998 19.9999 19.9999 19.4999C20.5001 19 29.4999 18.9999 30 19.4999C30.5001 20 30.4999 44.9999 30 45.4999C29.5001 46 20.4999 45.9999 20 45.4999Z" stroke="black" stroke-linecap="round"></path><path d="M45 45.4999C45.5 45 45.2943 6.36767 45 5.99989C44.6901 5.61263 35.5249 5.47522 35 5.99993C34.4998 6.49996 34.5001 45 35 45.4999C35.4999 45.9999 44.5 45.9998 45 45.4999Z" stroke="black" stroke-linecap="round"></path></svg>`;
});
const Rating_svelte_svelte_type_style_lang = "";
export {
  Choping as C,
  Level as L,
  Cooking as a,
  changeMinutes as c,
  findtime as f,
  urlFor as u
};
