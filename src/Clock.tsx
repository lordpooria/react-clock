import React from "react";
import clsx from "clsx";
import { getHours, getMinutes, getSeconds } from "@wojtekmaj/date-utils";

import { Hand } from "./Hand";
import { Mark } from "./Mark";

import { createUseStyles } from "react-jss";
import { ClockProps } from "./types";

const MIDDLE_CIRCLE_RATIO = 17;
const FONT_SIZE_RATIO = 16;
const ORANGE = "#F3A829";

const useStyle = createUseStyles({
  clockRoot: {
    display: "block",
    position: "relative",
    fontFamily: "arial",
    fontWeight: 500,
  },
  face: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#FFF",
    borderRadius: "50%",
  },
  secondHand: {
    backgroundColor: ORANGE,
  },
  mark: {},
  middleCircle: {
    backgroundColor: ORANGE,
    position: "absolute",
    boxShadow: "1px 1px 1px rgba(0,0,0,0.3)",
  },
});

export const Clock = ({
  className,
  classes,
  hourHandLength = 70,
  hourHandOppositeLength,
  hourHandWidth = 14,
  hourMarksLength = 13,
  hourMarksWidth = 7,
  minuteHandLength = 90,
  minuteHandOppositeLength,
  minuteHandWidth = 8,
  minuteMarksLength = 7,
  minuteMarksWidth = 4,
  renderHourMarks = true,
  renderMinuteHand = true,
  renderMinuteMarks = true,
  renderNumbers,
  middleCircleRatio = MIDDLE_CIRCLE_RATIO,
  fontSizeRatio = FONT_SIZE_RATIO,
  renderSecondHand = true,
  secondHandLength = 97,
  secondHandOppositeLength,
  secondHandWidth = 2,
  size = 150,
  value,
}: ClockProps) => {
  const clockClasses = useStyle();
  function renderMinuteMarksFn() {
    if (!renderMinuteMarks) {
      return null;
    }

    const minuteMarks = [];
    for (let i = 1; i <= 60; i += 1) {
      const isHourMark = renderHourMarks && !(i % 5);

      if (!isHourMark) {
        minuteMarks.push(
          <Mark
            key={`minute_${i}`}
            angle={i * 6}
            length={minuteMarksLength}
            name="minute"
            width={minuteMarksWidth}
            classes={classes?.marker}
          />
        );
      }
    }
    return minuteMarks;
  }

  function renderHourMarksFn() {
    if (!renderHourMarks) {
      return null;
    }

    const hourMarks = [];
    for (let i = 1; i <= 12; i += 1) {
      hourMarks.push(
        <Mark
          key={`hour_${i}`}
          angle={i * 30}
          length={hourMarksLength}
          name="hour"
          number={renderNumbers ? i : null}
          width={hourMarksWidth}
          classes={classes?.marker}
        />
      );
    }
    return hourMarks;
  }

  function renderFace() {
    return (
      <div className={clockClasses.face}>
        {renderMinuteMarksFn()}
        {renderHourMarksFn()}
      </div>
    );
  }

  function renderHourHandFn() {
    const angle = value
      ? getHours(value) * 30 + getMinutes(value) / 2 + getSeconds(value) / 600
      : 0;

    return (
      <Hand
        angle={angle}
        length={hourHandLength}
        name="hour"
        oppositeLength={hourHandOppositeLength}
        width={hourHandWidth}
        classes={classes?.handle}
      />
    );
  }

  function renderMinuteHandFn() {
    if (!renderMinuteHand) {
      return null;
    }

    const angle = value
      ? getHours(value) * 360 + getMinutes(value) * 6 + getSeconds(value) / 10
      : 0;

    return (
      <Hand
        angle={angle}
        length={minuteHandLength}
        name="minute"
        oppositeLength={minuteHandOppositeLength}
        width={minuteHandWidth}
        classes={classes?.handle}
      />
    );
  }

  function renderSecondHandFn() {
    if (!renderSecondHand) {
      return null;
    }

    const angle = value ? getMinutes(value) * 360 + getSeconds(value) * 6 : 0;

    return (
      <Hand
        angle={angle}
        length={secondHandLength}
        name="second"
        classes={{ body: clockClasses.secondHand, ...classes?.handle }}
        oppositeLength={secondHandOppositeLength}
        width={secondHandWidth}
      />
    );
  }
  function renderMiddleCircle() {
    return (
      <div
        className={clsx(clockClasses.middleCircle, classes?.middleCircle)}
        style={{
          width: size / middleCircleRatio,
          height: size / middleCircleRatio,
          borderRadius: size / (2 * middleCircleRatio),
          left: `calc(50% - ${size / (2 * middleCircleRatio)}px)`,
          top: `calc(50% - ${size / (2 * middleCircleRatio)}px)`,
        }}
      />
    );
  }

  return (
    <time
      className={clsx(clockClasses.clockRoot, className, classes?.clock?.root)}
      dateTime={value instanceof Date ? value.toISOString() : value}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        fontSize: size / fontSizeRatio,
      }}
    >
      {renderFace()}
      {renderHourHandFn()}
      {renderMinuteHandFn()}
      {renderSecondHandFn()}
      {renderMiddleCircle()}
    </time>
  );
};

// Clock.displayName = "Clock";
