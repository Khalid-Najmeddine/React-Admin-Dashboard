import Single from "../../components/Single/Single"
import { singleUser } from "../../data"
import "./SingleUser.scss"

const SingleUser = () => {

  //fetch data and send to the Single User component

  return (
    <div className="single-User">
      <Single {...singleUser}/>
    </div>
  )
}

export default SingleUser