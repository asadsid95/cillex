import { NextApiRequest, NextApiResponse } from "next";
import serverAuth from "@/lib/serverAuth";

// api route for GET; pull current user by using passing req to lib function 
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // limiting it to GET requests
    if (req.method !== 'GET') {
        return res.status(405).end()
    }

    try {
        // fetch current user using serverAuth
        const { currentUser } = await serverAuth(req)

        return res.status(200).json(currentUser)
    } catch (err) {
        console.log(err)
        return res.status(400).end()
    }
}