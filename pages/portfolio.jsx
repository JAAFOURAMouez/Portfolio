import { useState } from "react";
import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import PortfolioCard from "../components/Portfolio/PortfolioCard";
import { Skeleton } from "antd";
import ImageAndParagraphSkeleton from "../components/Common/ImageAndParagraphSkeleton";
import { useEffect, useState as useStateHook } from "react"
import axios from "axios";

const Portfolio = () => {
    const [isLoading, setIsLoading] = useStateHook(true);
    const [error, setError] = useStateHook(null);
    const [data, setData] = useStateHook(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('api/portfolio');
                setData(response.data);
                setIsLoading(false);
            } catch (err) {
                console.error('Error fetching portfolio:', err);
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
            <div className="grid justify items-center grid-flow-row md:grid-cols-2 grid-rows-auto gap-4 px-8 my-6">

                {
                    isLoading ?
                        [1, 2, 3, 4].map(() => (
                            <ImageAndParagraphSkeleton className={"w-full object-cover"} />
                        ))
                        :
                        error ?
                            <div>Error loading portfolio data</div>
                            :
                            data?.map((data, key) => (
                                <PortfolioCard key={key} data={data} />
                            ))
                }


            </div >
            <Footer />
        </BannerLayout >
    );
};

export default Portfolio;