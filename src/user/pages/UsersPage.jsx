import { useContext } from "react";
import { Paper } from "@mui/material";

import UsersItemList from "../components/UsersItemList";
import { PlaceShareContext } from "../../shared/context/PlaceShareContextProvider";
import { motion } from "framer-motion";

export default function UsersPage() {
  const { users } = useContext(PlaceShareContext);
  return (
    <Paper
      elevation={0}
      sx={{
        backgroundColor: "inherit",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingBlock: "1rem",
      }}
    >
      <motion.div
        initial="hidden"
        animate="visible"
        exit="hidden"
        style={{ width: "100%", height: "100%" }}
      >
        <UsersItemList users={users} />
      </motion.div>
    </Paper>
  );
}
