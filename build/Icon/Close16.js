import React, { forwardRef } from 'react';
import cx from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
const BASE_SIZE = 16;
const SvgClose16 = forwardRef(function SvgClose16(props, ref) {
    const { classes, className, style = {}, color, scale, base } = props;
    const scaledSize = base || BASE_SIZE * Math.ceil(scale || 1);
    const svgStyle = Object.assign({ minWidth: `${scaledSize}px`, minHeight: `${scaledSize}px` }, style);
    return (React.createElement("svg", { viewBox: '0 0 16 16', className: cx(classes.root, className), style: svgStyle, color: color, ref: ref },
        React.createElement("defs", null,
            React.createElement("path", { d: 'M8.707 8l5.5 5.5-.707.707-5.5-5.5-5.5 5.5-.707-.707 5.5-5.5-5.5-5.5.707-.707 5.5 5.5 5.5-5.5.707.707-5.5 5.5z', id: 'close16_svg__a' })),
        React.createElement("g", { fillRule: 'evenodd' },
            React.createElement("mask", { id: 'close16_svg__b' },
                React.createElement("use", { xlinkHref: '#close16_svg__a' })),
            React.createElement("use", { fillRule: 'nonzero', xlinkHref: '#close16_svg__a' }),
            React.createElement("g", { mask: 'url(#close16_svg__b)' },
                React.createElement("path", { d: 'M0 0h16v16H0z' })))));
});
SvgClose16.displayName = 'SvgClose16';
export default withStyles(styles)(SvgClose16);
//# sourceMappingURL=Close16.js.map