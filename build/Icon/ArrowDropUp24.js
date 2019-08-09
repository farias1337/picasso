"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const styles_1 = require("@material-ui/core/styles");
const styles_2 = __importDefault(require("./styles"));
const BASE_SIZE = 24;
const SvgArrowDropUp24 = (props) => {
    const { classes, className, style = {}, color, scale, size, base } = props;
    if (size) {
        const name = 'SvgArrowDropUp24';
        window.console.warn(`${name}: size' prop will be removed in the next major release of Picasso. Please use 'scale' to maintain pixel perfect icons`);
    }
    const scaledSize = base || BASE_SIZE * Math.ceil(scale || 1);
    const svgStyle = Object.assign({ minWidth: `${scaledSize}px`, minHeight: `${scaledSize}px` }, style);
    return (react_1.default.createElement("svg", { viewBox: '0 0 24 24', className: classnames_1.default(classes.root, className), style: svgStyle, color: color },
        react_1.default.createElement("defs", null,
            react_1.default.createElement("path", { d: 'M11.372 7.785c.347-.434.913-.43 1.256 0l6.744 8.43c.347.434.183.785-.373.785H5.001c-.553 0-.716-.356-.373-.785l6.744-8.43z', id: 'arrowDropUp24_svg__a' })),
        react_1.default.createElement("g", { fillRule: 'evenodd' },
            react_1.default.createElement("mask", { id: 'arrowDropUp24_svg__b' },
                react_1.default.createElement("use", { xlinkHref: '#arrowDropUp24_svg__a' })),
            react_1.default.createElement("use", { xlinkHref: '#arrowDropUp24_svg__a' }),
            react_1.default.createElement("g", { mask: 'url(#arrowDropUp24_svg__b)' },
                react_1.default.createElement("path", { d: 'M0 0h24v24H0z' })))));
};
SvgArrowDropUp24.displayName = 'SvgArrowDropUp24';
exports.default = styles_1.withStyles(styles_2.default)(SvgArrowDropUp24);
//# sourceMappingURL=ArrowDropUp24.js.map