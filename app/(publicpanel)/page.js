import Image from "next/image";
import HomeHero from "./_components/HomeHero";
import AboutVision from "./_components/AboutVision";
import CourseSection from "./_components/CourseSection";
import ConnectDb from "@/utils/connectDb";
import CourseModel from "@/models/CourseModel";
import { main } from "@/scripts/seed";

export default async function Home() {
  await ConnectDb();
  let courses = await CourseModel.find({}).populate("category");
  return (
    <>
    <HomeHero/>
    <CourseSection courses={courses}/>
    </>
  );
}
