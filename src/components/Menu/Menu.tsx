import "./Menu.scss"
import { Link } from 'react-router-dom';
import {menu} from "../../data"

const Menu = () => {
  return (
    <div className="menu">
     { menu.map((item) => (
      <div className="item" key={item.id}>
          <span className="title">{item.title}</span>
          {item.listItems.map((listItem) => (
            <Link to={listItem.url} className="list-Item" key={listItem.id}>
              <img src={listItem.icon} alt="" />
              <span className="list-Item-Title">{listItem.title}</span>
            </Link>
          ))}
        </div>
        ))}
    </div>
  );
};

export default Menu