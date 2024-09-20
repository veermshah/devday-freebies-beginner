import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

export default function Testimonials() {
    return (
        <div className="my-32 w-full h-[610px] bg-orange-200 bg-opacity-50">
            <div className="w-1/2 mx-auto">
                <h1 className="text-5xl font-semibold text-center py-12">
                    Don't take our word take their's!
                </h1>
                <div className="border-2 border-black border-opacity-40 rounded-3xl bg-white pb-6">
                    <div className="flex justify-between m-4 px-2">
                        <div className="flex flex-row">
                            <div className="rounded-full bg-purple-400 w-12 h-12"></div>
                            <h1 className="px-4 mt-3 font-semibold">
                                Billy Bob Joe
                            </h1>
                        </div>
                        <FaQuoteLeft size="2rem" />
                    </div>
                    <p className="px-7 text-gray-600">
                        I’ve always had this junk lying around and I was gonna
                        throw it away, but you know what they say. One comet's
                        trash is another comet's treasure!
                    </p>
                </div>
                <div className="border-2 border-black border-opacity-40 rounded-3xl bg-white pb-6 mt-5">
                    <div className="flex justify-between m-4 px-2">
                        <div className="flex">
                            <div className="rounded-full bg-green-400 w-12 h-12"></div>
                            <h1 className="px-4 mt-3 font-semibold">
                                Elvis Presley
                            </h1>
                        </div>
                        <FaQuoteLeft size="2rem" />
                    </div>
                    <p className="px-7 text-gray-600">
                        I was all shook up when I saw how much money I saved
                        with Comet. I was able to buy a new guitar and a new
                        car!
                    </p>
                </div>
            </div>
        </div>
    );
}
