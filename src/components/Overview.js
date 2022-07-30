import '../styles/style.css'

const Overview = (props) => {
    let {profile, totalExperience, totalEducation} = props;
    return (
        <div>
            <div>
                <h1>Personal Information</h1>
                <div>{profile.firstName}</div>
                <div>{profile.lastName}</div>
                <div>{profile.address}</div>
                <div>{profile.phone}</div>
                <div>{profile.email}</div>
            </div>
            <div>
                <h1>Experience</h1>
                {totalExperience.map((experience)=>{
                    return (
                        <div>
                            <div>Position: {experience.position}</div>
                            <div>Company: {experience.company}</div>
                            <div>City: {experience.city}</div>
                            <div>From: {experience.from}</div>
                            <div>To: {experience.to}</div>
                        </div>
                    );
                })}
            </div>
            <div>
                <h1>Education</h1>
                {totalEducation.map((education)=>{
                    return (
                        <div>
                            <div>School: {education.school}</div>
                            <div>City: {education.city}</div>
                            <div>Program: {education.program}</div>
                            <div>Date: {education.date}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Overview;