import sanityClient from "@sanity/client";

export const client = sanityClient({
    projectId: "w44ut7sd",
    dataset: "production",
    apiVersion: "2022-10-13",
    useCdn: false,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
