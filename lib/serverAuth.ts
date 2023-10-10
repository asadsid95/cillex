import { NextApiRequest } from 'next'
import { getSession } from 'next-auth/react'
import prismadb from '@/lib/prismadb'

// fetch logged in user session for all api routes 
const serverAuth = async (req: NextApiRequest) => {

    const session = await getSession({ req })

    if (!session?.user?.email) {
        throw new Error('Not signed in')
    }

    // pull current user by using the user from session
    const currentUser = await prismadb.user.findUnique({
        where: {
            email: session.user.email
        }
    })

    if (!currentUser) {
        throw new Error('Not signed in')
    }

    return { currentUser }

}

export default serverAuth