import { useState } from "react";
function handleClick() {
  alert('You clicked me!');
}
const Employees = () => {
  const [employees, setEmployees] = useState([
    {
      id: 1000,
      fullName: "Bob Jones",
      designation: "Java dev",
      pic: "/src/images/employee1.png",
    },
    {
      id: 2000,
      fullName: "Joe Joestar",
      designation: "Python dev",
      pic: "/src/images/employee1.png",
    },
    {
      id: 3000,
      fullName: "Bob Jonass",
      designation: "Python dev",
      pic: "/src/images/employee1.png",
    },
    {
      id: 4000,
      fullName: "Bob Jones",
      designation: "Java dev",
      pic: "/src/images/employee1.png",
    },
    {
      id: 5000,
      fullName: "Alex Jones",
      designation: "JS dev",
      pic: "/src/images/employee1.png",
    },
    {
      id: 6000,
      fullName: "Joe Nuts",
      designation: "Java dev",
      pic: "/src/images/employee1.png",
    },
    {
      id: 4000,
      fullName: "Bob Jones",
      designation: "Java dev",
      pic: "/src/images/employee1.png",
    },
    {
      id: 4000,
      fullName: "Bob Jones",
      designation: "Java dev",
      pic: "/src/images/employee1.png",
    },
    {
      id: 4000,
      fullName: "Bob Jones",
      designation: "Java dev",
      pic: "/src/images/employee1.png",
    },
    {
      id: 4000,
      fullName: "Bob Jones",
      designation: "Java dev",
      pic: "/src/images/employee1.png",
    },
  ]);

  return (
    <main className="container-fluid">
      <button onClick={handleClick}>Click me</button>


      <div className="row justify-content-md-center">
        {employees.map((emp) => (
          <div className="col-4">
            <div className="card m-2" style={{cursor:"pointer"}}>
              <img className="rounded card-img-top" src={emp.pic} />{" "}
              <div className="card-body">
                <h5 className="card-title"> {emp.fullName} </h5>{" "}
                <p className="card-text"> Designation: {emp.designation} <br/ >  id: {emp.id}</p>
                <a href="#" className="btn btn-primary"> Contact </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Employees;
