import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { isMarkLength, isMarkWidth } from "./shared/propTypes";
import { createStyles, makeStyles } from "@material-ui/core";
import { MarkProps } from "./MarkTypes";

const useStyle = makeStyles(() =>
  createStyles({
    mark: {
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
    number: {
      position: "absolute",
      left: "-40px",
      width: "80px",
      textAlign: "center",
    },
  })
);

export default function Mark({
  angle = 0,
  length = 10,
  // name,
  width = 1,
  number,
  classes,
}: MarkProps) {
  const markClasses = useStyle();
  return (
    <div
      className={clsx(markClasses.mark, classes?.mark)}
      style={{
        transform: `rotate(${angle}deg)`,
      }}
    >
      <div
        className={clsx(markClasses.body, classes?.body)}
        style={{
          width: `${width}px`,
          top: 0,
          bottom: `${100 - length / 2}%`,
        }}
      />
      {number && (
        <div
          className={markClasses.number}
          style={{
            transform: `rotate(-${angle}deg)`,
            top: `${length / 2}%`,
          }}
        >
          {number}
        </div>
      )}
    </div>
  );
}

Mark.propTypes = {
  angle: PropTypes.number,
  length: isMarkLength,
  name: PropTypes.string.isRequired,
  number: PropTypes.number,
  width: isMarkWidth,
  classes: PropTypes.shape({
    mark: PropTypes.string,
    body: PropTypes.string,
  }),
};
