"use client"
import { UploadDropzone } from "@/lib/uploadthing";
import toast from "react-hot-toast";

export const FileUpload = ({onChange, endPoint}) => {
    return(
          <UploadDropzone endpoint={endPoint} onClientUploadComplete={(res) => {
            console.log("Files: ", res);
            onChange(res?.[0]?.url);
          }} 
          onUploadError={(error) => {
              toast.error(`ERROR! ${error.message}`);
          }}>
          </UploadDropzone>
    )
}