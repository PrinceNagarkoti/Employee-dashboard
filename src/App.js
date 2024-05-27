import React, { useState, useEffect } from "react";
import "./App.css";
// Array of employee data
const employees = [
  {
    rank: 1,
    name: "Rakesh Sharma",
    designation: "UI/UX Designer",
    hoursWorked: "7(42)",
    changes: "▲ 1.5 hrs",
  },
  {
    rank: 2,
    name: "Ankita Thakur",
    designation: "HR Recruiter",
    hoursWorked: "7(41)",
    changes: "▼ 1.5 hrs",
  },
  {
    rank: 3,
    name: "Sarah Yadav",
    designation: "Product Manager",
    hoursWorked: "7(40)",
    changes: "▲ 1.5 hrs",
  },
  {
    rank: 4,
    name: "Harsha Shivhare",
    designation: "Designer",
    hoursWorked: "7(37)",
    changes: "▲ 1.5 hrs",
  },
  {
    rank: 5,
    name: "Vanhi Rai",
    designation: "Video Editor",
    hoursWorked: "7(37)",
    changes: "▼ 1.5 hrs",
  },
  {
    rank: 6,
    name: "Bhanu Sharma",
    designation: "Business Analyst",
    hoursWorked: "7(32)",
    changes: "▼ 1.5 hrs",
  },
  {
    rank: 7,
    name: "Sunil Yadav",
    designation: "Developer",
    hoursWorked: "7(24)",
    changes: "▲ 1.5 hrs",
  },
  {
    rank: 8,
    name: "Akash Roy",
    designation: "Business Analyst",
    hoursWorked: "7(21)",
    changes: "▼ 1.5 hrs",
  },
  {
    rank: 9,
    name: "Rohit Soni",
    designation: "Developer",
    hoursWorked: "7(20)",
    changes: "▼ 1.5 hrs",
  },
  {
    rank: 10,
    name: "Suraj Chauhan",
    designation: "Developer",
    hoursWorked: "7(18)",
    changes: "▼ 1.5 hrs",
  },
];

function App() {
  // State to hold the Employee of the Month
  const [employeeOfTheMonth, setEmployeeOfTheMonth] = useState({});

  useEffect(() => {
    // Find the employee with rank 1
    const employeeRank1 = employees.find((employee) => employee.rank === 1);
    // Set the employee with rank 1 as the Employee of the Month
    setEmployeeOfTheMonth(employeeRank1);
  }, []);
 
  return (
    <div className="container">
      <div className="header">
      <h1><span class="blue">K</span>ODERS</h1>
      </div>
      <div className="content">
        <div className="dashboard">
          <h2>Employees Activity Dashboard</h2>
          <table>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Designation</th>
                <th>No. of hours worked</th>
                <th
                  className={`changes ${
                    employees[0].changes === "▲ 1.5 hrs"
                      ? "changes positive"
                      : "changes negative"
                  }`}
                >
                  Changes
                </th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.rank}>
                  <td>{employee.rank}</td>
                  <td>{employee.name}</td>
                  <td>{employee.designation}</td>
                  <td>{employee.hoursWorked}</td>
                  <td
                    className={`changes ${
                      employee.changes.includes("▲")
                        ? "changes positive"
                        : "changes negative"
                    }`}
                  >
                    {employee.changes}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="employee-of-the-month">
        <p className="date" >March 30, 2024 <br></br>09:36 AM</p>
          <h2>Employee of the Month</h2>
          <div className="employee-info">
            <img
              src="https://as2.ftcdn.net/v2/jpg/06/18/10/83/1000_F_618108390_AW8cORwuk1369KaPBM3eC6bOqWgCqSXF.jpg"
              alt="Employee of the Month"
            />
          </div>
          <div className="details">
              <h3>{employeeOfTheMonth.name}</h3>
              <p>{employeeOfTheMonth.designation}</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
