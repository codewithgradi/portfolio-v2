import React, {  useEffect, useMemo, useState } from 'react';
import styles from '@/config/styles.module.css';
import { motion } from 'framer-motion'

interface Props {
    title: string;
    children: React.ReactNode; 
    onClose: () => void;
    onMinimized:()=>void
    actionData : WindowActions[]
}
interface WindowActions {
    id: number,
    color: string,
    icon:string,
}

const Window = ({  title, children, onClose,onMinimized }: Props) => {

    const [isMaximized, setIsMaximized] = useState(false)
    
    const handleMaximize = () => {
        setIsMaximized(false); 
    };

    const handleClose = onClose;
    

    const handleMinimize = onMinimized;
    
    const actionMap: { [key: number]: () => void } = useMemo(() => ({
        1: handleClose,    
        2: handleMinimize, 
        3: handleMaximize  
    }), [handleClose, handleMinimize, handleMaximize]);

    const data = [
        {
            id: 1,
            color: 'red',
            icon: 'x',
            action: () => {
                useEffect(() => {
                    const removeFromDom = () => {
                        const win = document.getElementById('win')
                        if (!win) return
                        win.remove()
                    }
                    removeFromDom()
                }, [])
            }
        },
        {
            id: 2,
            color: 'orange',
            icon: '-',
            action: () => {
                useEffect(() => {
                    const hideWindow = () => {
                        const win = document.getElementById('win')
                        if (!win) return
                        win.style.display = 'none';
                    }
                    hideWindow()
                }, [])
            }
        },
        {
            id: 3,
            color: 'green',
            icon: '/',
            action: () => {
                 useEffect(() => {
                    const growWindow = () => {
                        const win = document.getElementById('win')
                        if (!win) return
                    
                    }
                    growWindow()      
            },[])
            }
        },
    ];
    const windowClasses = `flex flex-col ${styles.window} rounded-2xl shadow-2xl overflow-hidden
        ${isMaximized ? 'md:w-lg h-fit fixed top-0 left-0' : `md:w-fit h-10/12`}`;

    return (
        <motion.div
            initial={{ opacity: 0, x: -150,y:-150 }}
            animate={{ opacity: 1, x: 2,y:4 }}
            transition={{duration:0.8,type:'spring',stiffness:100}}
            id='win'  
            className={windowClasses }>            
            <div className='flex items-center justify-between p-2  bg-neutral-700 rounded-t-2xl shrink-0'>
                
                <div className='flex space-x-2'>
                    {data.map(d => (
                        <p
                            key={d.id}
                            onClick={actionMap[d.id]}
                            className={`rounded-full w-4 h-4 flex items-center cursor-pointer justify-center p-1 text-xs`} style={{ backgroundColor: d.color }}>
                        </p>
                    ))} 
                </div>

                <p className='text-white font-semibold text-sm truncate'>{title}</p>
                
                <div className='w-14'></div> 
            </div>

            <div className='grow  bg-neutral-800 rounded-b-2xl overflow-y-auto'>
                {children}
            </div>
        </motion.div>
    );
}

export default Window;