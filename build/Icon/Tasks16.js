import React, { forwardRef } from 'react';
import cx from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
const BASE_SIZE = 16;
const SvgTasks16 = forwardRef(function SvgTasks16(props, ref) {
    const { classes, className, style = {}, color, scale, base } = props;
    const scaledSize = base || BASE_SIZE * Math.ceil(scale || 1);
    const svgStyle = Object.assign({ minWidth: `${scaledSize}px`, minHeight: `${scaledSize}px` }, style);
    return (React.createElement("svg", { viewBox: '0 0 16 16', className: cx(classes.root, className), style: svgStyle, color: color, ref: ref },
        React.createElement("defs", null,
            React.createElement("path", { d: 'M3.5 3.793l3-3 .707.707-3 3-.707.707L1.793 3.5l.707-.707 1 1zM3 1v1H1v4h4V5h1v2H0V1h3zM0 9h6v6H0V9zm1 1v4h4v-4H1zm7-7h8v1H8V3zm0 8h8v1H8v-1z', id: 'tasks16_svg__a' })),
        React.createElement("g", { fillRule: 'evenodd' },
            React.createElement("mask", { id: 'tasks16_svg__b' },
                React.createElement("use", { xlinkHref: '#tasks16_svg__a' })),
            React.createElement("use", { fillRule: 'nonzero', xlinkHref: '#tasks16_svg__a' }),
            React.createElement("g", { mask: 'url(#tasks16_svg__b)' },
                React.createElement("path", { d: 'M0 0h16v16H0z' })))));
});
SvgTasks16.displayName = 'SvgTasks16';
export default withStyles(styles)(SvgTasks16);
//# sourceMappingURL=Tasks16.js.map