"use client"
import { handleSubmitCategory } from "@/app/actions";
import toast from "react-hot-toast";

const AddCategory = () => {
    
   const handleSubmit = async (formData) => {
      await handleSubmitCategory(formData); 
      toast.success("category created successfully")
   }

  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Insert Category</h2>
      <form action={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
          <input type="text" name="name" id="name" className="mt-1 text-gray-800 py-1 block w-full shadow-sm sm:text-xl border-gray-300 rounded-md" />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description:</label>
          <input type="text" name="description" id="description" className="mt-1 text-gray-800 py-1 block w-full shadow-sm sm:text-xl border-gray-300 rounded-md" />
        </div>
        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700  ">Add Category</button>
      </form>
    </div>
  );
};

export default AddCategory;
