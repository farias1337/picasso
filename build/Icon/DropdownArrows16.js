import React, { forwardRef } from 'react';
import cx from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
const BASE_SIZE = 16;
const SvgDropdownArrows16 = forwardRef(function SvgDropdownArrows16(props, ref) {
    const { classes, className, style = {}, color, scale, base } = props;
    const scaledSize = base || BASE_SIZE * Math.ceil(scale || 1);
    const svgStyle = Object.assign({ minWidth: `${scaledSize}px`, minHeight: `${scaledSize}px` }, style);
    return (React.createElement("svg", { viewBox: '0 0 16 16', className: cx(classes.root, className), style: svgStyle, color: color, ref: ref },
        React.createElement("g", null,
            React.createElement("path", { d: 'M8.429 2.715l2.117 3.528a.5.5 0 0 1-.43.757H5.884a.5.5 0 0 1-.429-.757l2.117-3.528a.5.5 0 0 1 .858 0zM8.429 13.285l2.117-3.528a.5.5 0 0 0-.43-.757H5.884a.5.5 0 0 0-.429.757l2.117 3.528a.5.5 0 0 0 .858 0z' }))));
});
SvgDropdownArrows16.displayName = 'SvgDropdownArrows16';
export default withStyles(styles)(SvgDropdownArrows16);
//# sourceMappingURL=DropdownArrows16.js.map