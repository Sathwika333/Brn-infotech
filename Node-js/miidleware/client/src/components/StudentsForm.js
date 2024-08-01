import React, { useEffect, useRef, useState } from "react";

function StudentsForm() {
  let genderSelectRef = useRef();
  let addressSelectRef = useRef();
  let countrySelectRef = useRef();
  let limitInputRef = useRef();

  let [students, setStudents] = useState([]);
  let [genders, setGenders] = useState([]);
  let [address, setAddress] = useState([]);
  let [countries, setCountries] = useState([]);
  let [resultCount, setResultCount] = useState(0);

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


  let getStudentsFromServer = async () => {
    let reqOptions = {
      method: "GET",
    };

    let url = `http://localhost:2345/getStudents?gender=${genderSelectRef.current.value}&addres=${addressSelectRef.current.value}&country=${countrySelectRef.current.value}`;
    console.log(url);

    let JSONData = await fetch(url, reqOptions);
    let JSOData = await JSONData.json();
    setStudents(JSOData);
    setResultCount(JSOData.length);
    console.log(JSOData);
  };
  return (
    <div>
      <form>
        <div>
          <label>Gender</label>
          <select ref={genderSelectRef}>
            {genders.map((ele, i) => {
              return <option key={i}>{ele}</option>;
            })}
          </select>
        </div>
        <div>
          <label>Address</label>
          <select ref={addressSelectRef}>
            {address.map((ele, i) => {
              return <option key={i}>{ele}</option>;
            })}
          </select>
        </div>
        <div>
          <label>Country</label>
          <select ref={countrySelectRef}>
            {countries.map((ele, i) => {
              return <option key={i}>{ele}</option>;
            })}
          </select>
        </div>
        <div>
          <label>Order</label>
          <select>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <div>
          <label>limit</label>
          <input ref={limitInputRef} type="number"></input>
        </div>

        <button
          type="button"
          onClick={() => {
            getStudentsFromServer();
          }}
        >
          GET
        </button>
      </form>
      <h3>{resultCount} items found</h3>

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
