const Header =()=> {


return (
    <div className="container text-center"> 
         <div className="row"> 
             <h1> REAL ESTATE </h1>
         </div>
        
        <div className="row border border-dark" style={{height:50}}> 
            <div className="col-3"><span className="card"> Home </span></div>  
            <div className="col-3"><span className="card"> Houses </span> </div>
            <div onClick className="col-3"><span className="card"> Brokers </span> </div>
            <div className="col-3"><span className="card"> Contact us </span> </div>  

        </div>
        

    </div>
)

}

export default Header;