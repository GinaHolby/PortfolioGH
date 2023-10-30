import createClient from "@sanity/client";
import { sanityConfig } from "../../../sanityConfig.js";

const client = createClient(sanityConfig);

export async function load({ params }) {
  const topicslug = params.slug
  
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
