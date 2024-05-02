import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
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


    function onKeyDown(event){
        if(event.key == 'Enter'){
            addStatus()
        }
    }

    return (  
        <>
        <div>
            <nav className="NavBar">
                <input  type="text" onKeyDown={onKeyDown} onChange={handleInputText} className="SearchBar" />
                <button onClick={addStatus}> + </button>
            </nav>
            
        <div className='toDoContainer'>
                <div>
                {
                    status.length > 0 && 
                    status.map((item,index)=>(
                        <div key={index} className="toDo">
                            <div>{item}</div>
                            <div><button>Edit</button><button>Delete</button></div>
                        </div>
                    ))
                }
                </div>

            </div>
        </div>

        </>
    );
}

export default Home;