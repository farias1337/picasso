var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { forwardRef } from 'react';
import { withStyles } from '@material-ui/core/styles';
import cx from 'classnames';
import styles from './styles';
export const ModalActions = forwardRef(function ModalActions(_a, ref) {
    var { children, classes, className, style } = _a, rest = __rest(_a, ["children", "classes", "className", "style"]);
    return (React.createElement("div", Object.assign({}, rest, { ref: ref, className: cx(classes.root, className), style: style }), children));
});
ModalActions.displayName = 'ModalActions';
export default withStyles(styles)(ModalActions);
//# sourceMappingURL=ModalActions.js.map