import ExpenseItem from './Components/ExpenseItem';
import react, {useState} from "react";

import invisible from "./invisible.png";

function App() {
    const [open, setOpen] = useState(false);

    function button_handler(){
        alert("You have been alerted");
    }



    return(
        <div className="main">
            <div className="title">
                <h1>Hello World!</h1>
            </div>
            <h2> hiii</h2>

            <button onClick={button_handler}>Button</button>
            <div style={{
            }}className="left-div">

            </div>

            <div style={{
                marginLeft: "20%",
            }}className="main-div">
                <input className="search_bar" type="text" placeholder="Search.."></input>

                <div className="menu-container">
                    <div className="menu-trigger" onClick={()=>{setOpen(!open)}}>
                        <img src={invisible}></img>
                    </div>

                    <div className={`dropdown-menu ${open? 'active' : 'inactive'}`}>
                        <h3>Dropdown Menu</h3>
                        <ul>
                            <DropdownItem text={"My Profile"}/>
                            <DropdownItem text={"Scenarios"}/>
                            <DropdownItem text={"History"}/>
                            <DropdownItem text={"Logout"}/>
                        </ul>
                    </div>
                </div>





                <h2><button_press/></h2>
                <p>




                </p>
            </div>



        </div>

    )
}
function DropdownItem(props){
    return(
        <li className="dropdownItem">
            <img></img>
            <a>{props.text}</a>
        </li>
    );
}
export default App;