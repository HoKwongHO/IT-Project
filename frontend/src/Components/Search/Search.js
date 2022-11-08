import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import List from "./searchList";
import "./Search.css";
import Header from "../../Components/Header";
// import CardList from './Components/CarList/CardList';


function Search() {

    
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
      //convert input text to lower case
      var lowerCase = e.target.value.toLowerCase();
      setInputText(lowerCase);
    };
  
    return (
      <div className="main">
        <Header></Header>
        <h1>React Search</h1>
        <div className="search">
          <TextField
            id="outlined-basic"
            onChange={inputHandler}
            variant="outlined"
            fullWidth
            label="Search"
          />
        </div>
        <div className="CardList">
        <List input={inputText}/>
        </div>
      </div>
    );
}

export default Search;