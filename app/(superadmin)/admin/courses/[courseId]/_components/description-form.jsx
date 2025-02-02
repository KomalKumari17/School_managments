"use client"
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { Pencil } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import {z} from 'zod'

const formSchema = z.object({
    description: z.string().min(1,{
        message:"description is required"
    })
})

const DescriptionForm = ({initialData, courseId}) => {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);

  const toggleEditing = () => setIsEditing((current) => !current);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
        description:initialData.description || ""
    }
  })

  const {isSubmitting, isValid} = form.formState;

  const onSubmit = async(values) => {
    try{
        const response = await axios.patch(`/api/courses/${courseId}`, values)
        toast.success("course updated successfully")
        router.refresh();
        toggleEditing();
    }
    catch(err){
        toast.error("Something went wrong" +err.message)
    }
  }
    return (
    <div className='mt-6 bg-slate-100 rounded-md dark:bg-gray-800'>
        <div className='font-medium flex items-center justify-between p-3'>
            Course Description
            <Button onClick={toggleEditing} variant="ghost">
                {isEditing? (
                    <div>Cancel</div>
                ):(
                    <>
                    <Pencil className='h-4 w-4 mr-2'/>
                    Edit Description
                    </>
                )}
            </Button>
        </div>
        {
            !isEditing && (
                <p className={cn("text-sm mt-2 dark:text-gray-300 px-3 pb-3", !initialData?. description && "italic text-gray-400")}>
                    {initialData?.description || "No Description Available"}</p>
            )}
            {
                isEditing && (
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className='p-3'>
                            <FormField
                                control={form.control}
                                name="description"
                                render={({field}) => (
                                    <FormItem>
                                        <FormControl>
                                            <Textarea disabled={isSubmitting} placeholder="e.g Write about your Course..."  className="bg-white" {...field}/>
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}/>
                                <div className='flex items-center gap-x-2 mt-3'>
                                    <Button type="submit" disabled={!isValid || isSubmitting} className="bg-slate-300 hover:bg-slate-600 hover:text-white">Submit</Button>
                                </div>
                        </form>
                    </Form>
                )
            }
    </div>
  )
}

export default DescriptionForm