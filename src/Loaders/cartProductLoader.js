import { getShoppingCart } from "../utilities/fakedb";

const cartProductLoader = async() =>{
    const loadedProduct = await fetch('products.json');
    const products = await loadedProduct.json();

    const storeCart = getShoppingCart();
    const savedCart = []
    for(const id in storeCart){
        const addedProduct = products.find(productData=> productData.id === id)
        if(addedProduct){
            const quantity = storeCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct)
        }
    }

    // console.log(products);
    return savedCart
}

export default cartProductLoader;