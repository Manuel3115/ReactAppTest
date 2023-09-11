import { useState } from "react";

const Employees = () => {
  const [checker, setChecker] = useState(0);
  const [location, setLocation] = useState("CANADAUSAITALY");
  const UpdateThing = () => { setChecker(1); }
  const DeUpdateThing = () => { setChecker(0); }
  const updateLocationToNone = () => { setLocation("CANADAUSAITALY") }
  const updateLocationToCanada = () => { setLocation("CANADA") }
  const updateLocationToUS = () => { setLocation("US") }
  const updateLocationToItaly = () => { setLocation("ITALY") }


  const [employees, setEmployees] = useState([
    {
      id: 1000,
      fullName: "Irelia Joestar",
      designation: "Java dev",
      pic: "/src/images/employee1.png",
      location: "US"
    },
    {
      id: 2000,
      fullName: "Johnny Joestar",
      designation: "Python dev",
      pic: "/src/images/employee1.png",
      location: "CANADA"

    },
    {
      id: 3000,
      fullName: "Jeffrey Jones",
      designation: "Python dev",
      pic: "/src/images/employee1.png",
      location: "US"

    },
    {
      id: 4000,
      fullName: "Bob Jones",
      designation: "Java dev",
      pic: "/src/images/employee1.png",
      location: "ITALY"

    },
    {
      id: 5000,
      fullName: "Alex Jones",
      designation: "JS dev",
      pic: "/src/images/employee1.png",
      location: "ITALY"

    },
    {
      id: 6000,
      fullName: "John Doe",
      designation: "Java dev",
      pic: "/src/images/employee1.png",
      location: "ITALY"

    },
    {
      id: 4000,
      fullName: "Bob Joestar",
      designation: "Java dev",
      pic: "/src/images/employee1.png",
      location: "CANADA"

    },
    {
      id: 4000,
      fullName: "Denny Jones",
      designation: "Java dev",
      pic: "/src/images/employee1.png",
      location: "CANADA"

    },
    {
      id: 4000,
      fullName: "Anthony Jones",
      designation: "Java dev",
      pic: "/src/images/employee1.png",
      location: "US"

    },
    {
      id: 4000,
      fullName: "Amanda Joestar",
      designation: "Java dev",
      pic: "/src/images/employee1.png",
      location: "CANADA"

    },
  ]);
  const Submenu = () => {
    return (
      <div style={{ position: "absolute", zIndex: 200 }}>
        <button onMouseEnter={UpdateThing} onMouseLeave={DeUpdateThing} onClick={updateLocationToNone} style={{ width: 170 }}> NONE </button> <br />
          <button onMouseEnter={UpdateThing} onMouseLeave={DeUpdateThing} onClick={updateLocationToCanada} style={{ width: 170 }}> CANADA </button> <br />
          <button onMouseEnter={UpdateThing} onMouseLeave={DeUpdateThing} onClick={updateLocationToUS} style={{ width: 170 }}> US </button> <br />
          <button onMouseEnter={UpdateThing} onMouseLeave={DeUpdateThing} onClick={updateLocationToItaly} style={{ width: 170 }}> ITALY </button> <br />
      </div>
    )
  }




  const CardsEmployees = () => {

    return (
      <div className="row">
        {employees.map((emp) => (
          <>
          {location.includes(emp.location) ?
          <div className="col-4"> 
            <div className="card m-2" style={{ cursor: "pointer" }}>
              <img className="rounded card-img-top" src={emp.pic} />
              <div className="card-body">
                <h5 className="card-title"> {emp.fullName} </h5>
                <p className="card-text"> Designation: {emp.designation} <br />  id: {emp.id} <br /> {emp.location} </p>
                <a href="#" className="btn btn-primary"> Contact </a>
              </div>
            </div> </div>: <></>}
          </>
        ))
        }
      </div>
    )
  }
  return (
    <main className="container-fluid">
      <br />
      <button className="rounded" onMouseEnter={UpdateThing} onMouseLeave={DeUpdateThing} style={{ backgroundColor: "white", color: "black", border: "solid" }}> Sort by Country</button>
      {checker ? <Submenu /> : <></>}
      <br />
      <br />
      <CardsEmployees />
    </main>
  );
};

export default Employees;
