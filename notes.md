## note for importing data from api to page with axios, no redux

* set a proxy in package.json

* npm install axios

* in all products page
```
import React { useState, useEffect }
import axios from "axios"

const HomePage = () => {

const[products, setProducts] = useState([])

useEffect(() => {
    const fetchProducts = async () => {
       const { data } = await axios.get("/api/products") 

       setProducts(data)
    }
    fetchProducts()
}, [])

...

}
```

## what is different when import one single product(so with dynamic parameter in the url) 

```
const SingleProduct = ({ match }) => {

// the single product is an object instead of an array

const[product, setProduct] = useState({})

//url in backticks to use matching function

useEffect(() => {
    const fetchProduct = async () => {
       const { data } = await axios.get(`/api/products/${match.params.id}`) 

       setProduct(data)
    }
    fetchProduct()
}, [])

...

}
```

