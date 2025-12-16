'use client'

import { FaBatteryEmpty, FaWifi, FaSearch } from 'react-icons/fa'
import styles from '@/config/styles.module.css'
import { useEffect, useState } from 'react'

const Top = () => {
    const [isLargeDevice, setLargeDevice] = useState(false) 
    
    // Date/Time Logic (remains the same)
    const date = new Date()
    const options = {
        weekday: 'long',
        month: 'short',
        day: 'numeric'
    } as const;
    const formattedDate = date.toLocaleDateString('en-US', options);
    const timeNow = `${date.getHours()} : ${date.getMinutes()}`

    useEffect(() => {
        const checkMobile = () => {
            if (typeof window !== 'undefined') {
                const windowSize = window.innerWidth;
                // Set the state to true/false based on the check
                setLargeDevice(windowSize >= 790)
            }
        }
        
        // Initial check
        checkMobile()

        // Add listener
        window.addEventListener('resize', checkMobile)

        // 2. FIX: Correct cleanup function
        return () => {
            window.removeEventListener('resize', checkMobile)
        }
    }, [])

    return (
        <article className={` flex text-sm justify-between items-center px-2 py-1 ${styles.glassEffect}`}>
            <div className="flex items-center justify-evenly space-x-5">
                <div className='flex items-center justify-evenly space-x-5 font-bold'>
                    <p>GP</p>
                    <p>Gradz OS</p>
                </div>
                {isLargeDevice === true && (
                    <ul className='flex items-center justify-evenly space-x-5'>
                        <li>File</li>
                        <li>Edit</li>
                        <li>View</li>
                        <li>Go</li>
                        <li>Window</li>
                        <li>Help</li>
                    </ul>
                )}
            </div>
            <ul className="flex items-center justify-between space-x-5">
                {isLargeDevice === true && <li><FaBatteryEmpty /></li>}
                <li><FaWifi /></li>
                {isLargeDevice === true && <li><FaSearch /></li>}
                <li>{formattedDate}</li>
                <li>{timeNow}</li>
            </ul>
        </article>
    )
}

export default Top