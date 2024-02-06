/* eslint-disable react/prop-types */
import PlaceItem from "./PlaceItem";

import { Card } from "@mui/material";

import "./PlaceItemList.css";
import Button from "../../shared/components/UIElements/Button";

const PlaceItemList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card sx={{ padding: ".75rem" }}>
          <h2>No places found. Maybe create one?</h2>
          <Button to="/places/new">Share Place</Button>
        </Card>
      </div>
    );
  }
  return (
    <ul className="place-list">
      {props.items.map((place) => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.imageUrl}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creator}
          coordinates={place.location}
        />
      ))}
    </ul>
  );
};

export default PlaceItemList;
