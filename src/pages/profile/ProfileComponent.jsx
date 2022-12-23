import { useRef, useState } from "react";

function ProfileComponent () {
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [email,setEmail] = useState("");
  const firstNameRef = useRef(null);

  const showData = () =>{
    alert(`${firstName} ${lastName} ${email}`);
    alert(firstNameRef.current.value);
  }
    return (
      <div>
        <form name="details">
          <label>First Name</label>
          <input id="firstName" 
          ref={firstNameRef}
          type="text" value={firstName} name="firstName" onChange={(event)=>{setFirstName(event.target.value)}}/>
          <label>Last Name</label>
          <input type="text" name="lastName" onChange={(event)=>{setLastName(event.target.value)}}/>
          <label>Email</label>
          <input type="email" name="email" onChange={(event)=>{setEmail(event.target.value)}}/>
        </form>
        <button onClick={showData}>Submit</button>
      </div>
      
    );
}
export default ProfileComponent;
