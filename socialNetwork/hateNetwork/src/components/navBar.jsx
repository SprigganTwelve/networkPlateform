
// eslint-disable-next-line react/prop-types
function NavBar({changeInputValue,statusAddBtn}) {


    function onKeyDown(event){
        if(event.key == 'Enter'){
            statusAddBtn()
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