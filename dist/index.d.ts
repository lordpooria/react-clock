/// <reference types="react" />
import PropTypes from "prop-types";
import { ClockProps } from "./types";
declare function Clock({ className, hourHandLength, hourHandOppositeLength, hourHandWidth, hourMarksLength, hourMarksWidth, minuteHandLength, minuteHandOppositeLength, minuteHandWidth, minuteMarksLength, minuteMarksWidth, renderHourMarks, renderMinuteHand, renderMinuteMarks, renderNumbers, renderSecondHand, secondHandLength, secondHandOppositeLength, secondHandWidth, size, value, }: ClockProps): JSX.Element;
declare namespace Clock {
    var propTypes: {
        className: PropTypes.Requireable<string | (string | null | undefined)[]>;
        hourHandLength: any;
        hourHandOppositeLength: any;
        hourHandWidth: any;
        hourMarksLength: any;
        hourMarksWidth: any;
        minuteHandLength: any;
        minuteHandOppositeLength: any;
        minuteHandWidth: any;
        minuteMarksLength: any;
        minuteMarksWidth: any;
        renderHourMarks: PropTypes.Requireable<boolean>;
        renderMinuteHand: PropTypes.Requireable<boolean>;
        renderMinuteMarks: PropTypes.Requireable<boolean>;
        renderNumbers: PropTypes.Requireable<boolean>;
        renderSecondHand: PropTypes.Requireable<boolean>;
        secondHandLength: any;
        secondHandOppositeLength: any;
        secondHandWidth: any;
        size: PropTypes.Requireable<number>;
        value: PropTypes.Requireable<import("./types").ClockValue>;
    };
}
export default Clock;
