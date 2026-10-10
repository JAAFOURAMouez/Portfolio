import { useState } from "react";
import Edu_Card from "../components/Background/Edu_Card";
import Exp_Card from "../components/Background/Exp_Card";
import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import { Skeleton } from "antd";
import ParagraphSkeleton from "../components/Common/ParagraphSkeleton";
import { useEffect, useState as useStateHook } from "react"
import axios from "axios";

function Background() {
    const [isLoading, setIsLoading] = useStateHook(true);
    const [error, setError] = useStateHook(null);
    const [data, setData] = useStateHook(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('api/background');
                setData(response.data);
                setIsLoading(false);
            } catch (err) {
                console.error('Error fetching background:', err);
                setError(err);
                setIsLoading(false);
            }
        };

        // Only run on client side
        if (typeof window !== 'undefined') {
            fetchData();
        }
    }, []);

    return (
        <BannerLayout>
            <div className="grid md:grid-cols-2 md:divide-x-4 md:divide-Green px-4 pb-2 pt-10">
                <div className="flex flex-col gap-y-4 order-2 md:order-1  md:mr-12">
                    <div className="mt-10 md:mt-0 text-xl text-Snow font-semibold">Education</div>
                    {isLoading ?
                        [1, 2, 3].map(() => (
                            <ParagraphSkeleton className={"p-8 h-full w-full relative"} />
                        ))
                        :
                        error ?
                            <div>Error loading education data</div>
                            :
                            data && data[0]?.eduCards?.map((data, key) => (
                                <Edu_Card key={key} data={data} />
                            ))
                    }

                </div>
                <div className="order-1 md:order-2">
                    <div className="flex flex-col gap-y-4 md:ml-12">
                        <div className=" md:pt-0 pt-4 text-xl text-Snow font-semibold">Experience</div>

                        {isLoading ?
                            [1, 2, 3].map(() => (
                                <ParagraphSkeleton className={"p-8 h-full w-full relative"} />
                            ))
                            :
                            error ?
                                <div>Error loading experience data</div>
                                :
                                data && data[1]?.expCards?.map((data, key) => (
                                    <Exp_Card key={key} data={data} />
                                ))
                        }

                    </div>
                </div>
            </div>
            <Footer />
        </BannerLayout>
    );
}

export default Background;