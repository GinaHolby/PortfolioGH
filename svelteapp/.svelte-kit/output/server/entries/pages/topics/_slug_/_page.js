import createClient from "@sanity/client";
import { s as sanityConfig } from "../../../../chunks/sanityConfig.js";
const client = createClient(sanityConfig);
async function load({ params }) {
  const topicslug = params.slug;
  const data = await client.fetch(`*[slug.current == "${topicslug}"]{
    topicTitle,
    topicDescription[]{
      children,
        
      },
              
    
  }`);
  if (data) {
    return {
      category: data
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
