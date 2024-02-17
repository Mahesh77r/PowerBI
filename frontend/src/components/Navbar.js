import React from 'react'
import { Link } from 'react-router-dom'
const NavLinks = [
    { name: 'Mahesh', path: '/msr' },
    { name: 'Shantanu', path: '/shan' },
    { name: 'Tilak', path: '/tilak' },
]
export const Navbar = () => {
    return (
        <div className="flex flex-col h-screen w-64 bg-gray-800">
            {/* Sidebar content */}
            <div className="flex items-center justify-center h-16 border-b border-gray-700">
                <h1 className="text-white font-bold text-xl">Team Members</h1>
            </div>

            <div className="flex flex-col flex-1 overflow-y-auto">
                {/* Links */}
                {
                    NavLinks.map((nav, i) => (

                        <Link to={nav.path} key={i} className="px-6 py-3 text-gray-400 hover:text-white hover:bg-gray-700">
                            {nav.name}
                        </Link>
                          ))
                }
            </div>
        </div>
    )
}


