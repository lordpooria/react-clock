/// <reference types="react" />
import PropTypes from "prop-types";
import { MarkProps } from "./MarkTypes";
declare function Mark({ angle, length, width, number, classes, }: MarkProps): JSX.Element;
declare namespace Mark {
    var propTypes: {
        angle: PropTypes.Requireable<number>;
        length: any;
        name: PropTypes.Validator<string>;
        number: PropTypes.Requireable<number>;
        width: any;
        classes: PropTypes.Requireable<PropTypes.InferProps<{
            mark: PropTypes.Requireable<string>;
            body: PropTypes.Requireable<string>;
        }>>;
    };
}
export default Mark;
