import React from "react";
import PropTypes from "prop-types";

import { isHandLength } from "./shared/propTypes";
import { createStyles, makeStyles } from "@material-ui/core";
import clsx from "clsx";

const useStyle = makeStyles((theme) =>
  createStyles({
    hand: {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: "50%",
      right: "50%",
    },
    body: {
      position: "absolute",
      backgroundColor: "black",
      transform: "translateX(-50%)",
    },
  })
);

export default function Hand({
  angle = 0,
  name,
  length = 100,
  oppositeLength = 10,
  width = 1,
  classes,
}) {
  const handClasses = useStyle();
  return (
    <div
      className={clsx(handClasses.hand, classes?.hand)}
      style={{
        transform: `rotate(${angle}deg)`,
      }}
    >
      <div
        className={clsx(handClasses.body, classes?.body)}
        style={{
          width: `${width}px`,
          top: `${50 - length / 2}%`,
          bottom: `${50 - oppositeLength / 2}%`,
        }}
      />
    </div>
  );
}

Hand.propTypes = {
  angle: PropTypes.number,
  length: isHandLength,
  name: PropTypes.string.isRequired,
  oppositeLength: isHandLength,
  width: PropTypes.number,
  classes: PropTypes.shape({
    hand: PropTypes.string,
    body: PropTypes.string,
  }),
};
