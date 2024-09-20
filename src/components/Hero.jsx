import React from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { TbMessages } from "react-icons/tb";
import { AiOutlineDollar } from "react-icons/ai";

export default function Hero() {
    return (
        <div>
            <div className="flex justify-evenly items-center p-16">
                <div>
                    <h1 className="font-bold text-5xl py-8">
                        <span className="px-2 bg-yellow-400">your</span> trash
                        is
                    </h1>
                    <h1 className="font-bold text-5xl py-8">
                        their{" "}
                        <span className="px-2 bg-yellow-400">treasure</span>
                    </h1>
                    <h1 className="text-center font-semibold text-3xl py-2 rounded-3xl h-12 w-56 mx-auto my-10 bg-yellow-400 hover:bg-black hover:text-yellow-400">
                        shop now
                    </h1>
                </div>
                <img src="https://img.freepik.com/free-photo/selective-focus-shot-sunglasses-white-hat-sandy-beach_181624-31284.jpg" />
            </div>
            <div className="flex justify-between w-8/12 mx-auto items-center">
                <div
                    className="border-4 border-black 
                w-[250px] h-[210px] 
                text-center text-2xl py-6"
                >
                    <AiOutlineCloudUpload size={"8rem"} className="mx-auto" />
                    upload
                </div>
                <div className="border-4 border-black w-[250px] h-[210px] text-center text-2xl py-6">
                    <TbMessages size={"8rem"} className="mx-auto" />
                    settle
                </div>
                <div className="border-4 border-black w-[250px] h-[210px] text-center text-2xl py-6">
                    <AiOutlineDollar size={"8rem"} className="mx-auto" />
                    sell
                </div>
            </div>
        </div>
    );
}
