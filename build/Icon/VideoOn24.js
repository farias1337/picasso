import React, { forwardRef } from 'react';
import cx from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
const BASE_SIZE = 24;
const SvgVideoOn24 = forwardRef(function SvgVideoOn24(props, ref) {
    const { classes, className, style = {}, color, scale, base } = props;
    const scaledSize = base || BASE_SIZE * Math.ceil(scale || 1);
    const svgStyle = Object.assign({ minWidth: `${scaledSize}px`, minHeight: `${scaledSize}px` }, style);
    return (React.createElement("svg", { viewBox: '0 0 24 24', className: cx(classes.root, className), style: svgStyle, color: color, ref: ref },
        React.createElement("defs", null,
            React.createElement("path", { d: 'M18 8.571L24 6v12l-6-2.571V19H0V5h18v3.571zm0 1.088v4.682l5 2.142V7.517l-5 2.142zM17 9V6H1v12h16V9z', id: 'videoOn24_svg__a' })),
        React.createElement("g", { fillRule: 'evenodd' },
            React.createElement("mask", { id: 'videoOn24_svg__b' },
                React.createElement("use", { xlinkHref: '#videoOn24_svg__a' })),
            React.createElement("use", { fillRule: 'nonzero', xlinkHref: '#videoOn24_svg__a' }),
            React.createElement("g", { mask: 'url(#videoOn24_svg__b)' },
                React.createElement("path", { d: 'M0 0h24v24H0z' })))));
});
SvgVideoOn24.displayName = 'SvgVideoOn24';
export default withStyles(styles)(SvgVideoOn24);
//# sourceMappingURL=VideoOn24.js.map