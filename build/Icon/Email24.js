import React, { forwardRef } from 'react';
import cx from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
const BASE_SIZE = 24;
const SvgEmail24 = forwardRef(function SvgEmail24(props, ref) {
    const { classes, className, style = {}, color, scale, base } = props;
    const scaledSize = base || BASE_SIZE * Math.ceil(scale || 1);
    const svgStyle = Object.assign({ minWidth: `${scaledSize}px`, minHeight: `${scaledSize}px` }, style);
    return (React.createElement("svg", { viewBox: '0 0 24 24', className: cx(classes.root, className), style: svgStyle, color: color, ref: ref },
        React.createElement("defs", null,
            React.createElement("path", { d: 'M1.721 4L12 13.342 22.279 4H1.72zM23 4.693l-11 9.966L1 4.693V20h22V4.693zM0 3h24v18H0V3z', id: 'email24_svg__a' })),
        React.createElement("g", { fillRule: 'evenodd' },
            React.createElement("mask", { id: 'email24_svg__b' },
                React.createElement("use", { xlinkHref: '#email24_svg__a' })),
            React.createElement("use", { fillRule: 'nonzero', xlinkHref: '#email24_svg__a' }),
            React.createElement("g", { mask: 'url(#email24_svg__b)' },
                React.createElement("path", { d: 'M0 0h24v24H0z' })))));
});
SvgEmail24.displayName = 'SvgEmail24';
export default withStyles(styles)(SvgEmail24);
//# sourceMappingURL=Email24.js.map