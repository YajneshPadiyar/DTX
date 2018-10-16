const mongoose = require('mongoose');


const result = new mongoose.Schema(
  {
    examdetails: {academicyear: String, examname: String, from: String, to: String},
    examresult:[{studentid: String, obtainedmarks: String}]
  }
);

const attendance = new mongoose.Schema(
  {
    conducted_lecture_practical_details: {academicyear: String, conductedby: String, from: String, to: String, lessonnumber: String},
    studentsattendance:[{studentid: String, present: String}]
  }
);

const holiday = new mongoose.Schema(
  {
    name: String,
    date: String
  }
);

const exam = new mongoose.Schema(
  {
    name: String,
    startdate: String,
    enddate: String,
    optional: String
  }
);

const lessonplan = new mongoose.Schema(
  {
    lessonnumber: String,
    lessonname: String,
    plannedhours: String
  }
);

const user = new mongoose.Schema(
  {
      firstname: String,
      lastname: String,
      dob: String,
      gender: String,
      contactnumber: String,
      doj: String,
      type: String
  }
);

const subject = new mongoose.Schema(
  {
    name: String,
    theory: String,
    practical: String,
    year: String,
    sem: String,
    plannedhourse: String,
    attendancedata:[attendance],
    lessonplan:[lessonplan],
    results:[result]
  }
);

const department = new mongoose.Schema(
  {
    name: String,
    subjects:[subject],
  }
);




const academicplanning = new mongoose.Schema(
  {
    exams: [exam],
    publicholidays:[holiday],
  }
);

const institute = new mongoose.Schema(
  {
    name: String,
    departments:[department],
    academicplanning:[academicplanning]
  }
);

const organisation = new mongoose.Schema(
  {
    name: String,
    institutes:[institute],
    employees:[user],
    students:[user]
  }
);

module.exports = mongoose.model('organisation', organisation);
