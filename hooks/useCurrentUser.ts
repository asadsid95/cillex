import useSWR from "swr";

import fetcher from "@/lib/fetcher";

// hook to get current user

const useCurrentUser = () => {
    // fetches data (similar to react-query) once so if the hook is used in multiple places, data will not be pulled multiple times
    const { data, error, isLoading, mutate } = useSWR('/api/current', fetcher)

    return { data, error, isLoading, mutate }
}

export default useCurrentUser