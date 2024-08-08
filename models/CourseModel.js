import mongoose from "mongoose";
import CategoryModel from "./CategoryModel";

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: null
  },
  instructor: {
    type: String,
    default: null
  },
  startDate: {
    type: Date
  },
  endDate: {
    type: Date
  },
  difficulty: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced'],
    default: "Beginner"
  },
  fee: {
    type: Number,
    default: null
  },
  enrollmentLimit: {
    type: Number,
    default: 20
  },
  prerequisites: {
    type: String,
    default: null
  },
  duration: {
    type: String,
    default: null
  },
  image:{
    type:String,
    default: null
  },
  category:{
    type:mongoose.Schema.Types.ObjectId,
    ref:CategoryModel,
    default: null
  },
  students: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    default: null
  }],
  status: {
    type: String,
    enum: ['Draft', 'Published', 'Closed'],
    default: 'Draft'
  }
});

export default mongoose.models.Course || mongoose.model('Course', courseSchema);