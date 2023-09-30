'use client'

import { useSectionInView } from '@/lib/hooks'
import React from 'react'
import SectionHeading from './section-heading'

export default function Contact() {
  const { ref } = useSectionInView('Contact', .6)
  
  return (
    <section id='contact' ref={ref} 
    className='flex flex-col w-[60%] h-[50rem]
    max-w-[50rem] max-h-[10rem] sm:mb-0 gap-2
    bg-gray-600 px-6 py-3 pos-relative
    '>
      <SectionHeading>Contact Me</SectionHeading>
      
    </section>
  )
}
