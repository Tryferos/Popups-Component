import '../tailwind.css'
import { PopupItem } from './PopupItem';
import { PopupWrapper, usePopup } from './PopupWrapper';
import PopupElement from './PopupElement';
import { ReactNode } from 'react';

type Animations = {
    enabled?: boolean;
    duration?: number;
}

type WidthProps = 'width' | 'maxWidth' | 'minWidth';

export type PopupElementProps = {
    children: ReactNode;
    popups: Array<string>;
    darkMode?: boolean;
    animations?: Animations
    closeOnClickOutside?: boolean;
    width?: Partial<{ [key in WidthProps]: string }>;
    height?: Partial<{ [key in 'maxHeight']: string }>
}

export { PopupItem, PopupWrapper, usePopup, PopupElement };