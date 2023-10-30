import createClient from "@sanity/client";
import { s as sanityConfig } from "../../../../chunks/sanityConfig.js";
const client = createClient(sanityConfig);
async function load({ params }) {
  const recipieslug = params.slug;
  const data = await client.fetch(`*[slug.current == "${recipieslug}"]{
    _id,
    "coverimageUrl": coverimage.asset->url,
    coverimagAltText,
    "ingredientimageUrl": ingredientImage.asset->url,
    recipieTitle,
    recipieDescription,
    level,
    slug,
    ingredients,
    "categorylist": category[].dinner + category[].sides + category[].minies[] + category[].dessert + category[].preserve[] + category[].nationality[] + category[].seasonandholyday[],
    portions,
    "steps": allinstructions,
    allinstructions[]{
        step,
        baseRecipieTitle->,
        multiplier, 
        instructions->{
            _type,
            active,
            total,
            stepTitle,
            stepInstructions[]{
                _type,
                children,
                units,
                quant,
                listItem,
                ingredients->{
                    title,
                    _id,
            }}}},
    "test2": ingredients,
    rating
  }`);
  if (data) {
    return {
      recipies: data
    };
  }
  return {
    status: 600,
    body: new Error("Internal Server Error")
  };
}
export {
  load
};
