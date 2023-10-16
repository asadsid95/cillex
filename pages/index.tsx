import Navbar from "@/components/Navbar"
import useCurrentUser from "@/hooks/useCurrentUser"
import { NextPageContext } from "next"
import { getSession } from "next-auth/react"

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
        < >
            <Navbar />
        </>
    )
}