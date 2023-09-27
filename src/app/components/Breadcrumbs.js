import React from "react";
import { useRouter } from 'next/router';
import Link from "next/link";
import 'tailwindcss/tailwind.css'

const Breadcrumbs = () => {
    const router = useRouter();

    const pathSegments = router.asPath ? router.asPath.split("/").filter((segment) => segment) : [];
   
    
    return(
        <div className=" hover:italic p-3 "> 
            <ul className="flex justify-center">
                <li>
                    <Link className='text-gray-600 font-semibold' href="/">
                        Home
                    </Link> &gt;
                </li>

                {pathSegments.map((segment, index) => (
                        <li key={index} > 
                            <Link className="text-gray-600 hover:text-gray-500 font-semibold"
                                href={`/${pathSegments.slice(0, index + 1).join('/')}`}>
                                {segment} 
                            </Link>
                                {index < pathSegments.length - 1 && ' > '}
                        </li>
                ))}
            </ul>
        </div>

    )
}

export default Breadcrumbs;