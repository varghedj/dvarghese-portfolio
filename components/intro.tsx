'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa'

export default function Intro() {
  return (
    <section className='mb-28 max-w-[50rem] text-center sm:mb-0'>
      <div className='flex items-center justify-center'>
        <div className='relative'>
          {/*Note /public folder is searched for images by default*/}
          <motion.div
            initial={{ opacity: 0, scale: 0 }} 
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: .2,
            }}
          >
            <Image src='/temp-headshot.png' alt='portrate' 
              width='192'
              height='192'
              quality='95'
              priority={true}
              className='h-24 w-24 
              rounded-full object-cover 
              border-[.35rem] border-white 
              shadow-xl'
            />
          </motion.div>

          <motion.span
          className='text-4xl
          absolute
          bottom-0 right-0'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: .1,
              duration: .7,
            }}
          >
            ♌
          </motion.span>
        </div>
      </div>
      <motion.p
        className='mb-10 mt-4 px-4 text 2xl font-medium !leading-[1.5] sm:text-4xl'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className='font-bold'>Hello, I'm Dylan.</span> I'm a{" "}
        <span className='font-bold'>System Administrator</span> seeking a{" "}
        <span className='font-bold'>DevOps</span> or {" "} 
        <span className='font-bold'>Software Engineering</span> role. I'm ready to apply my {" "}
        <span className='underline'>detail-oriented thinking</span>, {" "}
        <span className='underline'>agility</span>, and {" "} 
        <span className='underline'>teamwork</span>{" "} in order to deliver innovative software solutions.
      </motion.p>
      
      <motion.div 
        className='flex flex-col sm:flex-row
        items-center justify-center gap-2
        px-4 text-lg font-medium'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0}}
        transition={{
          delay: 0.1,
        }}

      >
        <Link href='#contact'
          className='group bg-gray-900 text-white 
          px-7 py-3 flex 
          items-center gap-2
          rounded-full outline-none
          focus:scale-110 hover:scale-110 
          hover:bg-gray-950 active:scale-105
          transition'
        >
          Contact me
          <BsArrowRight className='opacity-80 group-hover:translate-x-1 
          transition' 
          />
        </Link>
        <a
          className='group bg-white 
          px-7 py-3 
          flex items-center 
          gap-2 rounded-full
          outline-none
          focus:scale-110 hover:scale-110 
          active:scale-105
          transition
        '> 
          Download My Resume
          <HiDownload className='opacity-60 
          group-hover:animate-download-icon transition'/>
        </a>
        <a
          className='bg-white text-gray-700
          p-4
          flex items-center 
          gap-2 rounded-full'> 
          <BsLinkedin />
        </a>
        <a
          className='bg-white text-gray-700
          p-4 text-[1.35rem]
          flex items-center 
          gap-2 rounded-full'> 
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  )
}
