"use client";

import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const pathname = usePathname();

    

    useEffect(()=>{
        setIsOpen(false);
    })
  return (
    <div>
        <div className="relative z-40 lg:hidden">
            <div className='fixed inset-0 bg-black bg-opacity-25' />

        </div>

        <div className="fixed overflow-y-scroll overscroll-y-none inset-0 z-40 flex ">
            <div className="w-4/5">
                <div className="relative flex w-full max-w-sm flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                    <div className="flex px-4 pb-2 pt-5">
                        <button>

                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MobileNav