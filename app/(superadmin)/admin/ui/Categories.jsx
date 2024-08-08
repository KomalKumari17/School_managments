import { handleDelete } from '@/app/actions';
import CategoryModel from '@/models/CategoryModel';
import ConnectDb from '@/utils/connectDb'
import { redirect } from 'next/navigation';

const Categories = ({categories}) => {

 

  return (
    <div className=''>
    <h3 className="text-xl font-bold mt-10 px-20 mb-5">All Categories</h3>
    <table className="mt-4 w-full ">
      <thead>
        <tr>
          <th className="px-4 py-2 bg-gray-200 text-gray-700">Name</th>
          <th className="px-4 py-2 bg-gray-200 text-gray-700">Description</th>
          <th className="px-4 py-2 bg-gray-200 text-gray-700">Action</th>
        </tr>
      </thead>
      <tbody>
        {categories.map((category) => (
          <tr key={category._id} className="text-gray-600">
            <td className="border px-4 py-2">{category.name}</td>
            <td className="border px-4 py-2">{category.description}</td>
            <td className="border px-4 py-2 whitespace-nowrap">
              <form action={handleDelete}>
                <input type="hidden" value={JSON.stringify(category._id)} name="_id" className='bg-black'/>
                <input type="submit" value="x" className='bg-red-700 text-white px-3 py-2 rounded'/>
              </form>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  
  )
}

export default Categories