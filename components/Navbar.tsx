'use client'
import { useState } from 'react';
import { FaTerminal, FaGlobe } from 'react-icons/fa6';
// Assuming '@/config/styles.module.css' contains the necessary .glassEffect style
import styles from '@/config/styles.module.css'; 
import { LuMail } from 'react-icons/lu';
import { BsChat } from 'react-icons/bs';
import { MdCalendarToday, MdPerson } from 'react-icons/md';

// Ensure these components are available in their respective paths
import Window from "@/components/Window";
import About from "@/components/About";
import Contact from './Contact';
import Chat from './Chat';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';


const Navbar = () => {
    const [activeWindowId, setActiveWindowId] = useState<number | null>(null); 

    const handleClose = () => {
        setActiveWindowId(null); 
    };

    const handleMinimize = () => {
        setActiveWindowId(null); 
    };

    const windowActions = [
        { id: 1, color: 'red', icon: 'x', action: handleClose }, 
        { id: 2, color: 'orange', icon: '-', action: handleMinimize },
        { id: 3, color: 'green', icon: '/', action: () => {/* Maximize logic */ } },
    ];
    
    const data = [
        {
            id: 1,
            icon: <MdPerson />,
            background: '#0c73e9',
            text: 'white',
            title: "About Me",
            component: About,
        },
        {
            id: 2,
            icon: <FaGlobe />,
            background: 'skyblue',
            text: 'white',
            title: "My Projects",
            component: Projects,
        },
        {
            id: 3,
            icon: <FaTerminal />,
            background: '#272733',
            text: 'white',
            title: "Skills & Terminal",
            component: Skills,
        },
        {
            id: 4,
            icon: <MdCalendarToday />,
            background: 'white',
            text: 'red',
            title: "Work Experience",
            component: Experience,
        },
        {
            id: 5,
            icon: <BsChat />,
            background: '#0aeb60',
            text: 'white',
            title: "Chat Bot",
            component: Chat,
        },
        {
            id: 6,
            icon: <LuMail />,
            background: '#0a64eb',
            text: 'white',
            title: "Contact",
            component: Contact,
        },
    ];

    const ActiveComponent = data.find(d => d.id === activeWindowId);

    return (
        <>
            <nav className={`${styles.glassEffect} 
                fixed bottom-10 left-0 right-0 m-auto 
                px-2 sm:px-4 space-x-1 sm:space-x-2 
                py-3 rounded-2xl items-end h-16 sm:h-20 
                w-fit flex z-50`}> 

                {data.map(d => (
                    <div 
                        key={d.id} 
                        className='text-xl text-black group mt-auto'
                        onClick={() => setActiveWindowId(d.id)} // Set the active window ID on click
                    >
                        <p 
                            style={{background:d.background, color:d.text}} 
                            className='font-bold rounded-2xl transition cursor-pointer
                            duration-300 ease-in-out transform group-hover:-translate-y-1
                            text-xl sm:text-2xl 
                            
                            p-3 sm:p-4 hover:scale-110' // Added small scale for better bounce effect
                        >
                            { d.icon}
                        </p>
                    </div>
                ))}
            </nav>

            {ActiveComponent && (
                <Window
                    children={<ActiveComponent.component />}
                    title={ActiveComponent.title}
                    key={activeWindowId} 
                    actionData={windowActions}
                    onClose={handleClose}
                    onMinimized={handleMinimize} 
                />
            )}
        </>
    );
}

export default Navbar;