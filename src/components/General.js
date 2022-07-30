import '../styles/style.css'

const General = (props) => {
    console.log(props)
    let { handleProfileChange} = props;
    return (
        <div>
            <h1>Personal Information</h1>
            <form action="">
                <label htmlFor="first">First Name</label>
                <input type="text" id="firstName" onChange={handleProfileChange}/>
                <label htmlFor="last">Last Name</label>
                <input type="text" id="lastName" onChange={handleProfileChange} />
                <label htmlFor="address">Address</label>
                <input type="text" id="address" onChange={handleProfileChange} />
                <label htmlFor="phone">Phone number</label>
                <input type="text" id="phone" onChange={handleProfileChange} />
                <label htmlFor="email">Email</label>
                <input type="text" id="email" onChange={handleProfileChange} />
            </form>
        </div>
    );
}

export default General;