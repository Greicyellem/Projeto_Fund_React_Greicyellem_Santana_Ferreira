import Link from "next/link";
import React from "react";

function Navbar(){
    const navItems = [
        {label: 'Criador de tarefas', path: '/'},
        {label: 'Contador de tarefas', path: '/contador'},
        {label: 'Sobre', path: '/sobre'},
        {label: 'Minhas tarefas', path: '/posts'}
    ]

    return (
        <nav className="bg-rose p-4 text-md text-gray-600 font-semibold">
            <ul className="flex justify-center space-x-20">
                {navItems.map((item, index) => (
                    <li key={index}>
                        <Link href={item.path}>
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar;