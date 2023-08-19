'use client'

import Image from 'next/image'
import React, { useRef } from 'react'
import { projectsData } from '@/lib/data'
import { motion, useScroll, useTransform } from 'framer-motion'

type ProjectProps = (typeof projectsData)[number]

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null)

  const {scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  })
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [.8, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [.6, 1])

  return (
    <motion.div
      ref={ref} 
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className='group mb-3 sm:mb-8 last:mb-0'
    >
      <section
      className='
      bg-gray-100 max-w-[42rem] 
      border border-black/5
      overflow-hidden sm:pr-8
      relative sm:h-[20rem]
      group-even:pl-12
      hover:bg-gray-200 transition
      rounded-[1.5rem]
      '>

        <div className='pt-4 pb-6 px-5 sm:pl-6 sm:pr-2 sm:pt-8 
        sm:max-w-[50%] h-full
        flex flex-col
        group-even:ml-auto'>
          <h3 className='tex-2xl font-semibold'>{title}</h3>
          <p className='mt-2 leading-relaxed
          text-gra-700'>{description}</p>
          <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
            {tags.map((tag, index) => (
              <li className='bg-black/[.7] 
              px-3 py-1
              text-[.7rem] uppercase tracking-wider
              text-white rounded-full'
              key={index}>{tag}</li>
            ))}
          </ul>
        </div>
        

        <Image 
        src={imageUrl} 
        alt='project' 
        quality={95} 
        className='absolute top-8 -right-40
        w-[28.25rem] rounded-t-lg shadow-2xl
        grpup-even:right-[initial] group-even:-left-40
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:rotate-2 

        transition
        group-hover:scale-[1.1]
        '/>
      </section>
    </motion.div>

  )
}