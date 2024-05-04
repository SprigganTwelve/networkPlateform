import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
function Home() {

    const [inpuText, setInputText] = useState('');
    const [status, setStatus] = useState([])
    useEffect(()=>{ console.log(status)},[status])

    function handleInputText (event){
        setInputText(event.target.value)
    }
    function addStatus(){
        setStatus(status=>[...status,inpuText])
    }



    function onKeyDown(event){
        if(event.key == 'Enter'){
            addStatus()
        }
    }

    function edit(event,){
        console.log(event)
    }

    return (  
        <>
        <div className="container">
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
                            <div><button onClick={edit}>Edit</button><button>Delete</button></div>
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