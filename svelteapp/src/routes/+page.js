import createClient from "@sanity/client";
import { sanityConfig } from "../sanityConfig.js";

const client = createClient(sanityConfig);

export async function load({ params }) {

  const data = await client.fetch(`*[_type == "project" && defined(slug.current)] | order(_createdAt desc){
    projectTitle,
    _id,
    slug,
    "bilde": image.asset->url,
    gallery[]
    }`);

  if (data) {
    return {
      projects:  data,
    };
  }

  return {
    status: 600,
    body: new Error("Internal Server Error"),
  };
}
