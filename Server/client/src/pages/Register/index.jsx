import { useState ,useContext} from "react";
import { myContext } from "../../helper/Context";
const Register = () => {
  const {register}=useContext(myContext)
  const [fullName,setFullname]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const registerHandler=(e)=>{
    e.preventDefault()
     register(fullName,email,password)
  }
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-md-6 m-5">
          <div className="mb-3">
            <label htmlFor="exampleInputName1" className="form-label">
              Full name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName1"
              aria-describedby="emailHelp"
              onChange={(e)=>setFullname(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <button type="button" className="btn btn-primary mb-5" onClick={registerHandler}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
