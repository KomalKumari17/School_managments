
import AddCategory from '../ui/AddCategory'
import Categories from '../ui/Categories';
import ConnectDb from '@/utils/connectDb';
import CategoryModel from '@/models/CategoryModel';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'


const page = async () => {
  await ConnectDb();
  let categories = await CategoryModel.find();
  return (
   <>
   
   <div className='px-10 py-5'>
   <div className="flex mt-[10%]">
          <Breadcrumb>
             <BreadcrumbList>
               <BreadcrumbItem>
                  <BreadcrumbLink href="/admin/categories">Home</BreadcrumbLink>
               </BreadcrumbItem>
                  <BreadcrumbSeparator/>
                <BreadcrumbItem>
                  <BreadcrumbPage>Categories</BreadcrumbPage>
                </BreadcrumbItem>  
           </BreadcrumbList>
          </Breadcrumb>
        </div>
  <h1 className='text-gray-500 font-bold text-3xl mt-4'>Category Management ({categories.length})</h1>
   <div className="flex gap-5">
   <div className="w-1/4"><AddCategory/></div>
    <div className="w-3/4"><Categories categories={categories}/></div>
   </div>
   </div>
   </>
  )
}

export default page;