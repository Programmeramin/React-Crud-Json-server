import axios from "axios";
import { useState } from "react"

const TeamAdd = () => {

    const [input, setInput] = useState({
      name : "",
      age : "",
      skill : "",
      photo : "",
    });

    console.log(input);
    

    const handleChange = (e) =>{

    setInput((prev) =>({
      ...prev,
      [e.target.name] : e.target.value,
    }))

    }

    const handleCreateTeam = async (e) =>{
         e.preventDefault();

          await axios.post(`http://localhost:3000/team`, input);

         setInput({
          name : "",
          age : "",
          skill : "",
          photo : "",
         })

    }

         
  return (
    <>
      
      <div className="container">
      <div className="team-header w-[50%] bg-purple-700 m-auto mt-8 rounded-sm mb-10">
               <h1 className="text-center p-3 text-3xl text-white">CREATE TEAM</h1>
           </div>

          <div className="creat-body w-[500px] m-auto">
            <form className="flex-col gap-2" onSubmit={handleCreateTeam}>
                <div className="py-2 text-xl">
                <label>Enter Your Name</label>
                 <br />
                 <input className="p-1 w-[250px] border-collapse" type="text"  placeholder="Name" name="name" value={input.name} onChange={handleChange}/>
                </div>
                <div className="py-2 text-xl">
                <label>Enter Your Age</label>
                 <br />
                 <input className="p-1 w-[250px]" type="text"  placeholder="Age" name="age" value={input.age} onChange={handleChange}/>
                </div>
                <div className="py-2 text-xl">
                <label>Enter Your Skill</label>
                 <br />
                 <input className="p-1 w-[250px]" type="text"  placeholder="Skill" name="skill" value={input.skill} onChange={handleChange}/>
                </div>
                <div className="py-2 text-xl">
                <label>Enter Your Photo</label>
                 <br />
                 <input className="p-1 w-[250px]" type="text"  placeholder="Photo" name="photo" value={input.photo} onChange={handleChange}/>
                </div>
                <button type="submit" className="p-1 px-5 text-white bg-violet-600 rounded-sm text-2xl">Submit</button>
              </form>
          </div>
          

      </div>

    </>
  )
}

export default TeamAdd
