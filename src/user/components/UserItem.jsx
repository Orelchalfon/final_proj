import { Avatar, Card } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "./UserItem.css";
const UserItem = (user) => {
  return (
    //the error message appears to be the animatedTime props
    <motion.li
      className="user-item"
      variants={{
        hidden: { x: -100, y: 100, opacity: 0, scale: 0.35 },
        visible: { x: 0, y: 0, opacity: 1, scale: 1 },
      }}
      transition={{ type: "spring", stiffness: 20 }}
    >
      <Card className="user-item__content">
        <Link to={`/${user.id}/places`}>
          <div className="user-item__img">
            <Avatar
              sx={{ width: 100, height: 100 }}
              src={user.imgUrl}
              alt={user.name}
            />
          </div>
          <div className="user-item__info">
            <h2>{user.name}</h2>
            <h3>
              {user.count} {user.count > 1 ? "places" : "place"}
            </h3>
          </div>
        </Link>
      </Card>
    </motion.li>
  );
};
export default UserItem;
