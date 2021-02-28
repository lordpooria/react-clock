import React from "react";
import clsx from "clsx";
import { MarkProps } from "./MarkTypes";
import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
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
});

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
