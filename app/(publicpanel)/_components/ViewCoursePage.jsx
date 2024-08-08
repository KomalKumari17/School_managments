
const ViewCoursePage = ({ course }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <img className="w-full h-64 object-cover object-center" src={`/course_image/${course.image}`} alt={course.title} />
        <div className="px-6 py-4">
          <div className="font-bold text-3xl mb-2">{course.title}</div>
          <div className="flex items-center text-gray-700 mb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2">Instructor: {course.instructor || 'Unknown'}</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold">Difficulty: {course.difficulty}</span>
          </div>
          <p className="text-gray-700 text-lg mb-4">{course.description}</p>
          <div className="flex items-center mb-4">
            <span className="inline-block bg-gray-500 rounded-full px-3 py-1 text-sm font-semibold mr-2">Fee: ₹{course.fee || 'Free'}</span>
            <span className="inline-block bg-gray-500 rounded-full px-3 py-1 text-sm font-semibold mr-2">Duration: {course.duration || 'Not specified'}</span>
            <span className="inline-block bg-gray-500 rounded-full px-3 py-1 text-sm font-semibold">Enrollment Limit: {course.enrollmentLimit}</span>
          </div>
          <div className="text-sm text-gray-600 mb-4">
            <span className="font-semibold">Start Date:</span> {course.startDate ? new Date(course.startDate).toLocaleDateString() : 'Not specified'}
          </div>
          <div className="text-sm text-gray-600 mb-4">
            <span className="font-semibold">Status:</span> {course.status}
          </div>
          <div className="text-sm text-gray-600">
            <span className="font-semibold">Category: {course.category.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCoursePage;
