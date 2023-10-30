import createClient from "@sanity/client";
import { sanityConfig } from "../sanityConfig.js";

const client = createClient(sanityConfig);

export async function load({ params }) {

  const data = await client.fetch(`*[_type == "information"] 
    | order(priority asc)  {
      infoHeader,
      slug,
      priority
    }`);
  ;
  
  if (data) {
    return {
      information: data,
    };
  }

  return {
    status: 600,
    body: new Error("Internal Server Error"),
  };
}
