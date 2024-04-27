"use client";

import { PRODUCT_CATEGORIES } from '@/config';
import React, { useState } from 'react'
import NavItem from './NavItem';

const NavItems = () => {

    const [activeIndex,setActiveIndex]=useState<null| number>(null)
  return (
    <div className='flex gap-4 h-full'>
        {PRODUCT_CATEGORIES.map((category,i)=>{

          const handleOpen=()=>{
            if(activeIndex===i){
              setActiveIndex(null);
            }else{
              setActiveIndex(i);
            }
          }

          const isAnyOpen = activeIndex !== null

          const isOpen=i==activeIndex;

          const close = () => setActiveIndex(null)
          

          return(
           <NavItem category={category} handleOpen={handleOpen} isOpen={isOpen} key={category.value} isAnyOpen={isAnyOpen} close={close}
               />

          )

           
         
        })}



    </div>
  )
}

export default NavItems