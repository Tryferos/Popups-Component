import React, { useState, useEffect, useContext, createContext, ReactNode, FC, ComponentProps, useRef } from "react";
import PopupElement from "./PopupElement";

export type PopupType = (ComponentProps<typeof PopupElement>['popups']) extends Array<infer Item> ? Item : never;


type handlePopupProps = {
    popup: PopupType | null;
    title?: string | undefined;
    data?: unknown | undefined
}

const PopupContext = createContext({ popup: null, changePopup: ({ popup, title, data }: handlePopupProps) => { }, closePopup: () => { }, title: '', data: null }) as
    React.Context<{ popup: PopupType | null; changePopup: ({ popup, title, data }: handlePopupProps) => void, closePopup: () => void; title: string, data: unknown }>;

export function PopupWrapper(props: { children: ReactNode }) {
    const { children } = props;
    const [popup, setPopup] = useState<PopupType | null>('test1');
    const [popupData, setPopupData] = useState<unknown | null>(null);
    const [title, setTitle] = useState<string>('');


    const changePopup = ({ popup, title, data }: handlePopupProps) => {
        if (popup == null) {
            closePopup()
        }
        setPopup(popup);
        setPopupData(data);
        setTitle(title as string);
    }
    const closePopup = () => {
        setPopup(null);
        setPopupData(null);
        setTitle('');
    }


    return (
        <PopupContext.Provider value={{ popup: popup, changePopup: changePopup, closePopup: closePopup, title: title, data: popupData }}>
            {children}
        </PopupContext.Provider>
    )
}

export const usePopup = () => useContext(PopupContext);