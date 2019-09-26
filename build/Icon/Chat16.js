import React, { forwardRef } from 'react';
import cx from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
const BASE_SIZE = 16;
const SvgChat16 = forwardRef(function SvgChat16(props, ref) {
    const { classes, className, style = {}, color, scale, base } = props;
    const scaledSize = base || BASE_SIZE * Math.ceil(scale || 1);
    const svgStyle = Object.assign({ minWidth: `${scaledSize}px`, minHeight: `${scaledSize}px` }, style);
    return (React.createElement("svg", { viewBox: '0 0 16 16', className: cx(classes.root, className), style: svgStyle, color: color, ref: ref },
        React.createElement("defs", null,
            React.createElement("path", { d: 'M13 5h3v7h-1l-3 3v-3H7v-2h1v1h5v1.586L14.586 11H15V6h-2V5zM0 1h12v8H5v3L2 9H0V1zm1 1v6h1.414L4 9.586V8h7V2H1z', id: 'chat16_svg__a' })),
        React.createElement("g", { fillRule: 'evenodd' },
            React.createElement("mask", { id: 'chat16_svg__b' },
                React.createElement("use", { xlinkHref: '#chat16_svg__a' })),
            React.createElement("use", { fillRule: 'nonzero', xlinkHref: '#chat16_svg__a' }),
            React.createElement("g", { mask: 'url(#chat16_svg__b)' },
                React.createElement("path", { d: 'M0 0h16v16H0z' })))));
});
SvgChat16.displayName = 'SvgChat16';
export default withStyles(styles)(SvgChat16);
//# sourceMappingURL=Chat16.js.map