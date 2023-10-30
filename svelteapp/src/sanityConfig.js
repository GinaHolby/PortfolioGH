export const sanityConfig = {
  projectId: import.meta.env.VITE_SANITY_ID,
  dataset: "production",
  apiVersion: "2021-10-21",
  useCdn: false, //false for localhost, true for netlify
};

