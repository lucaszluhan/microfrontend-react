import { mount } from 'products/ProductsIndex'
import 'cart/CartShow'

console.log('container!')

const myProducts = document.querySelector('#my-products')

if (myProducts) mount(myProducts)