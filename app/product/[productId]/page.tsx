interface IPrams {
  params?: string
}

const Product = ({params} : {params: IPrams}) => {
  console.log("params", params)
  return ( <div>
    This is a Product
  </div>);
}
 
export default Product;