import { mount as productsMount } from 'products/ProductsIndex'
import { mount as cartMount } from 'cart/CartShow'

console.log('container!')

const myProducts = document.querySelector('#my-products')

if (myProducts) productsMount(myProducts)

const myCart = document.querySelector('#my-cart')

if (myCart) cartMount(myCart)