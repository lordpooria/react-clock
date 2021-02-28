import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { getHours, getMinutes, getSeconds } from '@wojtekmaj/date-utils';
import { makeStyles, createStyles } from '@material-ui/core';

/* eslint-disable import/prefer-default-export */

/**
 * Checks whether a variable is defined.
 *
 * @param {*} variable Variable to check
 */
var isDefined = function isDefined(variable) {
  return typeof variable !== 'undefined';
};

var isNumberBetween = function isNumberBetween(min, max) {
  return function (props, propName, componentName) {
    var value = props[propName];

    if (isDefined(value)) {
      if (typeof value !== 'number') {
        return new Error("Invalid prop `" + propName + "` of type `" + typeof value + "` supplied to `" + componentName + "`, expected `number`.");
      }

      if (value < min || value > max) {
        return new Error("Invalid prop `" + propName + "` of type `" + typeof value + "` supplied to `" + componentName + "`, length must be between " + min + " and " + max + ".");
      }
    } // Everything is fine


    return null;
  };
};

var isHandLength = /*#__PURE__*/isNumberBetween(0, 100);
var isOppositeHandLength = /*#__PURE__*/isNumberBetween(-100, 100);
var isHandWidth = function isHandWidth(props, propName, componentName) {
  var width = props[propName];

  if (isDefined(width)) {
    if (typeof width !== 'number') {
      return new Error("Invalid prop `" + propName + "` of type `" + typeof width + "` supplied to `" + componentName + "`, expected `number`.");
    }

    if (width < 0) {
      return new Error("Invalid prop `" + propName + "` of type `" + typeof width + "` supplied to `" + componentName + "`, width must be greater or equal to 0.");
    }
  } // Everything is fine


  return null;
};
var isMarkLength = isHandLength;
var isMarkWidth = isHandWidth;

var useStyle = /*#__PURE__*/makeStyles(function () {
  return createStyles({
    hand: {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: "50%",
      right: "50%"
    },
    body: {
      position: "absolute",
      backgroundColor: "black",
      transform: "translateX(-50%)"
    }
  });
});
function Hand(_ref) {
  var _ref$angle = _ref.angle,
      angle = _ref$angle === void 0 ? 0 : _ref$angle,
      _ref$length = _ref.length,
      length = _ref$length === void 0 ? 100 : _ref$length,
      _ref$oppositeLength = _ref.oppositeLength,
      oppositeLength = _ref$oppositeLength === void 0 ? 10 : _ref$oppositeLength,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 1 : _ref$width,
      classes = _ref.classes;
  var handClasses = useStyle();
  return /*#__PURE__*/React.createElement("div", {
    className: clsx(handClasses.hand, classes == null ? void 0 : classes.hand),
    style: {
      transform: "rotate(" + angle + "deg)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: clsx(handClasses.body, classes == null ? void 0 : classes.body),
    style: {
      width: width + "px",
      top: 50 - length / 2 + "%",
      bottom: 50 - oppositeLength / 2 + "%"
    }
  }));
}
Hand.propTypes = {
  angle: PropTypes.number,
  length: isHandLength,
  name: PropTypes.string.isRequired,
  oppositeLength: isHandLength,
  width: PropTypes.number,
  classes: /*#__PURE__*/PropTypes.shape({
    hand: PropTypes.string,
    body: PropTypes.string
  })
};

var useStyle$1 = /*#__PURE__*/makeStyles(function () {
  return createStyles({
    mark: {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: "50%",
      right: "50%"
    },
    body: {
      position: "absolute",
      backgroundColor: "black",
      transform: "translateX(-50%)"
    },
    number: {
      position: "absolute",
      left: "-40px",
      width: "80px",
      textAlign: "center"
    }
  });
});
function Mark(_ref) {
  var _ref$angle = _ref.angle,
      angle = _ref$angle === void 0 ? 0 : _ref$angle,
      _ref$length = _ref.length,
      length = _ref$length === void 0 ? 10 : _ref$length,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 1 : _ref$width,
      number = _ref.number,
      classes = _ref.classes;
  var markClasses = useStyle$1();
  return /*#__PURE__*/React.createElement("div", {
    className: clsx(markClasses.mark, classes == null ? void 0 : classes.mark),
    style: {
      transform: "rotate(" + angle + "deg)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: clsx(markClasses.body, classes == null ? void 0 : classes.body),
    style: {
      width: width + "px",
      top: 0,
      bottom: 100 - length / 2 + "%"
    }
  }), number && /*#__PURE__*/React.createElement("div", {
    className: markClasses.number,
    style: {
      transform: "rotate(-" + angle + "deg)",
      top: length / 2 + "%"
    }
  }, number));
}
Mark.propTypes = {
  angle: PropTypes.number,
  length: isMarkLength,
  name: PropTypes.string.isRequired,
  number: PropTypes.number,
  width: isMarkWidth,
  classes: /*#__PURE__*/PropTypes.shape({
    mark: PropTypes.string,
    body: PropTypes.string
  })
};

var useStyle$2 = /*#__PURE__*/makeStyles(function () {
  return createStyles({
    clockRoot: {
      display: "block",
      position: "relative"
    },
    face: {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: "rgba(0,0,0,0.3)",
      border: "1px solid black",
      borderRadius: "50%"
    },
    secondHand: {
      backgroundColor: "red"
    }
  });
});
function Clock(_ref) {
  var className = _ref.className,
      _ref$hourHandLength = _ref.hourHandLength,
      hourHandLength = _ref$hourHandLength === void 0 ? 50 : _ref$hourHandLength,
      hourHandOppositeLength = _ref.hourHandOppositeLength,
      _ref$hourHandWidth = _ref.hourHandWidth,
      hourHandWidth = _ref$hourHandWidth === void 0 ? 4 : _ref$hourHandWidth,
      _ref$hourMarksLength = _ref.hourMarksLength,
      hourMarksLength = _ref$hourMarksLength === void 0 ? 10 : _ref$hourMarksLength,
      _ref$hourMarksWidth = _ref.hourMarksWidth,
      hourMarksWidth = _ref$hourMarksWidth === void 0 ? 3 : _ref$hourMarksWidth,
      _ref$minuteHandLength = _ref.minuteHandLength,
      minuteHandLength = _ref$minuteHandLength === void 0 ? 70 : _ref$minuteHandLength,
      minuteHandOppositeLength = _ref.minuteHandOppositeLength,
      _ref$minuteHandWidth = _ref.minuteHandWidth,
      minuteHandWidth = _ref$minuteHandWidth === void 0 ? 2 : _ref$minuteHandWidth,
      _ref$minuteMarksLengt = _ref.minuteMarksLength,
      minuteMarksLength = _ref$minuteMarksLengt === void 0 ? 6 : _ref$minuteMarksLengt,
      _ref$minuteMarksWidth = _ref.minuteMarksWidth,
      minuteMarksWidth = _ref$minuteMarksWidth === void 0 ? 1 : _ref$minuteMarksWidth,
      _ref$renderHourMarks = _ref.renderHourMarks,
      renderHourMarks = _ref$renderHourMarks === void 0 ? true : _ref$renderHourMarks,
      _ref$renderMinuteHand = _ref.renderMinuteHand,
      renderMinuteHand = _ref$renderMinuteHand === void 0 ? true : _ref$renderMinuteHand,
      _ref$renderMinuteMark = _ref.renderMinuteMarks,
      renderMinuteMarks = _ref$renderMinuteMark === void 0 ? true : _ref$renderMinuteMark,
      renderNumbers = _ref.renderNumbers,
      _ref$renderSecondHand = _ref.renderSecondHand,
      renderSecondHand = _ref$renderSecondHand === void 0 ? true : _ref$renderSecondHand,
      _ref$secondHandLength = _ref.secondHandLength,
      secondHandLength = _ref$secondHandLength === void 0 ? 90 : _ref$secondHandLength,
      secondHandOppositeLength = _ref.secondHandOppositeLength,
      _ref$secondHandWidth = _ref.secondHandWidth,
      secondHandWidth = _ref$secondHandWidth === void 0 ? 1 : _ref$secondHandWidth,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 150 : _ref$size,
      value = _ref.value;
  var classes = useStyle$2();

  function renderMinuteMarksFn() {
    if (!renderMinuteMarks) {
      return null;
    }

    var minuteMarks = [];

    for (var i = 1; i <= 60; i += 1) {
      var isHourMark = renderHourMarks && !(i % 5);

      if (!isHourMark) {
        minuteMarks.push( /*#__PURE__*/React.createElement(Mark, {
          key: "minute_" + i,
          angle: i * 6,
          length: minuteMarksLength,
          name: "minute",
          width: minuteMarksWidth
        }));
      }
    }

    return minuteMarks;
  }

  function renderHourMarksFn() {
    if (!renderHourMarks) {
      return null;
    }

    var hourMarks = [];

    for (var i = 1; i <= 12; i += 1) {
      hourMarks.push( /*#__PURE__*/React.createElement(Mark, {
        key: "hour_" + i,
        angle: i * 30,
        length: hourMarksLength,
        name: "hour",
        number: renderNumbers ? i : null,
        width: hourMarksWidth
      }));
    }

    return hourMarks;
  }

  function renderFace() {
    return /*#__PURE__*/React.createElement("div", {
      className: classes.face
    }, renderMinuteMarksFn(), renderHourMarksFn());
  }

  function renderHourHandFn() {
    var angle = value ? getHours(value) * 30 + getMinutes(value) / 2 + getSeconds(value) / 600 : 0;
    return /*#__PURE__*/React.createElement(Hand, {
      angle: angle,
      length: hourHandLength,
      name: "hour",
      oppositeLength: hourHandOppositeLength,
      width: hourHandWidth
    });
  }

  function renderMinuteHandFn() {
    if (!renderMinuteHand) {
      return null;
    }

    var angle = value ? getHours(value) * 360 + getMinutes(value) * 6 + getSeconds(value) / 10 : 0;
    return /*#__PURE__*/React.createElement(Hand, {
      angle: angle,
      length: minuteHandLength,
      name: "minute",
      oppositeLength: minuteHandOppositeLength,
      width: minuteHandWidth
    });
  }

  function renderSecondHandFn() {
    if (!renderSecondHand) {
      return null;
    }

    var angle = value ? getMinutes(value) * 360 + getSeconds(value) * 6 : 0;
    return /*#__PURE__*/React.createElement(Hand, {
      angle: angle,
      length: secondHandLength,
      name: "second",
      classes: {
        body: classes.secondHand
      },
      oppositeLength: secondHandOppositeLength,
      width: secondHandWidth
    });
  }

  return /*#__PURE__*/React.createElement("time", {
    className: clsx(classes.clockRoot, className),
    dateTime: value instanceof Date ? value.toISOString() : value,
    style: {
      width: size + "px",
      height: size + "px"
    }
  }, renderFace(), renderHourHandFn(), renderMinuteHandFn(), renderSecondHandFn());
}
Clock.propTypes = {
  className: /*#__PURE__*/PropTypes.oneOfType([PropTypes.string, /*#__PURE__*/PropTypes.arrayOf(PropTypes.string)]),
  hourHandLength: isHandLength,
  hourHandOppositeLength: isOppositeHandLength,
  hourHandWidth: isHandWidth,
  hourMarksLength: isMarkLength,
  hourMarksWidth: isMarkWidth,
  minuteHandLength: isHandLength,
  minuteHandOppositeLength: isOppositeHandLength,
  minuteHandWidth: isHandWidth,
  minuteMarksLength: isMarkLength,
  minuteMarksWidth: isMarkWidth,
  renderHourMarks: PropTypes.bool,
  renderMinuteHand: PropTypes.bool,
  renderMinuteMarks: PropTypes.bool,
  renderNumbers: PropTypes.bool,
  renderSecondHand: PropTypes.bool,
  secondHandLength: isHandLength,
  secondHandOppositeLength: isOppositeHandLength,
  secondHandWidth: isHandWidth,
  size: PropTypes.number,
  value: /*#__PURE__*/PropTypes.oneOfType([PropTypes.string, /*#__PURE__*/PropTypes.instanceOf(Date)])
};

export default Clock;
//# sourceMappingURL=react-clock.esm.js.map
