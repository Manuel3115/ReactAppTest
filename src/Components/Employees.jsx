import { useState } from "react";
import { employeeData } from "../data/employees";

const Employees = () => {
  const locationOptions = ["ANY", "CANADA", "US", "ITALY"];

  const [checker, setChecker] = useState(0);
  const [location, setLocation] = useState("ANY");
  const [employees, setEmployees] = useState(employeeData);

  const Submenu = () => {
    return (
      <div style={{ position: "absolute", zIndex: 200 }}>
        {locationOptions.map((location) => {
          return <><button onMouseEnter={() => setChecker(1)} onMouseLeave={() => setChecker(0)} onClick={() => setLocation(location)} style={{ width: 170 }}> {location} </button><br /></>;
        })}
      </div>
    )
  }

  const CardsEmployees = () => {
    return (
      <div className="row">
        {employees.filter((emp) => { return (location === "ANY" || location === emp.location) }).map(emp =>
          <div className="col-4">
            <div className="card m-2" style={{ cursor: "pointer" }}>
              <img className="rounded card-img-top" src={emp.pic} />
              <div className="card-body">
                <h5 className="card-title"> {emp.fullName} </h5>
                <p className="card-text"> Designation: {emp.designation} <br />  id: {emp.id} <br /> {emp.location} </p>
                <a href="#" className="btn btn-primary"> Contact </a>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
  return (
    <main className="container-fluid">
      <br />
      <button className="rounded" onMouseEnter={() => setChecker(1)} onMouseLeave={() => setChecker(1)} style={{ backgroundColor: "white", color: "black", border: "solid" }}> Filter by Country</button>
      {checker ? <Submenu /> : <></>}
      <br />
      <br />
      <CardsEmployees />
    </main>
  );
};

export default Employees;
