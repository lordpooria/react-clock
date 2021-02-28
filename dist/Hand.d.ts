/// <reference types="react" />
import PropTypes from "prop-types";
import { HandleProps } from "./HandTypes";
declare function Hand({ angle, length, oppositeLength, width, classes, }: HandleProps): JSX.Element;
declare namespace Hand {
    var propTypes: {
        angle: PropTypes.Requireable<number>;
        length: any;
        name: PropTypes.Validator<string>;
        oppositeLength: any;
        width: PropTypes.Requireable<number>;
        classes: PropTypes.Requireable<PropTypes.InferProps<{
            hand: PropTypes.Requireable<string>;
            body: PropTypes.Requireable<string>;
        }>>;
    };
}
export default Hand;
