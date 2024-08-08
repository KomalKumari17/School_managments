import mongoose from "mongoose";

// Define schema for the category
const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default:null
  },
  courses: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course'
  },
 
});

// Create a Category model using the schema
export default mongoose.models.Category || mongoose.model('Category', categorySchema)
