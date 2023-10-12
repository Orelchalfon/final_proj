/* eslint-disable react/prop-types */
import UserItem from "./UserItem";
import "./UsersItemList.css";
import {  motion } from "framer-motion";

const UsersItemList = ({ users }) => {
  if (users.length === 0) return <div>UsersNotFound</div>;
  const usersList = users.map((user) => {
    return (
      <UserItem
        key={user.id}
        id={user.id}
        name={user.name}
        email={user.email}
        imgUrl={user.imgUrl}
        count={user.count}
      />
    );
  });
  return (
    <motion.ul
      className="users-list"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      {usersList}
    </motion.ul>
  );
};
export default UsersItemList;
