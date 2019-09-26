import React, { forwardRef } from 'react';
import cx from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
const BASE_SIZE = 24;
const SvgLength24 = forwardRef(function SvgLength24(props, ref) {
    const { classes, className, style = {}, color, scale, base } = props;
    const scaledSize = base || BASE_SIZE * Math.ceil(scale || 1);
    const svgStyle = Object.assign({ minWidth: `${scaledSize}px`, minHeight: `${scaledSize}px` }, style);
    return (React.createElement("svg", { viewBox: '0 0 24 24', className: cx(classes.root, className), style: svgStyle, color: color, ref: ref },
        React.createElement("defs", null,
            React.createElement("path", { d: 'M1 2v20H0V2h1zm23 0v20h-1V2h1zm-7.5 4.29l5 5 .707.707-.707.707-5 5-.707-.707 4.999-5-5-5 .708-.707zm-9 0l.707.707-5 5 5 5-.707.707-5.707-5.707.707-.707 5-5z', id: 'length24_svg__a' })),
        React.createElement("g", { fillRule: 'evenodd' },
            React.createElement("mask", { id: 'length24_svg__b' },
                React.createElement("use", { xlinkHref: '#length24_svg__a' })),
            React.createElement("use", { xlinkHref: '#length24_svg__a' }),
            React.createElement("g", { mask: 'url(#length24_svg__b)' },
                React.createElement("path", { d: 'M0 0h24v24H0z' })))));
});
SvgLength24.displayName = 'SvgLength24';
export default withStyles(styles)(SvgLength24);
//# sourceMappingURL=Length24.js.map