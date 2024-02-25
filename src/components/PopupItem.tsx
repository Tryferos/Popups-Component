import React, { Fragment } from "react";
import { PopupType, ToastType, usePopup, useToast } from "./PopupWrapper";

type PopupItemProps = {
    popup: PopupType;
    element: React.ReactNode;
}
type ToastItemProps = Pick<PopupItemProps, 'element'> & { toast: ToastType };

export function PopupItem(props: PopupItemProps) {
    const { popup } = usePopup();
    if (props.popup.toLowerCase() != popup?.toLowerCase()) return null;
    return <Fragment>{props.element}</Fragment>
}

export function ToastItem(props: ToastItemProps) {
    const { toast } = useToast();
    if (props.toast.toLowerCase() != toast?.toLowerCase()) return null;
    return <Fragment>{props.element}</Fragment>
}