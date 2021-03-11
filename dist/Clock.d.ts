/// <reference types="react" />
import { ClockProps } from "./types";
declare function Clock({ className, classes, hourHandLength, hourHandOppositeLength, hourHandWidth, hourMarksLength, hourMarksWidth, minuteHandLength, minuteHandOppositeLength, minuteHandWidth, minuteMarksLength, minuteMarksWidth, renderHourMarks, renderMinuteHand, renderMinuteMarks, renderNumbers, middleCircleRatio, fontSizeRatio, renderSecondHand, secondHandLength, secondHandOppositeLength, secondHandWidth, size, value, }: ClockProps): JSX.Element;
declare namespace Clock {
    var displayName: string;
}
export default Clock;
