import React, { forwardRef } from 'react';
import cx from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
const BASE_SIZE = 24;
const SvgLeave24 = forwardRef(function SvgLeave24(props, ref) {
    const { classes, className, style = {}, color, scale, base } = props;
    const scaledSize = base || BASE_SIZE * Math.ceil(scale || 1);
    const svgStyle = Object.assign({ minWidth: `${scaledSize}px`, minHeight: `${scaledSize}px` }, style);
    return (React.createElement("svg", { viewBox: '0 0 24 24', className: cx(classes.root, className), style: svgStyle, color: color, ref: ref },
        React.createElement("defs", null,
            React.createElement("path", { d: 'M2 3v19h9v1H1V2h10v1H2zm19.293 10H11v-1h10.293l-3.5-3.5.707-.707 4 4 .707.707-4.707 4.707-.707-.707 3.5-3.5z', id: 'leave24_svg__a' })),
        React.createElement("g", { fillRule: 'evenodd' },
            React.createElement("mask", { id: 'leave24_svg__b' },
                React.createElement("use", { xlinkHref: '#leave24_svg__a' })),
            React.createElement("use", { fillRule: 'nonzero', xlinkHref: '#leave24_svg__a' }),
            React.createElement("g", { mask: 'url(#leave24_svg__b)' },
                React.createElement("path", { d: 'M0 0h24v24H0z' })))));
});
SvgLeave24.displayName = 'SvgLeave24';
export default withStyles(styles)(SvgLeave24);
//# sourceMappingURL=Leave24.js.map