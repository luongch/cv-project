import '../styles/style.css'

const Experience = (props) => {
    let {experience, handleExperienceChange, addToExperience, deleteLatestExperience} = props;
    return (
        <div>
            <h1>Experience</h1>
            <form action="">
                <label htmlFor="position">Position</label>
                <input type="text" id="position" value={experience.position} onChange={handleExperienceChange}/>
                <label htmlFor="company">Company</label>
                <input type="text" id="company" value={experience.company} onChange={handleExperienceChange}/>
                <label htmlFor="city">City</label>
                <input type="text" id="city" value={experience.city} onChange={handleExperienceChange}/>
                <label htmlFor="from">From</label>
                <input type="text" id="from" value={experience.from} onChange={handleExperienceChange}/>
                <label htmlFor="to">To</label>
                <input type="text" id="to" value={experience.to} onChange={handleExperienceChange}/>
                <button type="button" onClick={addToExperience}>Add Another Experience</button>
                <button type="button" onClick={deleteLatestExperience}>Delete latest Experience</button>
            </form>
        </div>
    );
}

export default Experience;