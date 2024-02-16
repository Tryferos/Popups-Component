import '../tailwind.css'
import { PopupItem } from './PopupItem';
import { PopupWrapper, usePopup } from './PopupWrapper';
import PopupElement from './PopupElement';
import { ReactNode } from 'react';

type Animations = {
    enabled?: boolean;
    duration?: number;
}

export type PopupElementProps = {
    children: ReactNode;
    popups: Array<string>;
    darkMode?: boolean;
    animations?: Animations
}

export { PopupItem, PopupWrapper, usePopup, PopupElement };