import { HandleClasses } from "./HandTypes";
import { MarkerClasses } from "./MarkTypes";
export declare type ClockValue = string | Date;
export interface ClockProps<T = ClockValue> {
    /**
     * Class name(s) that will be added along with "react-clock" to the main React-Clock <time> element.
     */
    className?: string | string[];
    /**
     * Class name(s) that will be added along with "react-clock" to the main React-Clock <time> element.
     */
    classes?: {
        clock?: {
            root?: string;
        };
        marker?: MarkerClasses;
        handle?: HandleClasses;
        middleCircle?: string;
    };
    /**
     * Hour hand length, in %.
     * @default 50
     */
    hourHandLength?: number;
    /**
     * The length of the part of an hour hand on the opposite side the hand is pointing to, in %.
     * @default 10
     */
    hourHandOppositeLength?: number;
    /**
     * Hour hand width ratio respect to size.
     *
     */
    hourHandWidthRatio?: number;
    /**
     * Hour marks length, in %.
     * @default 10
     */
    hourMarksLength?: number;
    /**
     * Hour marks width ratio respect to size.
     *    */
    hourMarksWidthRatio?: number;
    /**
     * Minute hand length, in %.
     * @default 70
     */
    minuteHandLength?: number;
    /**
     * The length of the part of a minute hand on the opposite side the hand is pointing to, in %.
     * @default 10
     */
    minuteHandOppositeLength?: number;
    /**
     * Minute hand width ratio respect to size.
     *
     */
    minuteHandWidthRatio?: number;
    /**
     * Minute marks length, in %.
     * @default 6
     */
    minuteMarksLength?: number;
    /**
     * Minute marks width ratio respect to size.
     *
     */
    minuteMarksWidthRatio?: number;
    /**
     * Whether hour marks shall be rendered.
     * @default true
     */
    renderHourMarks?: boolean;
    /**
     * Whether minute hand shall be rendered.
     * @default true
     */
    renderMinuteHand?: boolean;
    /**
     * Whether minute marks shall be rendered.
     * @default true
     */
    renderMinuteMarks?: boolean;
    /**
     * Whether numbers shall be rendered.
     * @default false
     */
    renderNumbers?: boolean;
    /**
     * Whether second hand shall be rendered.
     * @default true
     */
    renderSecondHand?: boolean;
    /**
     * Second hand length, in %.
     * @default 90
     */
    secondHandLength?: number;
    /**
     * The length of the part of a second hand on the opposite side the hand is pointing to, in %.
     * @default 10
     */
    secondHandOppositeLength?: number;
    /**
     * Second hand width ratio respect to size.
     *
     */
    secondHandWidthRatio?: number;
    /**
     * Clock size, in pixels.
     * @default 150
     */
    size?: number;
    /**
     * Clock size, in pixels. this value divided by size result the size of middle circle
     *
     */
    middleCircleRatio?: number;
    /**
     * number if prop render number is true has a value based on size that is ratio
     * of size
     *
     */
    fontSizeRatio?: number;
    /**
     * Clock value. Must be provided.
     */
    value: T;
}
