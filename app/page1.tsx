import { NextPageContext } from "next"
import { getSession, signOut } from "next-auth/react"

export async function getServerSideProps(context: NextPageContext) {

    // fetch session 
    const session = await getSession(context)

    // redirect to auth if session not found
    if (!session) {
        return {
            redirect: {
                destination: '/auth',
                permanent: false
            }
        }
    }

    return {
        props: {}
    }
}

export default function App() {
    return (
        <div className="text-green-600">
            Netflix Clone

            <button className='h-10 w-10 bg-white' onClick={() => signOut()}>Logout</button>

        </div>
    )
}