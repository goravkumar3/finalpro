import {createContext} from 'react'
// import {useNavigate} from 'react-router-dom'
// import axios from "axios";
export const myContext=createContext()

const Context = ({children}) => {
  // let Location=useNavigate()
    const register=async(fullname,email,password)=>{
          try {
            const res=await fetch("http://localhost:3000/api/register",{
                  method:"POST",
                  headers: { "Content-Type": "application/json" },
                  body:JSON.stringify({fullname,email,password})
                })
                const data=await res.json()
                console.log(data)
                localStorage.setItem("token",data.token)
                Location("/login")
          } catch (error) {
             console.error(error)
          }
        // axios
        // .post("http://localhost:3000/api/register",{fullname,email,password},{
        //   headers: { "Content-Type": "application/json" },
        // })
        // .then((res) => {
        //   console.log(res.data);    
        //   console.log("Data uplaoded");
        // })
        // .catch((err) => console.log(err));
    }
  return (
    <myContext.Provider value={{register}}>
       {children}
    </myContext.Provider>
  )
}

export default Context