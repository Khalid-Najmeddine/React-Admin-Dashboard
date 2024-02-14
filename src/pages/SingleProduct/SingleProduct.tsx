import Single from "../../components/Single/Single"
import { singleProduct } from "../../data"
import "./SingleProduct.scss"

const SingleProduct = () => {

  //fetch data and send to the Single Product component

  return (
    <div className="single-Product">
      <Single {...singleProduct}/>
    </div>
  )
}

export default SingleProduct