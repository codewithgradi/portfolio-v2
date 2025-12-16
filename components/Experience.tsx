import { FaCertificate } from "react-icons/fa"

export default function Experience() {
    const certifications = [
        {id:1,name:'IBM Web Development Fundamentals',issuedBy:'IBM'},
        { id: 2, name: 'Full Stack Web Development', issuedBy: 'FNB APP ACADEMY' },
        { id: 3, name: 'Responsive Web Design', issuedBy: 'FREECODECAMP' },
        { id: 4, name: 'Fundamental C# With Microsoft', issuedBy: 'FREECODECAMP' },
        { id: 5, name: 'Data Analysis with Python', issuedBy: 'FREECODECAMP' },
        { id: 6, name: 'Python Basics', issuedBy: 'HACKER RANK' },
        { id: 7, name: 'SQL Basics', issuedBy: 'HANKER RANK' },
    ]
    const experienceData = [
        {id:1,start:'JAN 2025',to:'PRESENT',role:'Basketball Coach',company:'Eden College',description:'Coaching the first team basketball with 12 player in my team'},
        {id:2,start:'JUN 2025',to:'NOV 2025',role:'Junior Web Developer',company:'Pasculus Design',description:'Building dynamic websites for clients with wordpress and nextjs'},
    ]
    return (
        <div className="bg-white">
            <div className="flex justify-between p-2 font-bold">
                <h1 className="font-bold opacity-70 text-2xl">Work Experience</h1>
                <p className="text-red-500">Today</p>
            </div>
            <div className="p-3">
                {experienceData.map(exp => (
                    <div key={Math.random()} className="px-6 border-l-2 border-l-red-200 my-4">
                        <p className="opacity-60 font-bold">{exp.start} - {exp.to}</p>
                        <h1 className="text-xl font-bold opacity-85">{ exp.role}</h1>
                        <p className="opacity-50">{exp.company}</p>
                        <p className="px-3 bg-neutral-400 opacity-40 py-2 rounded-t-md rounded-b-md">{ exp.description}</p>
                    </div>
                ))}
            </div>
            <div className="p-3 text-sm">
                <h1 className="font-bold text-lg opacity-70 border-t py-2 border-t-neutral-400">Certifications</h1>
                <div className="">
                    {certifications.map(cert => (
                        <div key={Math.random()} className="flex justify-between items-center w-fit space-x-6 my-3 px-3">
                            <FaCertificate className="text-yellow-400"/>
                            <p className="opacity-80">{cert.name} - { cert.issuedBy}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}