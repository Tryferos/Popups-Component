import React, { useState, useEffect, useContext, createContext, ReactNode, FC, ComponentProps, useRef } from "react";
import PopupElement from "./PopupElement";

export type PopupType = (ComponentProps<typeof PopupWrapper>['popups']) extends Array<infer Item> ? Item : never;


type handlePopupProps = {
    popup: PopupType | null;
    title?: string | undefined;
    data?: unknown | undefined
}

const PopupContext = createContext({ popup: null, changePopup: ({ popup, title, data }: handlePopupProps) => { }, closePopup: () => { }, title: '', data: null }) as
    React.Context<{ popup: PopupType | null; changePopup: ({ popup, title, data }: handlePopupProps) => void, closePopup: () => void; title: string, data: unknown }>;

export function PopupWrapper(props: { children: ReactNode, popups: Array<string> }) {
    const { children } = props;
    const ref = useRef<HTMLDivElement>(null)
    const [popup, setPopup] = useState<PopupType | null>(null);
    const [popupData, setPopupData] = useState<unknown | null>(null);
    const [title, setTitle] = useState<string>('');
    useEffect(() => {
        if (popup == null) {
            closePopup();
            return;
        }
        if (!props.popups.some(item => (item.toLowerCase() == popup.toLowerCase()))) {
            closePopup();
        }

    }, [popup, props.popups])

    useEffect(() => {
        if (!ref || !ref.current) return;
        const parentElement = ref.current.parentElement;


    }, [ref])

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
            <PopupElement ref={ref}>
                {children}
            </PopupElement>
        </PopupContext.Provider>
    )
}

export const usePopup = () => useContext(PopupContext);