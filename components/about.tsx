'use client'

import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useActiveSectionContext } from '@/context/active-section-context'

export default function About() {
  const { ref, inView } = useInView({
    threshold: .6,
  })
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext()

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection('About') 
    }
  }, [inView, setActiveSection, timeOfLastClick])
  
  return (
    <motion.section className='mb-28 max-w-[45rem] text-center 
    leading-7 sm:mb-0 scroll-mt-[18rem]'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0}}
      transition={{ delay: .175 }}
      id='about'
      ref={ref}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className='mb-3'>
        I am an{" "}<span className='font-medium'>Engineer</span>{" "}
        by education, but I found my passion for {' '}
        <span className='font-medium'>Software Development</span>{' '}
        during the two years I spent working on my Capstone Project.
        I want to pursue a career in Software Development for two main reasons. First, my passion for the intricate puzzle-solving nature of coding. It is very satisfying to solve complex issues and craft novel solutions when building coding projects. I am also fascinated by the continuous learning and exploration the field of Software provides. Being such a new field of study, it provides ample material to latch onto and learn from.
      </p>
      <p>
        Aside from coding, I enjoy taking part in motorcycle track days, cooking, and Muay Thai kickboxing. I do my best to set small but consistent goals for myself to improve in whatever it is I am doing. Whether it be knocking a tenth of a second off my lap time, improving one of my recipes, or learning a new combo, I do my best to become 
        {' '}<span className='font-medium'>1% better every day</span>.
      </p>
    </motion.section>
  )
}
