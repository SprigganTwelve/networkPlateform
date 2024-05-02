import { useEffect, useState } from "react";



function SideMenu() {
// const []
        const [users, setUsers] = useState([])
        useEffect ((
            ()=>{
                fetch("https://dummyjson.com/users").then((promise)=>  promise.json())
                .then((data)=>{
                    console.log(data.users[0])
                    setUsers(data.users)
                })  
                .catch(()=>{

                })
            }
        ),[])

            return ( 
            <>
                    <ul className="allUsers">
                            {users && users.map((user)=>(
                            <li className="oneUser" key={user.id}>
                                <div className="dot">.</div>
                                <img src={user.image} alt="alt" />
                                <p id="userName">{user.firstName} {user.lastName}</p>
                            </li>
                            ))}
                    </ul>
            </> 
            );

}

export default SideMenu;