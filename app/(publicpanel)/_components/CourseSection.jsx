import React from 'react'
import CourseCard from './CourseCard'

const CourseSection = ({courses}) => {
  return (
    <div className="container mx-auto my-5">
        <div className="flex flex-1">
            <h2 className="text-3xl font-bold text-slate-700 mt-5">Courses</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-3">
        {courses.map((course)=>(
            <CourseCard key={course._id} course={course}/>
        ))}
    </div>
    </div>
  )
}

export default CourseSection