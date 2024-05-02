
// eslint-disable-next-line react/prop-types
function NavBar({changeInputValue,statusAddBtn}) {


    function onKeyDown(event){
        console.log(event)
        if(event.key == 'Enter'){
            changeInputValue(event)
        }
    }

    return (  
        <>
        <nav className="NavBar">
            <input  type="text" onKeyDown={onKeyDown} onChange={changeInputValue} className="SearchBar" />
            <button onClick={statusAddBtn}> + </button>
        </nav>
        </>
    );
}

export default NavBar;