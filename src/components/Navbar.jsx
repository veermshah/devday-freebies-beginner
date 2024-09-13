import React from "react";
import { PiBellSimpleRinging } from "react-icons/pi";
import { VscAccount } from "react-icons/vsc";

export default function Navbar() {
    return (
        <div>
            <div className="mx-auto flex flex-row items-center justify-between px-20 py-4">
                {/* TITLE */}
                <h1 className="poppins-bold text-3xl text-amber-300">
                    UTDFreebies
                </h1>
                {/* LINKS */}
                <div className="poppins-semibold flex gap-8 py-2 text-2xl">
                    <p>new</p>
                    <p>browse</p>
                    <p>upload</p>
                </div>
                {/* ICONS */}
                <div className="flex gap-12 py-2">
                    <PiBellSimpleRinging size="2rem" />
                    <VscAccount size="2rem" />
                </div>
            </div>
            <hr className="w-full border-t-3 border-gray-400 border-opacity-50"/>
        </div>
    );
}
