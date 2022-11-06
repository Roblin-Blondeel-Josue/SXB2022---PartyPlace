import React from "react";
import { PropTypes } from "prop-types";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import CocktailCard from "./caroussel/CocktailCard";

function CocktailList({ cocktailApiItems, listAlcool }) {
  return (
    <div
      id="Scroll"
      className="Cocktails"
      style={{
        height: "55vh",
        paddingLeft: "1rem",
        backgroundColor: "inherit",
      }}
    >
      <Typography variant="h4">
        <LocalBarIcon style={{ backgrounColor: "inherit" }} />
        Cocktail à savourer
      </Typography>
      <Stack
        style={{
          height: "45vh",
          overflowX: "scroll",
          alignItems: "center",
        }}
        direction="row"
        spacing={1}
      >
        {cocktailApiItems
          .filter((item) => item.strIngredient1.includes(listAlcool))
          .map((item) => {
            // eslint-disable-next-line react/jsx-props-no-spreading
            return <CocktailCard {...item} />;
          })}
      </Stack>
    </div>
  );
}
export default CocktailList;

CocktailList.propTypes = {
  cocktailApiItems: PropTypes.isRequired,
  item: PropTypes.isRequired,
  listAlcool: PropTypes.isRequired,
};
