import React from 'react'
import ConnectDb from '@/utils/connectDb'
import UserModel from '@/models/UserModel';
import { DataTable } from '../ui/data-table';
import { columns } from '../students/columns';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'

const page = async () => {
    await ConnectDb();
    let users = await UserModel.find({status:false, role:"user"});
    users = JSON.parse(JSON.stringify(users))
  return (
    <div className='px-10 py-5'>
       <div className="flex mt-[10%]">
          <Breadcrumb>
             <BreadcrumbList>
               <BreadcrumbItem>
                  <BreadcrumbLink href="/admin/courses">Home</BreadcrumbLink>
               </BreadcrumbItem>
                  <BreadcrumbSeparator/>
                <BreadcrumbItem>
                  <BreadcrumbPage>Courses</BreadcrumbPage>
                </BreadcrumbItem>  
           </BreadcrumbList>
          </Breadcrumb>
        </div>
        <h2 className='text-2xl font-bold mb-3 mt-3'>Manage Admission ({users.length})</h2>
        <DataTable columns={columns} data={users}/>

    </div>
  )
}

export default page