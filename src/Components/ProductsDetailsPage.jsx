import { useParams,Navigate,Link} from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
import { NotFoundPage } from "./NotFoundPage";


export const ProductsDetailsPage = () => {
    const [product,setProduct]=useState({
      id:"",
      details:[],
      name:"",
      price:"",
      image:""

    });
    const [notfound,setNotfound]=useState(false);
    const {id}=useParams();
    // console.log(id);
    useEffect(()=>{
    getData();
    },[]);
      // console.log(product)
    // let productData=product.details;


    function getData(){
    
         axios.get(`http://localhost:8080/products/${id}`).then((res)=>{
          setProduct(res.data);
         })
        // let data=await res.json();
       
      .catch((e)=>{
      setNotfound(true);
      })
        
      
      }
    
    return (
      <>
        <div
          style={{
            display: "flex",
            paddingTop: "50px",
            justifyContent: "center",
            textAlign: "left",
          }}
        >
          {notfound? <Navigate to={"/notfound"}/> :
          <>
               <img src={""} alt="" />
               <div className="productDetails" style={{ padding: "20px" }}>
                 <div>
                   <h2 className="productName">{product.name}</h2>
                   <h5 className="productPrice">Price :{product.price} </h5>
                 </div>
                 <h5>Specifications : </h5>
                 
                
                 <div style={{ width: "700px", paddingLeft: "30px" }}></div>
                    {product.details.map((e)=>{
                     return <p>{e}</p>
                    })}
                 
               </div>
               </> }
     
        </div>
      </>
    );
  };