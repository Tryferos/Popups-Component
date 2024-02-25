import React, { forwardRef, useEffect } from "react";
import { ToastElementProps, usePopup } from ".";
import { PopupElementWrapper } from "./PopupElement";
import { AnimatePresence, motion } from "framer-motion";
import { CloseIcon } from "./svg";
import { useToast } from "./PopupWrapper";


const PopupToastElement = forwardRef<HTMLDivElement, ToastElementProps>
    ((props, ref) => {
        const { toast, changeToast, title, closeToast, data } = useToast();
        const { animations } = props.animations ? props : { animations: { enabled: true, duration: 0.6 } };
        const { darkMode } = props.darkMode ? props : { darkMode: false };
        const animate = animations?.enabled as boolean;
        const closeOnClickOutside = props.closeOnClickOutside ?? true;

        useEffect(() => {
            if (toast == null) {
                closeToast();
                return;
            }
            if (!props.toasts.some(item => (item.toLowerCase() == toast.toLowerCase()))) {
                closeToast();
            }

        }, [toast, props.toasts])

        const position = props.position ?? 'top-center';
        const left = position.includes('left') ? 'left-2' : position.includes('right') ? 'right-2' : '';
        const top = position.includes('top') ? 'top-2' : position.includes('bottom') ? 'bottom-2' : '';
        const translation = (position.includes('top') ? '-' : '') + '90px';

        return (
            <PopupElementWrapper darkMode={darkMode} closeOnClickOutside={closeOnClickOutside} handleClose={closeToast} itemIsOpen={toast != null}>
                <AnimatePresence>
                    {
                        toast ? (
                            <motion.div
                                initial={{ opacity: animate ? 0.6 : 1, translateY: animate ? translation : 0 }}
                                animate={{ opacity: 1, translateY: 0 }}
                                transition={{ duration: animations?.duration, bounce: 0.6, type: 'spring' }}
                                exit={{
                                    opacity: animate ? 0.6 : 1, translateY: animate ? translation : 0,
                                    transition: { duration: (animations?.duration as number) / 2, bounce: 0 }
                                }}
                                ref={ref}
                                style={{
                                    width: props.width?.width ?? '20%',
                                    maxWidth: props.width?.maxWidth ?? '450px',
                                    minWidth: props.width?.minWidth ?? '275px',
                                    maxHeight: props.height?.maxHeight ?? '128px',
                                    top: top,
                                    left: left,
                                }}
                                className={`bg-white dark:bg-slate-800 shadow-[0px_0px_20px_4px_rgba(0,0,0,0.2)] font-sans 
                            rounded-md flex flex-col min-h-[10%] mobile:min-w-[300px] ${left} ${top} fixed z-[120]`}>
                                <div className="w-full h-[10%] min-h-[32px] border-b-gray-300 border-b-[1px] items-center flex px-2 relative">
                                    <p className="text-base wireless:text-sm font-medium dark:text-white first-letter:uppercase">Product Successfully Added!</p>
                                    <div className="absolute right-2 scale-75"><CloseIcon onClick={() => closeToast()} /></div>
                                </div>
                                <section className="p-2 overflow-y-auto h-full dark:scrollbar-dark scrollbar dark:text-white">
                                    {props.children}
                                </section>
                            </motion.div>
                        ) : null
                    }
                </AnimatePresence>
            </PopupElementWrapper>
        )
    });

export default PopupToastElement;