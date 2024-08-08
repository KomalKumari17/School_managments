// components/Dashboard.js

import CourseModel from '@/models/CourseModel';
import UserModel from '@/models/UserModel';
import ConnectDb from '@/utils/connectDb';
import React from 'react';
import { DashboardCard } from './DashboardCard';

const Dashboard = async () => {
  await ConnectDb();
  const totalStudents = await UserModel.countDocuments({status:true});
  const totalAdmission = await UserModel.countDocuments({status:false});
  const totalCourses = await CourseModel.countDocuments();
  const totalPayments = await UserModel.countDocuments();

  let countData = [
    {
      name:"Total Students",
      value: totalStudents,
      color:"blue"
    },
    {
      name:"Total Admission",
      value: totalAdmission,
      color:"teal"
    },
    {
      name:"Total  Courses",
      value: totalCourses,
      color:"green"
    },
    {
      name:"Total Payments",
      value: totalPayments,
      color:"yellow"
    },

  ]
  return (
   <div className="flex gap-5 md:flex-row flex-col flex-1 mt-10 mx-10">
    {
        countData.map((card) => <DashboardCard text={card.name} count={card.value} color={card.color} />)
    }
   </div>

  );
};

export default Dashboard;

