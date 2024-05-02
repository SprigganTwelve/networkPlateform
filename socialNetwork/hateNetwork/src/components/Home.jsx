import { useEffect, useState } from "react";
import Menu from "./menu";
import NavBar from "./navBar";
import SideMenu from "./sideMenu";

    function Home() {
        
    const [inpuText, setInputText] = useState('');
    const [status, setStatus] = useState([])

    function handleInputText (event){
        setInputText(event.target.value)
    }
    function addStatus(){
        setStatus(status=>[...status,inpuText])
    }
    useEffect(()=>{ console.log(status)},[status])

    return ( 
    <div id="Home">
           <Menu />
           <NavBar statusAddBtn={addStatus} changeInputValue={handleInputText}/>
            <div className='firstPage'>
                {
                    status.length > 0 && 
                    status.map((item,index)=>{
                        <div key={index} className="toDo">
                            <div>{item}</div>
                            <div><button>Edit</button><button>Delete</button></div>
                        </div>
                    })
                }

            </div>
            <SideMenu />
    </div> );
}

export default Home;

{/* <h1>Welcome To Hate Social Network</h1>
<div>
    <button className='navButton'>SignUp</button>
    <button  className='navButton'>Login</button>
</div> */}