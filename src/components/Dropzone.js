'use client'
import { UploadDropzone } from "@uploadthing/react";
import Image from "next/image";

const Dropzone = ({ urlGambar, setUrlGambar }) => {
    
    return (
        <>
            <div className="mb-4">
                {urlGambar.length ?
                    <div className="py-6 px-5">
                        <Image src={urlGambar || ''} alt="..." width={250} height={250} className="rounded-xl shadow-lg" />
                    </div>
                    : null
                }
                <UploadDropzone
                    appearance={{
                        container: {
                            width: '100%'
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