import ProductCard from "./ProductCard";

function ProductList(props) {

  return (
    <div className="product-list container">
      
      <h2>Product List</h2>

      {/* //* the list of the products will be here */}
      {/* //* it will render a ProductCard for each product in the list */}
      {props.allProducts
      .filter((eachProduct) =>{
        return eachProduct.name.startsWith(props.searchQuery)
      })
      .map((eachProduct, index) => {
        return <ProductCard key={index} eachProduct={eachProduct} index={index}/>
      })}
    </div>
  )
}

export default ProductList
