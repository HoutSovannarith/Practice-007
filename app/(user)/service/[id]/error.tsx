'use client';
import Image from "next/image";

export default function Error(){
    return (
        <div>
            <div className="h-screen grid place-content-center">
                <Image src="https://miro.medium.com/v2/resize:fit:4800/format:webp/1*mUClow2WD0I2FIL_Iuzxfw.gif" alt="error"/>
            </div>
        </div>
    )
}