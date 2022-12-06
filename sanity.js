import SanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = new SanityClient({
  projectId: "jwbq4t61",
  useCdn: true,
  apiVersion: "2022-12-06",
  dataset: "production",
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;
