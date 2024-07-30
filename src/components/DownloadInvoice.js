'use client'
import { DownloadIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
const DownloadInvoice = () => {
    return (
        <>
            <Button variant="none" onClick={() => window.print()} className="text-color-secondary bg-transparent font-bold text-2xl mb-4 flex gap-2 items-center cursor-pointer" title="Download Invoice">
                <DownloadIcon className="w-5 h-5" />
                INVOICE
            </Button>
        </>
    );
}
 
export default DownloadInvoice;