import React, { ReactNode, forwardRef } from "react";
import { usePopup } from "./PopupWrapper";
import { AnimatePresence, motion } from 'framer-motion';
import { CloseIcon } from "./svg";
import { PopupItem } from "./PopupItem";

export const PopupElement = forwardRef<HTMLDivElement, { children: ReactNode }>((props, ref) => {
    const { popup, changePopup, title, closePopup } = usePopup();

    return (
        <div
            className={`absolute top-0 left-0 w-[100vw] h-[100vh] ${popup == null ? 'pointer-events-none bg-none' : 'bg-opacity-20 bg-slate-900'} z-[9999] flex justify-center`}>
            <AnimatePresence>
                {
                    popup ? (
                        <motion.div initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.2 }} exit={{ opacity: 0, scale: 0.6 }}
                            ref={ref} className={`bg-white shadow-[0px_0px_20px_4px_rgba(0,0,0,0.2)] w-[50%] min-w-[400px] font-sans 
                            rounded-md relative max-w-[850px] max-h-[70%] min-h-[200px] mt-[75px] z-[120]`}>
                            <div className="w-full h-[10%] border-b-gray-300 border-b-[1px] items-center flex justify-center px-6 relative">
                                <p className="text-lg font-medium">{title}</p>
                                <div className="absolute right-6"><CloseIcon onClick={() => closePopup()} /></div>
                            </div>
                            <section className="p-4 overflow-y-auto max-h-[85%] scrollbar">
                                {props.children}
                            </section>
                            <div className="absolute bottom-2 h-[2px] w-[20%] left-[40%] bg-slate-500"></div>
                        </motion.div>
                    ) : null
                }
            </AnimatePresence>
        </div>
    )
});

export default PopupElement;