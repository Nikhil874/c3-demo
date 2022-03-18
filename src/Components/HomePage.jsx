import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../css/home.css"

export const HomePage = () => {
    let [fetched,setfetched]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8080/products").then((res)=>{
            setfetched(res.data);
        })
      },[]);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          paddingTop: "175px",
        }}
      >
        {/* Iterate over products and show links  */}
        {fetched.map((el) => {
          return <Link to={`/products/${el.id}`}><div><img className="image" src={el.image} alt="" /></div>
          <div>{el.name}</div></Link>;
        })}
      </div>
    </>
  );
};