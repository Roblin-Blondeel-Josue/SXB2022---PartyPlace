/* eslint-disable prefer-const */
/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { Box, Button, Stack, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import logo from "./Logoheaderlight.png";
import formCountries from "../data/formCountries.json";
import Afrique from "./Home/Afrique";
import AmeriqueNord from "./Home/AmeriqueNord";
import AmeriqueLatine from "./Home/AmeriqueLatine";
import Asie from "./Home/Asie";
import Europe from "./Home/Europe";
import Menuburger from "./MenuBurger";
import Footer from "./Footer";
import ToTopScroll from "./ToTopScroll";
import continents from "../data/continents.json";

export default function Home() {
  const [country, setCountry] = useState(" ");

  const navigate = useNavigate();
  const userName = JSON.parse(localStorage.getItem("user"));

  const handleSubmitCountry = (e) => {
    let country = e.target.outerText;
    localStorage.setItem("country", JSON.stringify(country));
    navigate("/details");
  };
  const handleSubmitForm = () => {
    localStorage.setItem("country", JSON.stringify(country));
    navigate("/details");
  };

  return (
    <div
      className="Details-Page"
      id="to-top"
      style={{
        background: "linear-gradient(to right, #FFF5EC 85%, #D9C46B 15%)",
      }}
    >
      <Stack width={{ xs: "83vw", sm: "100vw" }} paddingBottom="1rem">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Menuburger />
          <Link to="/">
            <img
              src={logo}
              alt="Party Place Logo"
              style={{ maxWidth: "85%" }}
            />
          </Link>
        </div>
        <Typography
          variant="h4"
          sx={{
            color: "secondary.main",
          }}
          style={{
            margin: "1rem",
          }}
          id="username"
        >
          Salut {userName.toUpperCase()} !
        </Typography>
        <Typography
          variant="h4"
          sx={{ color: "secondary.main" }}
          style={{
            marginTop: "1rem",
            marginBottom: "2rem",
            marginLeft: "1rem",
            width: "80vw",
          }}
          id="programme"
        >
          Où Allons Nous Ce Soir ?
        </Typography>
        <Autocomplete
          inputValue={country}
          onInputChange={(event, newInputValue) => {
            setCountry(newInputValue);
          }}
          id="country-select-demo"
          sx={{
            width: "83vw",
            display: "flex",
            justifyContent: "center",
          }}
          options={formCountries.countries}
          autoHighlight
          getOptionLabel={(option) => option.label}
          renderOption={(props, option) => (
            <Box
              component="li"
              sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
              {...props}
            >
              <img
                loading="lazy"
                width="20"
                src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                alt=""
              />
              {option.label}
            </Box>
          )}
          renderInput={(params) => (
            <form
              onSubmit={handleSubmitForm}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "70vw",
                maxWidth: "450",
              }}
            >
              <TextField
                {...params}
                label="Choisir un pays"
                style={{ backgroundColor: "white" }}
                inputProps={{
                  ...params.inputProps,
                  autoComplete: "new-password",
                }}
                onChange={(e) => setCountry(e.target.value)}
              />
              <Button
                sx={{ borderRadius: "20px", m: "0.3rem" }}
                variant="outlined"
                type="submit"
                style={{
                  color: "#FFF5EC",
                  backgroundColor: "#C2A835",
                  marginTop: "1rem",
                }}
              >
                C'est Party!
              </Button>
            </form>
          )}
        />

        <Typography
          variant="h3"
          sx={{ color: "secondary.main" }}
          style={{
            marginTop: "1rem",
            marginLeft: "1rem",
          }}
          id="programme"
        >
          Afrique
        </Typography>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            marginBottom: "1rem",
          }}
        >
          {Object.keys(continents.Afrique).map((continent) => (
            <h6 style={{ margin: "0 0 0 1rem" }}>
              <span
                key={continent}
                onClick={handleSubmitCountry}
                style={{
                  textDecoration: "none",
                  color: "#000",
                  margin: "0 0.3rem",
                }}
              >
                {continent}
              </span>
            </h6>
          ))}
        </Stack>
        <Afrique />

        <Typography
          variant="h3"
          sx={{ color: "secondary.main" }}
          style={{
            marginTop: "1rem",
            marginLeft: "1rem",
          }}
          id="programme"
        >
          Amérique Latine
        </Typography>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            marginBottom: "1rem",
          }}
        >
          {Object.keys(continents["Amérique Latine"]).map((continent) => (
            <h6 style={{ margin: "0 0 0 1rem" }}>
              <span
                onClick={handleSubmitCountry}
                style={{
                  textDecoration: "none",
                  color: "#000",
                  margin: "0 0.3rem",
                }}
              >
                {continent}
              </span>
            </h6>
          ))}
        </Stack>
        <AmeriqueLatine />
        <Typography
          variant="h3"
          sx={{ color: "secondary.main" }}
          style={{
            marginTop: "1rem",
            marginLeft: "1rem",
          }}
          id="programme"
        >
          Amérique du Nord
        </Typography>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            marginBottom: "1rem",
          }}
        >
          {Object.keys(continents["Amérique du Nord"]).map((continent) => (
            <h6 style={{ margin: "0 0 0 1rem" }}>
              <span
                onClick={handleSubmitCountry}
                style={{
                  textDecoration: "none",
                  color: "#000",
                  margin: "0 0.3rem",
                }}
              >
                {continent}
              </span>
            </h6>
          ))}
        </Stack>
        <AmeriqueNord />

        <Typography
          variant="h3"
          sx={{ color: "secondary.main" }}
          style={{
            marginTop: "1rem",
            marginLeft: "1rem",
          }}
          id="programme"
        >
          Asie
        </Typography>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            marginBottom: "1rem",
          }}
        >
          {Object.keys(continents.Asie).map((continent) => (
            <h6 style={{ margin: "0 0 0 1rem" }}>
              <span
                onClick={handleSubmitCountry}
                style={{
                  textDecoration: "none",
                  color: "#000",
                  margin: "0 0.3rem",
                }}
              >
                {continent}
              </span>
            </h6>
          ))}
        </Stack>
        <Asie />
        <Typography
          variant="h3"
          sx={{ color: "secondary.main" }}
          style={{
            marginTop: "1rem",
            marginLeft: "1rem",
          }}
          id="programme"
        >
          Europe
        </Typography>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            marginBottom: "1rem",
          }}
        >
          {Object.keys(continents.Europe).map((continent) => (
            <h6 style={{ margin: "0 0 0 1rem" }}>
              <span
                onClick={handleSubmitCountry}
                style={{
                  textDecoration: "none",
                  color: "#000",
                  margin: "0 0.3rem",
                }}
              >
                {continent}
              </span>
            </h6>
          ))}
        </Stack>
        <Europe />
        <ToTopScroll />
        <Footer />
      </Stack>
    </div>
  );
}

Home.propTypes = {
  country: PropTypes.string.isRequired,
  setCountry: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  setInputValue: PropTypes.func.isRequired,
};
