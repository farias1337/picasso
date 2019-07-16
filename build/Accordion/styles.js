"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styles_1 = require("../styles");
exports.default = ({ palette, typography }) => {
    const separatorStyles = styles_1.createPropertiesStyles({
        display: 'block',
        left: 0,
        right: 0,
        height: '1px',
        content: '""',
        opacity: 1,
        backgroundColor: palette.grey.light,
        position: 'absolute'
    });
    return {
        root: {
            '&:first-child:before': Object.assign({}, separatorStyles),
            '&:before': {
                background: 'transparent'
            },
            '&:after': Object.assign({}, separatorStyles),
            '&:nth-child(1):nth-last-child(1)': {
                '&:before, &:after': {
                    display: 'none'
                }
            },
            '&$expanded + &:before': {
                display: 'block'
            },
            background: 'transparent'
        },
        expanded: {
            margin: 0
        },
        summary: {
            color: palette.common.black
        },
        summaryFontWeightInherit: styles_1.createPropertiesStyles({
            fontWeight: 'inherit'
        }),
        expandIcon: {
            fontSize: '0.7em',
            color: palette.primary.main
        },
        details: {
            padding: 0,
            lineHeight: '1.5em',
            color: palette.grey.darker,
            fontSize: '0.875em',
            fontWeight: typography.fontWeights.regular,
            marginBottom: '0.75em'
        }
    };
};
//# sourceMappingURL=styles.js.map