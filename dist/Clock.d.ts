/// <reference types="react" />
import { ClockProps } from "./types";
declare function Clock({ className, hourHandLength, hourHandOppositeLength, hourHandWidth, hourMarksLength, hourMarksWidth, minuteHandLength, minuteHandOppositeLength, minuteHandWidth, minuteMarksLength, minuteMarksWidth, renderHourMarks, renderMinuteHand, renderMinuteMarks, renderNumbers, renderSecondHand, secondHandLength, secondHandOppositeLength, secondHandWidth, size, value, }: ClockProps): JSX.Element;
declare namespace Clock {
    var displayName: string;
}
export default Clock;
