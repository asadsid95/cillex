import bcrypt from 'bcrypt'
import { NextApiRequest, NextApiResponse } from 'next'
import prismadb from '@/lib/prismadb'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    // limit handler to only POST
    if (req.method !== 'POST') {
        return res.status(405).end()
    }

    try {

        const { email, name, password } = req.body

        // checking if registering user already exists
        const existingUser = await prismadb.user.findUnique({
            where: {
                email
            }
        })
        if (existingUser) {
            return res.status(422).json({ error: 'Email taken' })
        }

        // hash the incoming password
        const hashedPassword = await bcrypt.hash(password, 12)
        // create user in DB
        const user = await prismadb.user.create({
            data: {
                email,
                name,
                hashedPassword,
                image: '',
                emailVerified: new Date()
            }
        })

        return res.status(200).json(user)

    } catch (err) {
        console.log(err)
        return res.status(400).end()
    }


}