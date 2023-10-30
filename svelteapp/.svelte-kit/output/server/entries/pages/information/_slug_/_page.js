import createClient from "@sanity/client";
import { s as sanityConfig } from "../../../../chunks/sanityConfig.js";
const client = createClient(sanityConfig);
async function load({ params }) {
  const informationSlug = params.slug;
  const data = await client.fetch(`*[slug.current == "${informationSlug}"]{
    infoHeader,
    slug,
    informatinParagraphs
    
  }`);
  if (data) {
    return {
      information: data
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
