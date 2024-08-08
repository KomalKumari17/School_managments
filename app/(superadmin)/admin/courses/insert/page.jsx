"use client"
import Link from "next/link";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import * as z from 'zod';
import {zodResolver} from '@hookform/resolvers/zod'
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";
import toast from "react-hot-toast";

const formSchema = z.object({
  title: z.string().min(1,{
    message: "title is required"
  })
})


const page = () => {
    const router = useRouter();

    const form = useForm({
      resolver: zodResolver(formSchema),
      defaultValues: {
        title: ''
      }
    })
    const {isValid, isSubmitting} = form.formState;

    const onSubmit = async(values) => {
      try{
        const response = await axios.post("/api/courses", values)
        toast.success("course created successfuly")
        router.push(`/admin/courses/${response.data._id}`)
      }catch(error){
        toast.error("something went wrong", error)
      }
    }

    return (
      <div className="px-10 py-5">
         <div className="flex mt-[10%]">
          <Breadcrumb>
             <BreadcrumbList>
               <BreadcrumbItem>
                  <BreadcrumbLink href="/admin/courses">Home</BreadcrumbLink>
               </BreadcrumbItem>
                  <BreadcrumbSeparator/>
               <BreadcrumbItem>
                  <BreadcrumbLink href="/admin/Insert Course">Courses</BreadcrumbLink>
               </BreadcrumbItem>
                  <BreadcrumbSeparator/>
                <BreadcrumbItem>
                  <BreadcrumbPage>Insert Courses</BreadcrumbPage>
                </BreadcrumbItem>  
           </BreadcrumbList>
          </Breadcrumb>
        </div>
      <div className="flex justify-between w-full items-center">
        <h1 className='my-3 text-3xl font-semibold text-slate-500'>Insert Course</h1>
        <Link href="/admin/courses" className="text-white bg-green-600 px-3 py-2 rounded">Go Back</Link>
      </div>
         <div className='mx-auto max-w-5xl flex md:items-center md:justify-center h-full p-6'>
            <div>
              <h1 className="text-xl text-blue-600">Name your Course</h1>
              <p className="text-sm text-slate-600"> what would you like to name your course? don't worry you can change this later</p>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <FormField
                    control={form.control}
                    name="title"
                    render={({field}) => (
                      <FormItem >
                        <FormLabel>Course Title</FormLabel>
                        <FormControl>
                          <Input disabled={isSubmitting} placeholder="e.g Web Development" {...field}/>
                        </FormControl>
                        <FormDescription>what will you teach in this course</FormDescription>
                        <FormMessage/>
                      </FormItem>
                    )}
                  />
                  <div className="mt-4">
                  <Link href="/admin/courses">
                    <Button type="button" variant="ghost">Cancel</Button>
                  </Link>
                  <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white" disabled={!isValid || isSubmitting}>Continue</Button>
                  </div>
                </form>
              </Form>
            </div>
        </div>
        </div>
    
    )
  }
  
  export default page;