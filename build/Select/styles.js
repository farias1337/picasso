import { createStyles } from '@material-ui/core/styles';
import { PicassoProvider } from '../Picasso';
import '../InputLabel/styles';
import '../InputBase/styles';
import '../OutlinedInput/styles';
import '../Menu/styles';
import '../MenuItem/styles';
import { alpha } from '../styles';
PicassoProvider.override(() => ({
    MuiSelect: {
        select: {
            '&:focus': {
                backgroundColor: 'transparent'
            }
        },
        selectMenu: {
            minHeight: 'auto',
            lineHeight: '1em'
        }
    }
}));
export default ({ sizes: { input }, palette }) => createStyles({
    rootFull: {
        width: '100%',
        display: 'flex'
    },
    rootShrink: {
        width: 'auto',
        '& $input': {
            paddingRight: `calc(${input.padding} + 1em)`
        }
    },
    rootAuto: {},
    input: {
        paddingRight: `calc(${input.padding} + 1em)`
    },
    inputRootNative: {
        paddingLeft: input.padding,
        paddingRight: `calc(${input.padding} + 1em)`
    },
    inputNative: {
        fontSize: '0.8125em',
        padding: 0,
        paddingRight: 0
    },
    inputPlaceholder: {
        color: palette.grey.main2
    },
    inputPlaceholderDisabled: {
        color: alpha(palette.grey.main2, 0.48)
    },
    inputValue: {
        fontSize: '0.8125em'
    },
    select: {
        width: '100%'
    },
    caret: {
        top: 'calc(50% - 0.5em)',
        // in specs right spacing is defined relative to 6px icon width, while we use 16px
        // so 5px are left instead of 10px when we use wider icon.
        right: '0.3125em',
        color: palette.grey.dark,
        fontSize: '1em'
    },
    caretDisabled: {
        color: alpha(palette.grey.dark, 0.48)
    },
    placeholder: {
        opacity: 0.4
    },
    placeholderOption: {
        '&[data-value=""]': {
            backgroundColor: 'initial',
            color: 'initial',
            '&:hover, &:focus': {
                backgroundColor: 'initial',
                color: 'initial'
            }
        }
    }
});
//# sourceMappingURL=styles.js.map