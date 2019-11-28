import React, { ChangeEvent, InputHTMLAttributes, KeyboardEvent, ReactNode, ComponentType } from 'react';
import { StandardProps } from '../Picasso';
import { Props as InputProps } from '../Input';
import { Maybe } from '../utils';
export declare type Item = {
    value?: string;
    text?: string;
};
/**
 * Alias for all valid HTML props for `<input>` element.
 * Does not include React's `ref` or `key`.
 */
declare type HTMLInputProps = InputHTMLAttributes<HTMLInputElement>;
export interface Props extends StandardProps, Omit<HTMLInputProps, 'onChange' | 'onSelect' | 'onKeyDown'> {
    /** Placeholder for value */
    placeholder?: string;
    /** Debounce time in ms for onChange event handler. Set it to 0 to disable debouncing. */
    debounceTime?: number;
    /** Width of the component */
    width?: 'full' | 'shrink' | 'auto';
    /** Shows the loading icon when options are loading */
    loading?: boolean;
    /** Allow to input any value which is not in the list of `options` */
    allowAny?: boolean;
    /** Label to show when no options were found */
    noOptionsText?: string;
    /** List of options */
    options?: Item[];
    /** The minimum number of characters a user must type before a search is performed */
    minLength?: number;
    /**  Callback invoked when item is selected */
    onSelect?: (item: Maybe<Item>, helpers: {
        resetInput: () => void;
    }) => void;
    /**  Callback invoked when typing value is changed */
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    /**  Callback invoked when key is pressed */
    onKeyDown?: (event: KeyboardEvent<HTMLInputElement>, inputValue: string | null) => void;
    /** ReactNode for labels that will be used as start InputAdornment - */
    startAdornment?: ReactNode;
    /** Custom input component */
    inputComponent?: ComponentType<InputProps>;
}
export declare const Autocomplete: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLInputElement>>;
declare const _default: React.ComponentType<Pick<Props & React.RefAttributes<HTMLInputElement>, "color" | "height" | "translate" | "width" | "hidden" | "size" | "style" | "multiple" | "disabled" | "children" | "form" | "title" | "pattern" | "ref" | "dir" | "slot" | "checked" | "required" | "value" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "className" | "contentEditable" | "contextMenu" | "draggable" | "id" | "lang" | "placeholder" | "spellCheck" | "tabIndex" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "list" | "step" | "key" | "alt" | "src" | "type" | "autoFocus" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "name" | "autoComplete" | "inputComponent" | "readOnly" | "startAdornment" | "crossOrigin" | "max" | "min" | "maxLength" | "minLength" | "accept" | "capture" | "loading" | "debounceTime" | "noOptionsText" | "options" | "allowAny"> & import("@material-ui/core/styles").StyledComponentProps<"root" | "rootFull" | "rootShrink" | "rootAuto">>;
export default _default;
