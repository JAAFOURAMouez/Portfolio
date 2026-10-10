import RecommendationCard from "./RecommendationCard"
import axios from "axios"
import ParagraphSkeleton from "../../Common/ParagraphSkeleton"
import { useEffect, useState } from "react"


const Recommendations = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('api/recommendations')
                setData(response.data)
                setIsLoading(false)
            } catch (err) {
                console.error('Error fetching recommendations:', err)
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
            <div className="px-2 md:px-8 py-4 text-lg font-bold text-Snow">Recommendations</div>
            <div className="grid w-full h-full mt-5 justify-items-start grid-flow-row md:grid-cols-2 grid-rows-auto gap-x-4 gap-y-4 px-2 md:px-8 pb-8">

                {isLoading ?
                    [1, 2, 3, 4].map(() => (
                        <ParagraphSkeleton className={"p-8 h-full w-full relative"} />
                    ))
                    :
                    error ?
                        <div>Error loading data</div>
                        :
                        data?.map((data, key) => (
                            <RecommendationCard key={key} data={data} />
                        ))
                }

            </div>
        </>
    )
}

export default Recommendations