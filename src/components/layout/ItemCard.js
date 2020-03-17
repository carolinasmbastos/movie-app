import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IMG_URL } from "../../config/api-config";

const getStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderBottom: "1px solid #AAAAAA",
    margin: "4% 2% 0 2%",
    alignItems: "flex-end"
  },
  textContainer: {
    flexGrow: 1,
    padding: "1%",
    alignSelf: "center"
  },
  info: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  img: {
    maxWidth: "30%"
  },
  h1: {
    margin: 0,
    fontWeight: 400,
    fontSize: "1.2rem"
  },
  h3: {
    margin: 0,
    fontWeight: 300,
    fontSize: "0.8rem",
    color: "#666666"
  },
  p: {
    fontWeight: 300,
    fontSize: "0.8rem",
    textAlign: "left",
    color: "#666666",
    lineHeight: "1.1rem"
  }
}));

const ItemCard = props => {
  const classes = getStyles();
  return (
    <div key={props.id} className={classes.container}>
      <img
        src={props.image ? `${IMG_URL}${props.image}` : ""}
        className={classes.img}
      />

      <div className={classes.textContainer}>
        <h1 className={classes.h1}>{props.title} </h1>
        <div className={classes.info}>
          <h3 className={classes.h3}>Release Date:&nbsp;{props.date}</h3>
          <h3 className={classes.h3}>&nbsp;|&nbsp;</h3>
          <h3 className={classes.h3}>Popularity:&nbsp;{props.popularity}</h3>
        </div>
        <p className={classes.p}>{props.description}</p>
      </div>
    </div>
  );
};

export default ItemCard;
