import React, { forwardRef } from 'react';
import cx from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
const BASE_SIZE = 16;
const SvgCopy16 = forwardRef(function SvgCopy16(props, ref) {
    const { classes, className, style = {}, color, scale, base } = props;
    const scaledSize = base || BASE_SIZE * Math.ceil(scale || 1);
    const svgStyle = Object.assign({ minWidth: `${scaledSize}px`, minHeight: `${scaledSize}px` }, style);
    return (React.createElement("svg", { viewBox: '0 0 16 16', className: cx(classes.root, className), style: svgStyle, color: color, ref: ref },
        React.createElement("defs", null,
            React.createElement("path", { d: 'M12 2H2v10H1V1h11v1zM4 4h11v11H4V4zm1 1v9h9V5H5z', id: 'copy16_svg__a' })),
        React.createElement("g", { fillRule: 'evenodd' },
            React.createElement("mask", { id: 'copy16_svg__b' },
                React.createElement("use", { xlinkHref: '#copy16_svg__a' })),
            React.createElement("use", { fillRule: 'nonzero', xlinkHref: '#copy16_svg__a' }),
            React.createElement("g", { mask: 'url(#copy16_svg__b)' },
                React.createElement("path", { d: 'M0 0h16v16H0z' })))));
});
SvgCopy16.displayName = 'SvgCopy16';
export default withStyles(styles)(SvgCopy16);
//# sourceMappingURL=Copy16.js.map