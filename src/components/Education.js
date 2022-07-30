import '../styles/style.css'

const Education = (props) => {
    let {education, handleEducationChange, addToEducation, deleteLatestEducation} = props;

    return (
        <div>
            <h1>Education</h1>
            <form action="">
                <label htmlFor="school">School</label>
                <input type="text" id="school" value={education.school} onChange={handleEducationChange}/>
                <label htmlFor="city">City</label>
                <input type="text" id="city" value={education.city} onChange={handleEducationChange} />
                <label htmlFor="program">Program</label>
                <input type="text" id="program" value={education.program} onChange={handleEducationChange} />
                <label htmlFor="date">Date(s)</label>
                <input type="text" id="date" value={education.date} onChange={handleEducationChange} />
                <button type="button" onClick={addToEducation}>Add More Education</button>
                <button type="button" onClick={deleteLatestEducation}>Delete latest Education</button>
            </form>
        </div>
    );
}

export default Education;