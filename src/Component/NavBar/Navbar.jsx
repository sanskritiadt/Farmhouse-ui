import './NavBar.css';
import {useState} from 'react'
import  logo from "../../assets/Images/farmly.PNG"
import { Link } from "react-router-dom"
import { BiSolidUser} from "react-icons/bi";
import EmailModal from "../EmailModal/EmailModal ";

export default function Navbar() {

  const [showModal, setShowModal] = useState(false);
  return <>
    <nav className="navbar navbar-expand-lg farm-nav  top-0 bg-light"  >
      <div className="container-fluid ">
      <Link className="navbar-brand" to={`/`}><img src={logo} style={{Width:'100px'}}/></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg ms-auto   text-end ">
            <li className="nav-item mr-4">
              <Link className="nav-link active " aria-current="page" to={`/`} >Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link "  to={`/`} >About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/`}  >Contact Us</Link>
            </li>
          </ul>
        </div>
          
          <div> 
           <button className="Login-btn" onClick={() => setShowModal(true)}> <BiSolidUser  size="1.5em" style={{marginRight:'5px'}}/>Login/SignUp</button>
          </div>
          <EmailModal show={showModal} onHide={() => setShowModal(false)} />

      </div>
    </nav>
  </>
}

// import { Link } from "react-router-dom"
// import "../assets/css/style.css"
// import  logo from "../assets/Images/farmly.PNG"


// export default function Navbar() {
//   return <>
//     <nav className="navbar navbar-expand-lg farm-nav">
//       <div className="container-fluid">
//         <Link className="navbar-brand" to={`/`}><img src={logo} /></Link>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon" />
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav ms-auto mb-2 mb-lg  d-flex justify-content-end text-end ">
//             <li className="nav-item mr-4">
//               <Link className="nav-link active" aria-current="page" to={`/`} style={{width:"200px"}} >Home</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" style={{width:"200px"}} >About Us</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" style={{width:"200px"}} >Contact Us</Link>
//             </li>
//           </ul>
//           {/* <form className="d-flex" role="search">
//             <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//             <button className="btn btn-outline-success button" type="submit">Search</button>
//           </form> */}
//         </div>
//       </div>
//     </nav>
   
//   </>
// }