import '../tailwind.css'
import { PopupItem } from './PopupItem';
import { PopupWrapper, usePopup } from './PopupWrapper';
import PopupElement from './PopupElement';
import { ReactNode } from 'react';
import PopupToastElement from './PopupToastElement';

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

export type ToastElementProps = Omit<PopupElementProps, 'popups'> &
{
    toasts: Array<string>;
    position?: 'top-center' | 'bottom-center' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
};

export { PopupItem, PopupWrapper, usePopup, PopupElement, PopupToastElement };