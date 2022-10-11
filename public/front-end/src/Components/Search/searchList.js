import { React, useEffect, useState } from 'react'
import data from "./listDemo.json"
// const data = fetch("http://localhost:3030/all-product").then(res => res.json())
// console.log(data)
function List(props) {
    const [products, setProducts] = useState({
    })

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
    return (
        <ul>
            {filteredData.map((item) => (
                <li key={item._id}>{item.name}</li>
            ))}
        </ul>
    )
}
export default List