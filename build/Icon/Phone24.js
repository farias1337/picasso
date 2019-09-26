import React, { forwardRef } from 'react';
import cx from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
const BASE_SIZE = 24;
const SvgPhone24 = forwardRef(function SvgPhone24(props, ref) {
    const { classes, className, style = {}, color, scale, base } = props;
    const scaledSize = base || BASE_SIZE * Math.ceil(scale || 1);
    const svgStyle = Object.assign({ minWidth: `${scaledSize}px`, minHeight: `${scaledSize}px` }, style);
    return (React.createElement("svg", { viewBox: '0 0 24 24', className: cx(classes.root, className), style: svgStyle, color: color, ref: ref },
        React.createElement("defs", null,
            React.createElement("path", { d: 'M20.628 22.006a3.377 3.377 0 0 1-3.7.73A29.165 29.165 0 0 1 1.264 7.079a3.386 3.386 0 0 1 .728-3.704l1.905-1.908a1.59 1.59 0 0 1 2.252 0l3.203 3.198c.622.623.622 1.63 0 2.253L7.97 8.3l.217.3a32.107 32.107 0 0 0 7.216 7.215l.295.215 1.38-1.381a1.59 1.59 0 0 1 2.251-.001l3.204 3.198c.621.623.621 1.63 0 2.253l-1.906 1.907zm-3.313-.192c.893.375 1.92.172 2.606-.514l1.905-1.908a.593.593 0 0 0 .001-.838l-3.204-3.2a.59.59 0 0 0-.836.001L15.8 17.343l-.692-.505-.29-.213A33.101 33.101 0 0 1 7.38 9.188l-.72-.99 1.984-1.987a.593.593 0 0 0 .001-.838l-3.204-3.2a.59.59 0 0 0-.836.001L2.7 4.082a2.386 2.386 0 0 0-.514 2.611 28.166 28.166 0 0 0 15.129 15.12z', id: 'phone24_svg__a' })),
        React.createElement("g", { fillRule: 'evenodd' },
            React.createElement("mask", { id: 'phone24_svg__b' },
                React.createElement("use", { xlinkHref: '#phone24_svg__a' })),
            React.createElement("use", { fillRule: 'nonzero', xlinkHref: '#phone24_svg__a' }),
            React.createElement("g", { mask: 'url(#phone24_svg__b)' },
                React.createElement("path", { d: 'M0 0h24v24H0z' })))));
});
SvgPhone24.displayName = 'SvgPhone24';
export default withStyles(styles)(SvgPhone24);
//# sourceMappingURL=Phone24.js.map