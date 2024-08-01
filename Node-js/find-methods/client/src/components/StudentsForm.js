import React, { useEffect, useState } from "react";

function StudentsForm() {
  let [students, setStudents] = useState([]);
  let [genders, setGenders] = useState([]);
  let [address, setAddress] = useState([]);
  let [countries, setCountries] = useState([]);

  useEffect(() => {
    getGendersList();
    getAddressList();
    getCountriesList();
  }, []);

  let getGendersList = async () => {
    let JSONData = await fetch("http://localhost:2345/getGenders", {
      method: "GET",
    });
    let JSOData = await JSONData.json();
    setGenders(JSOData);
    console.log(JSOData);
  };

  let getAddressList = async () => {
    let JSONData = await fetch("http://localhost:2345/getAddress", {
      method: "GET",
    });
    let JSOData = await JSONData.json();
    setAddress(JSOData);
    console.log(JSOData);
  };

  let getCountriesList = async () => {
    let JSONData = await fetch("http://localhost:2345/getCountry", {
      method: "GET",
    });
    let JSOData = await JSONData.json();
    setCountries(JSOData);
    console.log(JSOData);
  };

  let getStudentsFormServer = async () => {
    let reqOptions = {
      method: "GET",
    };
    let JSONData = await fetch("http://localhost:2345/getStudents", reqOptions);
    let JSOData = await JSONData.json();
    setStudents(JSOData);
    console.log(JSOData);
  };
  return (
    <div>
      <form>
        <div>
          <label>Gender</label>
          <select>
            {genders.map((ele, i) => {
              return <option key={i}>{ele}</option>;
            })}
          </select>
          <label>Address</label>
          <select>
            {address.map((ele, i) => {
              return <option key={i}>{ele}</option>;
            })}
          </select>
          <label>Country</label>
          <select>
            {countries.map((ele, i) => {
              return <option key={i}>{ele}</option>;
            })}
          </select>
        </div>

        <button
          type="button"
          onClick={() => {
            getStudentsFormServer();
          }}
        >
          GET
        </button>
      </form>

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

        {students.map((ele, i) => {
          return (
            <tr>
              <td>{i + 1}</td>
              <td>{ele.id}</td>
              <td>
                <img src={ele.profilePic} alt=".."></img>
              </td>
              <td>{ele.first_name}</td>
              <td>{ele.last_name}</td>
              <td>{ele.age}</td>
              <td>{ele.email}</td>
              <td>{ele.gender}</td>
              <td>{ele.addres}</td>
              <td>{ele.country}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default StudentsForm;
