import Experience from "./components/Experience";
import General from "./components/General";
import Education from "./components/Education";
import Overview from "./components/Overview";
import './styles/app.css'
import React, {useEffect, useState} from "react"

function App() {
  let educationBase = {
    school: "",
    city: "",
    program: "",
    date: ""
  }
  let experienceBase = {
    position: "",
    company: "",
    city: "",
    from: "",
    to: ""
  }
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
    email: ""
  });
  const handleProfileChange = (event) => {
    let current = {...profile};
    current[event.target.id] = event.target.value;

    setProfile(current);
  };

  const [experience, setExperience] = useState({
    ...experienceBase
  });
  const [totalExperience, setTotalExperience] = useState([])

  const handleExperienceChange = (event) => {
    let current = {...experience};
    current[event.target.id] = event.target.value;

    setExperience(current);
  };

  const addToExperience = () => {
    let current = [...totalExperience]
    current.push(experience);
    setTotalExperience(current);
    resetExperience();
  }
  
  const deleteLatestExperience = () => {
    if(totalExperience.length > 0) {
      let current = [...totalExperience];
      current.pop();
      setTotalExperience(current);
    }
    resetExperience();    
  }

  const resetExperience = () => {
    setExperience({
      ...experienceBase
    })
  }

  const [education, setEducation] = useState({
    ...educationBase
  });
  const [totalEducation, setTotalEducation] = useState([])
  const handleEducationChange = (event) => {
    let current = {...education};
    current[event.target.id] = event.target.value;

    setEducation(current);
  };

  const addToEducation = () => {
    let current = [...totalEducation]
    current.push(education);
    setTotalEducation(current);
    resetEducation();
  }
  const resetEducation = () => {
    setEducation({
      ...educationBase
    })
  }

  const deleteLatestEducation = () => {
    if(totalEducation.length > 0) {
      let current = [...totalEducation];
      current.pop();
      setTotalEducation(current);
    }
    resetEducation();    
  }


  return (
   <div className="app">
    <div className="generator">
      <General handleProfileChange={handleProfileChange}></General>
      <Experience experience={experience} handleExperienceChange={handleExperienceChange} addToExperience={addToExperience} deleteLatestExperience={deleteLatestExperience}></Experience>
      <Education education={education} handleEducationChange={handleEducationChange} addToEducation={addToEducation} deleteLatestEducation={deleteLatestEducation}></Education>
    </div>
    <div className="overview">
      <Overview profile={profile} totalExperience={totalExperience} totalEducation={totalEducation}></Overview>
    </div>
   </div>
  );
}

export default App;
