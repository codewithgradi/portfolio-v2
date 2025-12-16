import { motion } from 'framer-motion'

export default function Skills() {
    return (
        <section className="text-white opacity-90">
            <p><span className="text-sky-400">
                gradi@macbook</span>
                <span
                    className="text-green-400"
                >:~$ list_skills.py</span>
            </p>
            <div className="px-4">
                <div className="py-3">
                    <h1 className=" underline decoration-2 decoration-green-500">Languages & Data:</h1>
                    <ul className=" space-x-6 list-disc flex justify-between w-fit pl-4 text-green-400 ">
                        <li>Python</li>
                        <li>Typescript / Javascript</li>
                        <li>SQL</li>
                    </ul>
                </div>
                <div className="py-3">
                    <h1 className=" underline decoration-2 decoration-green-500">Databases & Cloud:</h1>
                    <ul className=" space-x-6 list-disc flex justify-between w-fit pl-4 text-green-400 " >
                        <li>Firebase</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
                <div className="py-3">
                    <h1 className=" underline decoration-2 decoration-green-500">Frameworks & Deployment:</h1>
                    <ul className="space-x-6 list-disc flex justify-between w-fit pl-4 text-green-400 ">
                        <li>NextJs</li>
                        <li>FastAPI</li>
                        <li>Vercel</li>
                    </ul>
                </div>
                <div className="py-3">
                    <h1 className=" underline decoration-2 decoration-green-500">Tools:</h1>
                    <ul className="space-x-6 list-disc flex justify-between w-fit pl-4 text-green-400 ">
                        <li>VS Code</li>
                        <li>PyCharm</li>
                        <li>Git</li>
                    </ul>
                </div>
            </div>
            <motion.div
                animate={{ opacity: [0.5,1,0.5]}}
                transition={{
                    duration: 1.5,
                    ease: 'easeInOut',
                    times: [0, 0.5, 1],
                    repeat: Infinity,
                    repeatType:'loop',
                }}
            >
                <span className="text-sky-400">gradi@macbook</span>
                <span className="text-green-400">:~$</span>
                <span className=" mx-2 bg-neutral-500 px-1 py-0.5"></span>
            </motion.div>
            
        </section>
    )
}