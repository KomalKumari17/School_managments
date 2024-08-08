import IconBadge from '@/components/icon-badge';
import CourseModel from '@/models/CourseModel';
import ConnectDb from '@/utils/connectDb'
import { IndianRupee, LayoutDashboard } from 'lucide-react';
import TitleForm from './_components/TitleForm';
import DescriptionForm from './_components/description-form';
import InstructorForm from './_components/instructor';
import FeeForm from './_components/fee-form';
import DurationForm from './_components/duration-form';
import DifficultyForm from './_components/difficulty-form';
import CategoryForm from './_components/category-form';
import CategoryModel from '@/models/CategoryModel';
import PrerequisitesForm from './_components/prerequisites';
import EnrollLimitForm from './_components/enrollLimitForm';
import { Action } from './_components/actions';
import {ImageForm} from './_components/image-form';

const page = async ({params}) => {
    await ConnectDb();
    const course = await CourseModel.findById(params.courseId);
    const categories = await CategoryModel.find();
    const {courseId} = params;

    const requiredFields = [
        course.title,
        course.description,
        course.fee,
        course.instructor,
        course.duration,
        course.category,
        course.difficulty,
        course.prerequisites,
        course.enrollmentLimit,
        course.image,
    ]

    const totalFields = requiredFields.length;
    const completedFields = requiredFields.filter(Boolean).length;
    const completedText = `${completedFields}/${totalFields} completed`

    const isCompleted = requiredFields.every(Boolean);
    const options = [
        {
          label: 'Begginer',
          value: 'Begginer'
        },
        {
          label: 'Intermediate',
          value: 'Intermediate'
        },
        {
          label: 'Advanced',
          value: 'Advanced'
        },
      ]
  return (
    <div className="p-6 mt-16">
        <div className="flex items-center justify-between">
            <div className="flex flex-col gap-y-2">
                <h1 className="text-2xl font-medium mb-3">Course SetUp</h1>
                <span className='text-sm text-gray-600 mb-5'>Complete all fields {completedText}</span>
            </div>
            <Action disabled={!isCompleted} courseId={params.courseId} isPublished={course.status}/>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <div className="flex items-center gap-x-2">
                    <IconBadge icon={LayoutDashboard} />
                    <h2 className="text-xl">
                        Customize your Course
                    </h2>
                </div>
                <TitleForm initialData={course} courseId={courseId}/>
                <DescriptionForm initialData={course} courseId={courseId}/>
                <InstructorForm initialData={course} courseId={courseId}/>
                <CategoryForm initialData={course} courseId={courseId} options={categories.map((cat) => ({
                    label: cat.name,
                    value: cat._id
                }))}/>
                <EnrollLimitForm initialData={course} courseId={courseId}/>
            </div>
            <div>
            <div className="flex items-center gap-x-2">
                    <IconBadge icon={IndianRupee} />
                    <h2 className="text-xl">
                       Sell your Course
                    </h2>
                </div>
                <FeeForm initialData={course} courseId={courseId}/>
                <DurationForm initialData={course} courseId={courseId}/>
                <DifficultyForm initialData={course} courseId={courseId} options={options}/>
                <PrerequisitesForm initialData={course} courseId={courseId}/>
                <ImageForm  initialData={course} courseId={courseId}/>
            </div>
        </div>
    </div>
)
}

export default page