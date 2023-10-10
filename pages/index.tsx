import useCurrentUser from "@/hooks/useCurrentUser"
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

    const { data: user } = useCurrentUser()

    console.log(user)
    return (
        <div className="text-green-600">
            Netflix Clone
            <p>Logged in as: {user?.name}</p>
            <button className='h-10 w-10 bg-white' onClick={() => signOut()}>Logout</button>

        </div>
    )
}