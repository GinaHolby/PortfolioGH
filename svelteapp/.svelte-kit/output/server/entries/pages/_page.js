import createClient from "@sanity/client";
import { s as sanityConfig } from "../../chunks/sanityConfig.js";
const client = createClient(sanityConfig);
async function load({ params }) {
  const data = await client.fetch(`*[_type == "recipie"] 
    | order(_createdAt desc) {
      "coverimageUrl": coverimage,
      coverimagAltText,
      "ingredientimageUrl": ingredientImage.asset->url,
      recipieTitle,
      level,
      slug,
      rating,
    "categorylist": 
      category[].dinner + 
      category[].sides + 
      category[].minies[] + 
      category[].dessert + 
      category[].preserve[] + 
      category[].nationality[] + 
      category[].seasonandholyday[],
      allinstructions[]{
        instructions->{
            _type,
            active,
            total,
            }},
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
