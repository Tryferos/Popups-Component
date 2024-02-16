import React, { Fragment } from "react";
import { PopupType, usePopup } from "./PopupWrapper";

type PopupItemProps = {
    popup: PopupType;
    element: React.ReactNode;
}

export function PopupItem(props: PopupItemProps) {
    const { popup } = usePopup();
    if (props.popup.toLowerCase() != popup?.toLowerCase()) return null;
    return <Fragment>{props.element}</Fragment>
}