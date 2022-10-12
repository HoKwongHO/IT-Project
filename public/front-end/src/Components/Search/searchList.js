import { React, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import data from "./listDemo.json"
// const data = fetch("http://localhost:3030/all-product").then(res => res.json())
// console.log(data)
function List(props) {
    const [products, setProducts] = useState({
    })
    console.log(products);
    useEffect(() => {
        fetch("http://localhost:3030/all-product")
            .then((res) => res.json())
            .then((jsonRes) => setProducts(jsonRes));
    }, []);    

    //create a new array by filtering the original array
    const filteredData = Array.from(products).filter((el) => {
        //if no input the return the original
        if (props.input === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.name.toLowerCase().includes(props.input)
        }
    })
    console.log(filteredData);
    return (
        <ul>
            {filteredData.map((item) => (
                <li key={item._id}>
                     <Link to={"/"+item._id}>{item.name}</Link>
                </li>
            ))}
        </ul>
    )
}
export default List