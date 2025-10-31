
function ProductCard({eachProduct:{name,price,isPurchased}}) {

  return (
    <div className="product-card" >
            <h3>{name}</h3>
            <p>{price}€</p>
            <p>{isPurchased === true ? "✅" : "🟡"}</p>
            <button>Buy</button>
          </div>
  )
}

export default ProductCard
