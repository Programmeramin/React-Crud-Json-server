import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import { Link } from "react-router";
import Swal from "sweetalert2";

const Team = () => {

  const [data, setData ] = useState([]);

      const GetAllTeams = async () =>{
        const teams = await axios.get(`http://localhost:3000/team`);
        
         setData(teams.data)

      };

       const handleDeleteTeam = async (id) =>{


        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
          axios.delete(`http://localhost:3000/team/${id}`)

            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
            GetAllTeams();
          }
        });

      

       } 

      useEffect(() =>{
            GetAllTeams();
      }, [])

  return (
    <>

        
       
      <div className="container m-auto">
           <div className="team-header w-[50%] bg-purple-700 m-auto mt-8 rounded-sm">
               <h1 className="text-center p-3 text-3xl text-white">OUR TEAM MEMBER</h1>
           </div>
           <Link  to="/team-add" className="bg-blue-600 p-2 text-2xl rounded text-white ">Create Team</Link>
            <div className="team-area flex flex-wrap gap-5 w-[100%] m-auto">
 

               {data.length === 0 ? "Not Found Team Member " : data?.map((item, index) => (
                <>
                  <div key={index} className="team-body w-[300px] bg-violet-600 rounded-2xl text-white p-4 mt-5">
               <div className="team-img  rounded-md object-cover ">
                  <img className="rounded-md w-[250px] h-[200px] m-auto" src={item.photo} alt="" />
                 </div>      
                  <div className="team-content align-center p-4">
                    <h1 className="text-2xl">Name : {item.name}</h1>
                     <p className="text-2xl">Age : {item.age}</p>
                      <p className="text-xl">Skill : {item.skill}</p>
                  </div>

                     <button className="ml-5 p-2 w-[100px] bg-red-600 text-2xl rounded-md " onClick={() => handleDeleteTeam(item.id)}>Delete</button>
                     <button className="ml-5 p-2 w-[100px] bg-red-600 text-2xl rounded-md ">Edit</button>

               </div> 
                </>
               ))}

             

              

                

            </div>

      </div>



    </>
  )
}

export default Team

    


// import { useState, useEffect } from 'react';
// const Fetch = () => {
//   const [photos, setPhotos] = useState([]);
//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/photos')
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => {
//         console.log(data);
//         setPhotos(data);
//       });
//   }, []);
//   return (
//     <div className='flex flex-wrap'>

//       {photos.map((photo) => (
//         <img key={photo.id} src={photo.url} alt={photo.title} width={100} />
//       ))}
//     </div>
//   );
// };
// export default Fetch;