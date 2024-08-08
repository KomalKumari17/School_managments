import Link from "next/link";
import React from "react";

const CourseCard = ({ course }) => {
  return (
    <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="w-full h-48 object-cover object-center" src={`/course_image/${course.image}`} alt={course.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{course.title}</div>
        <p className="text-gray-700 text-base">{course.description}</p>
      </div>
      <div className="px-6 py-4">
        <div className="flex items-center mb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            Instructor: {course.instructor || 'Unknown'}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            Difficulty: {course.difficulty}
          </span>
        </div>
        <div className="flex items-center mb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            Fee: ₹{course.fee || 'Free'}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            Duration: {course.duration || 'Not specified'}
          </span>
        </div>
        <div className="flex items-center">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            Category: {course.category?.name}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            Enrollment Limit: {course.enrollmentLimit}
          </span>
        </div>
      </div>
      <div className="px-6 py-4">
        <div className="text-sm text-gray-600 mb-2">
          <span className="font-semibold">Start Date:</span> {course.startDate ? new Date(course.startDate).toLocaleDateString() : 'Not specified'}
        </div>
        <div className="text-sm text-gray-600 mb-2">
          <span className="font-semibold">Status:</span> {course.status}
        </div>
        <Link href={`/course/${course._id}`} className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-3 rounded-md">Enroll Now</Link>
      </div>
    </div>
  );
};

export default CourseCard;
