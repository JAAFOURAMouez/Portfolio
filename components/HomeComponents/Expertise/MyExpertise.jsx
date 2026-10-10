import ExpertiseCard from "./ExpertiseCard"
import axios from "axios"
import ParagraphSkeleton from "../../Common/ParagraphSkeleton"
import { useEffect, useState } from "react"

const MyExpertise = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('api/expertise')
                setData(response.data)
                setIsLoading(false)
            } catch (err) {
                console.error('Error fetching expertise:', err)
                setError(err)
                setIsLoading(false)
            }
        }

        // Only run on client side
        if (typeof window !== 'undefined') {
            fetchData()
        }
    }, [])

    return (
        <>
            <div className="px-2 md:px-8 py-4 text-lg font-bold text-Snow">My Expertise</div>
            <div className="grid justify items-center grid-flow-row md:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-4 px-2 md:px-8 " >

                {
                    isLoading ?
                        [1, 2, 3, 4, 5, 6].map(() => (
                            <ParagraphSkeleton className={"space-y-2 p-8"} />
                        ))
                        :
                        error ?
                            <div>Error loading data</div>
                            :
                            data?.map((data, key) => (
                                <ExpertiseCard key={key} data={data} />
                            ))
                }

            </div>
        </>
    )
}

export default MyExpertise