import React, { MouseEvent, ReactNode, forwardRef, useEffect, useRef } from "react";
import { usePopup } from "./PopupWrapper";
import { AnimatePresence, motion } from 'framer-motion';
import { CloseIcon } from "./svg";
import { PopupItem } from "./PopupItem";
import { PopupElementProps } from ".";
import { twMerge } from 'tailwind-merge';


export const PopupElement = forwardRef<HTMLDivElement, PopupElementProps>
    ((props, ref) => {
        const parentElement = useRef<HTMLDivElement>(null);
        const { popup, changePopup, title, closePopup, data } = usePopup();

        const { animations } = props.animations ? props : { animations: { enabled: true, duration: 0.2 } };
        const { darkMode } = props.darkMode ? props : { darkMode: false };
        const animate = animations?.enabled as boolean;
        const closeOnClickOutside = props.closeOnClickOutside ?? true;

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

            if (!parentElement || !parentElement.current) return;

            if (darkMode) {
                parentElement.current.classList.add('dark');
                return;
            }
            parentElement.current.classList.remove('dark');

        }, [darkMode, parentElement])

        const handleClick = (ev: MouseEvent<HTMLDivElement>) => {
            if (!closeOnClickOutside) return;
            const target = ev.target as HTMLDivElement;
            if (target === parentElement.current) {
                closePopup();
            }
        }

        return (
            <div ref={parentElement}
                onClick={handleClick}
                className={`absolute top-0 left-0 w-[100vw] h-[100vh] ${popup == null ? 'pointer-events-none bg-none' : 'bg-opacity-20 bg-slate-900 dark:bg-slate-100'} z-[9999] flex justify-center`}>
                <AnimatePresence>
                    {
                        popup ? (
                            <motion.div initial={{ opacity: animate ? 0 : 1, scale: animate ? 0.6 : 1 }} animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: animations?.duration }} exit={{ opacity: animate ? 0 : 1, scale: animate ? 0.6 : 1 }}
                                ref={ref}
                                style={{
                                    width: props.width?.width ?? '50%',
                                    maxWidth: props.width?.maxWidth ?? '850px',
                                    minWidth: props.width?.minWidth ?? '400px',
                                    maxHeight: props.height?.maxHeight ?? '60%',
                                }}
                                className={`bg-white dark:bg-slate-800 shadow-[0px_0px_20px_4px_rgba(0,0,0,0.2)] font-sans 
                            rounded-md relative flex flex-col min-h-[300px] mt-[75px] z-[120]`}>
                                <div className="w-full h-[10%] min-h-[50px] border-b-gray-300 border-b-[1px] items-center flex justify-center px-6 relative">
                                    <p className="text-lg font-medium dark:text-white first-letter:uppercase">{title}</p>
                                    <div className="absolute right-6"><CloseIcon onClick={() => closePopup()} /></div>
                                </div>
                                <section className="p-4 overflow-y-auto h-full dark:scrollbar-dark scrollbar dark:text-white">
                                    {props.children}
                                </section>
                                <div className="absolute bottom-2 h-[2px] w-[20%] left-[40%] bg-slate-500 dark:bg-slate-300"></div>
                            </motion.div>
                        ) : null
                    }
                </AnimatePresence>
            </div>
        )
    });

export default PopupElement;