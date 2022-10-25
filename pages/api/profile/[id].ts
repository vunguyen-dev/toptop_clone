// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../../utils/clients";
import { singleUserQuery, userCreatedPostsQuery } from "../../../utils/queries";
import { userLikedPostsQuery } from "../../../utils/queries";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "GET") {
        const { id } = req.query;

        const query = singleUserQuery(id as string);
        const userVideosQuery = userCreatedPostsQuery(id as string);
        const userLikedQuery = userLikedPostsQuery(id as string);

        const user = await client.fetch(query);
        const userVideos = await client.fetch(userVideosQuery);
        const userLikedVideos = await client.fetch(userLikedQuery);
        res.status(200).json({ user: user[0], userVideos, userLikedVideos });
    }
}
