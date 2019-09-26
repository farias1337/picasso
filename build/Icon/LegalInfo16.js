import React, { forwardRef } from 'react';
import cx from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
const BASE_SIZE = 16;
const SvgLegalInfo16 = forwardRef(function SvgLegalInfo16(props, ref) {
    const { classes, className, style = {}, color, scale, base } = props;
    const scaledSize = base || BASE_SIZE * Math.ceil(scale || 1);
    const svgStyle = Object.assign({ minWidth: `${scaledSize}px`, minHeight: `${scaledSize}px` }, style);
    return (React.createElement("svg", { viewBox: '0 0 16 16', className: cx(classes.root, className), style: svgStyle, color: color, ref: ref },
        React.createElement("defs", null,
            React.createElement("path", { d: 'M11 0l4 4v12H1V0h10zm-.414 1H2v14h12V4.414L10.586 1zM8 11V7H6V6h3v5h2v1H6v-1h2zM7 4h2v1H7V4z', id: 'legalInfo16_svg__a' })),
        React.createElement("g", { fillRule: 'evenodd' },
            React.createElement("mask", { id: 'legalInfo16_svg__b' },
                React.createElement("use", { xlinkHref: '#legalInfo16_svg__a' })),
            React.createElement("use", { fillRule: 'nonzero', xlinkHref: '#legalInfo16_svg__a' }),
            React.createElement("g", { mask: 'url(#legalInfo16_svg__b)' },
                React.createElement("path", { d: 'M0 0h16v16H0z' })))));
});
SvgLegalInfo16.displayName = 'SvgLegalInfo16';
export default withStyles(styles)(SvgLegalInfo16);
//# sourceMappingURL=LegalInfo16.js.map