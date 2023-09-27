import React from 'react';

function Layout ({ children }){
    return(
        <div className={`font-sans`}>
            <div className='w-full font-display text-lg bg-bg-image bg-no-repeat bg-cover bg-fixed'>
                {children}
            </div>
        </div>
    );
}

export default Layout;