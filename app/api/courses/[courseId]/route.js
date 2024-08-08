import CourseModel from "@/models/CourseModel";
import ConnectDb from "@/utils/connectDb"
import { NextResponse } from "next/server";

export const PATCH = async (req, {params}) => {
    try{
        await ConnectDb();
        let values = await req.json();
        let {courseId} = params;
        let course = await CourseModel.findByIdAndUpdate(courseId,{...values});

        return NextResponse.json(course);
    }
    catch(error){
        console.log("Course Update error" +error);
        return new NextResponse("Internal Error", {status:500});
    }
}