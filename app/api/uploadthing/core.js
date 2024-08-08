import { createUploadthing} from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
    courseImage: f({image: {maxFileSize: "4MB", maxFileCount:1}})
    .middleware(() => {})
    .onUploadComplete(() => {})
}