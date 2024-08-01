import React, { useState } from 'react'

function StudentsForm() {
    let [students,setStudents]=useState([]);
    let getStudentsFormServer = async()=>{
        let reqOptions={
            method:"GET"
        }
        let JSONData = await fetch("http://localhost:2345/getStudents",reqOptions);
        let JSOData = await JSONData.json();
        setStudents(JSOData);
        console.log(JSOData);
    }
  return (
    <div>
        <form>

        <button type="button" onClick={()=>{
                getStudentsFormServer(); 
            }}>GET</button>
            
            <table>
                    <tr>
                        <th>S.No</th>
                        <th>id</th>
                        <th>Profile Pic</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Address</th>
                        <th>Country</th>
                    </tr>
            
                {students.map((ele,i)=>{
                return <tr>
                    <td>{i+1}</td>
                    <td>{ele.id}</td>
                    <td><img src={ele.profilePic} alt='..'></img></td>
                    <td>{ele.first_name}</td>
                    <td>{ele.last_name}</td>
                    <td>{ele.age}</td>
                    <td>{ele.email}</td>
                    <td>{ele.gender}</td>
                    <td>{ele.addres}</td>
                    <td>{ele.country}</td>
                </tr>

            })}

            </table>
        </form>
    </div>
    
  )
 
}

export default StudentsForm