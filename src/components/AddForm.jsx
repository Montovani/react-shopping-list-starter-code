import { useState } from "react"

function AddForm(props) {

  const [nameValue,setNameValue] = useState("")
  const [priceValue,setPriceValue] = useState(0)

  const handleNameChange = (e) => {
      setNameValue(e.target.value)
  }

  const handlePriceChange = (e) => setPriceValue(e.target.value)

  const handleAddProduct = (e) => {
    e.preventDefault() // will prevent any default behaviour
    
    // if(!nameValue || !priceValue){
    //   return
    // }

    // 1 - gather all the infor
    const newProduct = {
      name: nameValue,
      price: priceValue,
      isPurchase: false
    }
    // 2 - add the new product to the state
    const clone = [...props.allProducts]
    clone.push(newProduct)
    props.setAllProducts(clone)

    // 3 - Clear the inputs
    setNameValue("")
    setPriceValue(0)
  }

  return (
    <div className="add-form container">
      
      <h2>Add Form</h2>

      <form>

        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" onChange={handleNameChange} value={nameValue}/>
        </div>

        <div>
          <label htmlFor="price">Price: </label>
          <input type="number" name="price" onChange={handlePriceChange} value={priceValue}/>
        </div>

        <button onClick={handleAddProduct}>Add</button>

      </form>

    </div>
  )
}

export default AddForm
