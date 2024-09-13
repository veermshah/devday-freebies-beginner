import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

export default function Testimonials() {
    return (
        <div className="my-32 w-full h-[610px] bg-orange-200 bg-opacity-50">
            <div className="w-1/2 mx-auto">
                <h1 className="text-5xl font-semibold text-center py-12">
                    Don't take our word take their's!
                </h1>
                <div className="border-2 border-black border-opacity-40 rounded-3xl bg-white h-44">
                    <div className="flex m-4 px-2">
                        <div className="rounded-full bg-purple-400 w-12 h-12"></div>
                        <h1 className="px-4 mt-3 font-semibold">
                            Billy Bob Joe
                        </h1>
                        <div className="ml-72">
                            <FaQuoteLeft size="2rem" />
                        </div>
                    </div>
                    <p className="px-7 text-gray-600">
                        I’ve always had this junk lying around and I was gonna
                        throw it away, but you know what they say. One comet's
                        trash is another comet's treasure!
                    </p>
                </div>
                <div className="mt-5 border-2 border-black border-opacity-40 rounded-3xl bg-white h-44">
                    <div className="flex m-4 px-2">
                        <div className="rounded-full bg-green-400 w-12 h-12"></div>
                        <h1 className="px-4 mt-3 font-semibold">
                            Elvis Presley
                        </h1>
                        <div className="ml-72">
                            <FaQuoteLeft size="2rem" />
                        </div>
                    </div>
                    <p className="px-7 text-gray-600">
                        Who woulda guessed that someone would’ve wanted my used
                        bike!
                    </p>
                </div>
            </div>
        </div>
    );
}
