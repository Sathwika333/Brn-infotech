// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Details about a student</h1>
      <img src="https://cdnimages.myclassboard.com/Website-2022/Erp/Student-information-system/SISBanner768x728.svg" alt="student information"></img>
     <form>
        <fieldset>
            <legend>Personal Details</legend>
        <div>
            <label>prefix:</label>
            <select>
                <option>Ms.</option>
                <option>Mr.</option>
                <option>Mrs.</option>
            </select>
        </div>
        <div>
            <label for="name"> First Name:</label>
            <input type="text" id="name" placeholder="enter first name"></input>
        </div>
        <div>
            <label for="middle"> Middle Name:</label>
            <input type="text" id="middle" placeholder="enter middle name"></input>
        </div>
        <div>
            <label for="last"> Last Name:</label>
            <input type="text" id="last" placeholder="enter last name"></input>
        </div>
        <div>
            <label for="father"> Father Name:</label>
            <input type="text" id="father" placeholder="enter father's name"></input>
        </div>
        <div>
            <label for="mother"> Mother Name:</label>
            <input type="text" id="mother" placeholder="enter mother's name"></input>
        </div>
        <div>
            <label for="dob">Birth Date:</label>
            <input type="date" id="dob"></input>
        </div>
        <div>
            <label for="email">Email:</label>
            <input type="email" id="email" placeholder="enter email"></input>
        </div>
        <div>
            <label>Gender:</label>
            <label for="male">Male</label>
            <input type="radio" name="gender" id="male" value="male"></input>
            <label for="female" selected>Female</label>
            <input type="radio"  name="gender" id="female" value="female" checked></input>
        </div>
        <div>
            <label for="Nationality">Nationality:</label>
            <input type="text" id="Nationality"></input>
        </div>
        <div>
            <label for="Religion">Religion:</label>
            <input type="text" id="Religion"></input>
        </div>
        <div>
            <label for="mn">Mobile No:</label>
            <input type="number" id="mn"></input>
        </div>
        <div>
            <label for="mt">Mother Tongue:</label>
            <input type="text" id="mt"></input>
        </div>
        <div>
            <label>Profile picture:</label>
            <button type="file">Browse</button>No file selected.
        </div>
    </fieldset>

    <fieldset>
        <legend>Education Details</legend>
        <div>
        <label>School:</label>
        <input type="text" list="school"></input>
        <datalist id="school">
        <select>
            <option>Gautami modal school</option>
            <option> sri krshina veni talent school</option>
            <option>Madrasa Noor Ul Uloom.</option>
            <option>Shree Netaji Gurudev Gurukul.</option>
            <option>New Nalanda High School.</option> 
            <option>St Mary's High School.</option>
            <option>St Mark's High School.</option>
            <option>Sri Krishnaveni Concept School.</option>
        </select>
        </datalist>
        </div>
        <div>
        <label>High school:</label>
        <select>
            <option>sri chaitanya junior college</option>
            <option>sri gayatri junior college</option>
            <option>Narayana junior college</option>
            <option>Aadhya Group Of Institutions.</option>
            <option>Gandikota Management Academy.</option>
            <option>Sri Vaibhav College.</option>
            <option>Jahnavi Group Of Institutions.</option>
            <option>Ignite Junior College.</option>
            <option>Sri Aadya Junior College.</option> 
            <option>Iqbalia Junior College.</option>
            <option>Ignite IIT and Medical Academy.</option>
        </select>
        </div>
        <div>
        <label>College:</label>
        <select>
            <optgroup label="Telangana">
                <option>BVRIT Hyderabad - BVRIT Hyderabad College of Engineering for Womens</option>
                <option>BITS Hyderabad - BITS Pilani- Hyderabad Campus, Hyderabad</option>
                <option>BIET Ibrahimpatnam - Bharat Institute of Engineering and Technology</option>
                <option>Anurag University - Anurag University, Hyderabad</option>
                <option>CBIT Hyderabad - Chaitanya Bharathi Institute of Technology, Hyderabad</option>
                <option>GNITC Hyderabad - Guru Nanak Institutions Technical Campus</option>
                <option> IARE Hyderabad - Institute of Aeronautical Engineering, Dundigal</option>
                <option>ICFAI Tech- International Institute of Information Technology, Hyderabad</option>
                <option>KMIT Hyderabad - Keshav Memorial Institute of Technology, Hyderabad</option>
                <option>MGIT Hyderabad - Mahatma Gandhi Institute of Technology, Hyderabad</option>
                <option>MLRIT Dundigal - MLR Institute of Technology, Dundigal</option>
                <option>NGIT Uppal - Neil Gogte Institute of Technology, Hyderabad</option>
                <option>Anurag University - Anurag University, Hyderabad</option>
                <option>VJIT Hyderabad - Vidya Jyothi Institute of Technology, Hyderabad</option>
                <option> Sri indu institute of engineering and technology</option>
                <option>siddaratha institute of engineering and technolgy</option>
            </optgroup>
            <optgroup label="Andhra pradesh">
                <option>ANUCET Guntur - ANU College of Engineering and Technology, Guntur</option>
                <option>BEC Bapatla - Bapatla Engineering College, Bapatla</option>
                <option>AITAM Tekkali - Aditya Institute of Technology and Management, Tekkali</option>
                <option>BWEC Bapatla - Bapatla Women's Engineering College, Bapatla</option>
                <option>BITS VIZAG - Baba Institute of Technology and Sciences, Visakhapatnam</option>
                <option>BWEC Bapatla - Bapatla Women's Engineering College, Bapatla</option>
                <option>CEC Chirala - Chirala Engineering College, Chirala</option>
                <option>CIET Guntur - Chalapathi Institute of Engineering and Technology, Guntur</option>
                <option>CREC Tirupati - Chadalawada Ramanamma Engineering College, Tirupati</option>
                <option>GMRIT Rajam - GMR Institute of Technology, Rajam</option>
                <option>GITAM Institute of Technology, Visakhapatnam (GITAM University)</option>
                <option>IIT Tirupati - Indian Institute of Technology Tirupati</option>
            </optgroup>
            <optgroup label="Karnataka">
                <option> Ramaiah Institute of Technology.</option> 
                <option>RV College of Engineering.</option>
                <option>New Horizon College of Engineering.</option>
                <option>Dayanand Sagar College of Engineering.</option>
                <option>Nitte Meenakshi Institute of Technology.</option>
                <option>School of Engineering and Technology, Jain University.</option>
                <option>REVA University.</option>
            </optgroup>
        </select>
    </div>
    </fieldset>
    <div>
        <button>Submit</button>
    </div>
    </form>
    </div>
  );
}

export default App;
