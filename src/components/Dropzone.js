'use client'
import { UploadDropzone } from "@uploadthing/react";
import Image from "next/image";
import { useState } from "react";

const Dropzone = ({ urlGambar, setUrlGambar }) => {
    
    return (
        <>
            <div className="mb-4">
                <label className="px-2 font-medium text-color-secondary text-sm">Foto furniture</label>
                {urlGambar.length ?
                    <div className="py-6 px-5">
                        <Image src={urlGambar || ''} alt="..." width={350} height={400} className="rounded-xl shadow-lg" />
                    </div>
                    : null
                }
                <UploadDropzone
                    appearance={{
                        container: {
                            width: '70%'
                        }
                    }}
                    endpoint="imageUploader"
                    onClientUploadComplete={(res) => {
                        setUrlGambar(res[0].url)
                    }}
                    onUploadError={(error) => {
                        alert(`ERROR! ${error.message}`);
                    }}
                />
            </div>
        </>
    );
}

export default Dropzone;