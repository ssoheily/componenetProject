
import React from "react"


 
/*1. creste component   */
export default class App extends React.Component {
  render(){
    let allProduct=[
      {id:1 , title:"Chicken" ,image:"images/gallery_1.jpeg", price:40 ,count:4},
      {id:2 , title:"Pommes" ,image:"images/gallery_2.jpeg", price:13 ,count:23},
      {id:3 , title:"Hamburger" ,image:"images/gallery_3.jpeg", price:15 ,count:31},
    ]
    return ( 
      <div>

        <div className="container">
       
        </div>
      </div>  
    )
  }

}

 