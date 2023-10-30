import createClient from "@sanity/client";
import { sanityConfig } from "../../../sanityConfig.js";

const client = createClient(sanityConfig);

export async function load({ params }) {
  const recipieslug = params.slug
  
  const data = await client.fetch(`*[slug.current == "${recipieslug}"]{
    _id,
    "coverimageUrl": coverimage.asset->url,
    coverimagAltText,
    "ingredientimageUrl": ingredientImage.asset->url,
    ingredientimagAltText,
    recipieTitle,
    recipieDescription,
    level,
    slug,
    ingredients,
    "categorylist": category[].dinner + category[].sides + category[].minies[] + category[].dessert + category[].preserve[] + category[].nationality[] + category[].seasonandholyday[],
    portionsEtc,
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
                ...,
                ingredients->{
                    extraInformation,
                    title,
                    _id,
            }}}},
    rating,
    extraInstruction
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
