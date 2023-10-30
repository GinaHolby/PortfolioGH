export const recipiesGroq = `*[_type == "recipie"]{
    "coverimageUrl": coverimage.asset->url,
    "ingredientimageUrl": ingredientImage.asset->url,
    recipieTitle,
    level,
    total, 
    active,
    slug,
  }`;
