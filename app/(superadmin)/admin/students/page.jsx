import ConnectDb from '@/utils/connectDb'
import UserModel from '@/models/UserModel';
import CallingStudentTable from '../ui/CallingStudentTable';
import { DataTable } from '../ui/data-table';
import { columns } from './columns';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'


const page = async () => {
    await ConnectDb();
    let users = await UserModel.find({status:true});
    users = JSON.parse(JSON.stringify(users))
  return (
    <div className='px-20 py-5 w-full flex flex-col'>
      <div className="flex mt-[10%]">
          <Breadcrumb>
             <BreadcrumbList>
               <BreadcrumbItem>
                  <BreadcrumbLink href="/admin/students">Home</BreadcrumbLink>
               </BreadcrumbItem>
                  <BreadcrumbSeparator/>
                <BreadcrumbItem>
                  <BreadcrumbPage>Students</BreadcrumbPage>
                </BreadcrumbItem>  
           </BreadcrumbList>
          </Breadcrumb>
        </div>
        <h2 className='text-2xl font-bold mb-3'>Manage Students ({users.length})</h2>
        <DataTable columns={columns} data={users}/>
      </div>
  )
}

export default page;