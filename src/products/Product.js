import "./Product.css";
export function Product({ title:productTitle, image, price, count,children }) {
  // console.log(props);
    let title= "Menu card"
  return (
    count && (
      <div>
        <h2>{title}</h2>
        <div className="card">
          <img src={image} alt="productPic" />
          <h1>{productTitle}</h1>
          <p className="price">${price}</p>
            {children}
         
          <p>
            <button>Add to Cart</button>
          </p>
          <p></p>
        </div>
      </div>
    )
  );
}

Product.defaultProps ={
    image:"images/javascript.jpg",price:"0",title:"test"
}
/* (
      <div>
        <h2>{title}</h2>
        <div className="card">
          <img src={image} alt="productPic" />
          <h1>{productTitle}</h1>images/javascript.jpg
          <p className="price">${price}</p>
          <p>smartphoene description is ready to sale 2022,.... </p>
          {children}
          <p>
            <button>Add to Cart</button>
          </p>
          <p></p>
        </div>
      </div>
    ) */
