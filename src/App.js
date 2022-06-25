
import React from "react"
import "./App.css"
import { Product } from "./products/Product"
import Header from "./header/Header"
 
/*1. creste component   */
export default function App() {
  let allProduct=[
    {id:1 , title:"Chicken" ,image:"images/gallery_1.jpeg", price:40 ,count:4},
    {id:2 , title:"Pommes" ,image:"images/gallery_2.jpeg", price:13 ,count:23},
    {id:3 , title:"Hamburger" ,image:"images/gallery_3.jpeg", price:15 ,count:31},
  ]
  return ( 
    <div>
      <Header></Header>
      <div className="container">
          <Product {...allProduct[0]}> <p>smartphoene description is ready to sale 2022,.... </p></Product>
          <Product {...allProduct[1]}> <p>smartphoene description is ready to sale 2022,.... </p></Product>
          <Product {...allProduct[2]}> <p>smartphoene description is ready to sale 2022,.... </p></Product>
      </div>
    </div>
 
    
  )
}

 