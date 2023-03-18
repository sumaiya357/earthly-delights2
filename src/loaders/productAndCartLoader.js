import { getStoredCart } from "../utilities/fakedb";


export const productAndCartLoaded = async() =>{
     
    const productData = await fetch('http://localhost:5000/products');

    const products  = await productData.json();

    //get  Cart

    const savedCart = getStoredCart();
  // console.log(products)
  const initialCart = []

  for(const id in savedCart) {
     const addedProduct = products.find(product => product._id === id);
    //  console.log(id, addedProduct)

    if(addedProduct){
       const quantity = savedCart[id]
      //  console.log(id, quantity)

      addedProduct.quantity = quantity;
      initialCart.push(addedProduct)
    }
  }

    return{ products: products, initialCart: initialCart};
}