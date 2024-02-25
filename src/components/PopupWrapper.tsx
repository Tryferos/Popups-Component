import React, { useState, useEffect, useContext, createContext, ReactNode, FC, ComponentProps, useRef } from "react";
import PopupElement from "./PopupElement";
import PopupToastElement from "./PopupToastElement";

export type PopupType = (ComponentProps<typeof PopupElement>['popups']) extends Array<infer Item> ? Item : never;
export type ToastType = (ComponentProps<typeof PopupToastElement>['toasts']) extends Array<infer Item> ? Item : never;


type handlePopupProps = {
    popup: PopupType | null;
    title?: string | undefined;
    data?: unknown | undefined
}
type handleToastProps = {
    toast: ToastType | null;
    title?: string | undefined;
    data?: unknown | undefined
}

const PopupContext = createContext({ popup: null, changePopup: ({ popup, title, data }: handlePopupProps) => { }, closePopup: () => { }, title: '', data: null }) as
    React.Context<{ popup: PopupType | null; changePopup: ({ popup, title, data }: handlePopupProps) => void, closePopup: () => void; title: string, data: unknown }>;

const ToastContext = createContext({ toast: null, changeToast: ({ toast, title, data }: handleToastProps) => { }, closeToast: () => { }, title: '', data: null }) as
    React.Context<{ toast: ToastType | null; changeToast: ({ toast, title, data }: handleToastProps) => void, closeToast: () => void; title: string, data: unknown }>;

export function PopupWrapper(props: { children: ReactNode }) {
    const { children } = props;
    const [popup, setPopup] = useState<PopupType | null>(null);
    const [popupTitle, setPopupTitle] = useState<string>('');
    const [popupData, setPopupData] = useState<unknown | null>(null);

    const [toast, setToast] = useState<ToastType | null>(null);
    const [toastTitle, setToastTitle] = useState<string>('');
    const [toastData, setToastData] = useState<unknown | null>(null);

    const changeToast = ({ toast, title, data }: handleToastProps) => {
        if (toast == null) {
            closeToast()
        }
        setToast(toast);
        setToastData(data);
        setToastTitle(title as string);
    }
    const closeToast = () => {
        setToast(null);
        setToastData(null);
        setToastTitle('');
    }
    const changePopup = ({ popup, title, data }: handlePopupProps) => {
        if (popup == null) {
            closePopup()
        }
        setPopup(popup);
        setPopupData(data);
        setPopupTitle(title as string);
    }
    const closePopup = () => {
        setPopup(null);
        setPopupData(null);
        setPopupTitle('');
    }


    return (
        <PopupContext.Provider value={{ popup: popup, changePopup: changePopup, closePopup: closePopup, title: popupTitle, data: popupData }}>
            <ToastContext.Provider value={{ toast: toast, changeToast: changeToast, closeToast: closeToast, title: toastTitle, data: toastData }}>
                {children}
            </ToastContext.Provider>
        </PopupContext.Provider>
    )
}

export const usePopup = () => useContext(PopupContext);
export const useToast = () => useContext(ToastContext);