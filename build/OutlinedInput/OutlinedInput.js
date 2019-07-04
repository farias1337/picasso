"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const styles_1 = require("@material-ui/core/styles");
const OutlinedInput_1 = __importDefault(require("@material-ui/core/OutlinedInput"));
const helpers_1 = require("@material-ui/core/utils/helpers");
const styles_2 = __importDefault(require("./styles"));
const OutlinedInput = (_a) => {
    var { classes, className, style, id, name, placeholder, autoFocus, autoComplete, multiline, rows, rowsMax, width, disabled, inputComponent, inputProps, inputRef, value, type, error, startAdornment, endAdornment, onChange } = _a, rest = __rest(_a, ["classes", "className", "style", "id", "name", "placeholder", "autoFocus", "autoComplete", "multiline", "rows", "rowsMax", "width", "disabled", "inputComponent", "inputProps", "inputRef", "value", "type", "error", "startAdornment", "endAdornment", "onChange"]);
    return (react_1.default.createElement(OutlinedInput_1.default
    // eslint-disable-next-line react/jsx-props-no-spreading
    , Object.assign({}, rest, { classes: {
            root: classnames_1.default(classes.root, classes[`root${helpers_1.capitalize(width)}`]),
            input: classes.input,
            inputMultiline: classes.inputMultiline
        }, className: className, style: style, labelWidth: 0, fullWidth: width === 'full', disabled: disabled, error: error, inputComponent: inputComponent, inputProps: inputProps, inputRef: inputRef, value: value, type: type, startAdornment: startAdornment, endAdornment: endAdornment, id: id, name: name, placeholder: placeholder, autoFocus: autoFocus, autoComplete: autoComplete, multiline: multiline, rows: rows, rowsMax: rowsMax, onChange: onChange })));
};
OutlinedInput.defaultProps = {
    width: 'auto'
};
exports.default = styles_1.withStyles(styles_2.default)(OutlinedInput);
//# sourceMappingURL=OutlinedInput.js.map