import "./TopBox.scss"
import {topDealUsers} from "../../data.ts"

const TopBox = () => {
  return (
    <div className="top-Box">
      <h2>Top Deals</h2>
      <div className="list">
        {topDealUsers.map((user) => (
          <div className="list-Item" key={user.id}>
            <div className="user">
              <img src={user.img} alt="" />
              <div className="user-Texts">
                <span className="username">{user.username}</span>
                <span className="email">{user.email}</span>
              </div>
            </div>
            <span className="amount">${user.amount}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopBox