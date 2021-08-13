import './App.css';

const products = [
  { name: "Burger" , price: "99tk" },
  { name: "CocaCola", price: "40tk" },
  { name: "Noodles", price: "120tk" }
]

function App() {
  return (
    <div className="App">
      <Products product={products[0]} />
      <Products product={products[1]} />
      <Products product={products[2]} />
      {/* <Products name={products[1].name} price={products[1].price} />
      <Products name={products[2].name} price={products[2].price} /> */}
    </div>
  );
}

const productStyle = {
  border: "1px solid gray",
  borderRadius: "5px",
  backgroundColor: "lightgray",
  height: "200px",
  width: "200px",
  float: "left",
  marginLeft: "180px",
  marginTop:"80px"
}

function Products(props) {
  return <div style={productStyle}>
    <h1>Hello</h1>
    <h3>Name:{ props.product.name }</h3>
    <h4>Price:{props.product.price}</h4>
    <button>Buy Now</button>
  </div>
}

export default App;
