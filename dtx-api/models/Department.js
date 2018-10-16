const mongoose = require('mongoose');
const subject = new mongoose.Schema(
  {
    name: String,
    theory: String,
    practical: String
  }
);
const yearsem = new mongoose.Schema(
  {
    year: Number,
    sem: Number,
    subjects:[subject]
  }
);

const employee = new mongoose.Schema(
  {
    info:{firstname: String, lastname: String, dob: String, gender: String, contactnumber: String},
    employeedetails:{doj: String, type: String}
  }
);

const department = new mongoose.Schema(
  {
    information:{name: String, description: String},
    academics:[yearsem],
    technicalstaff:[employee],
    nontechnicalstaff:[employee]
  }
);

module.exports = mongoose.model('department', department);
