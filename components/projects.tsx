'use client'

import Image from 'next/image'
import React from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import Project from './project'
import { useSectionInView } from '@/lib/hooks'

export default function Projects() {
  const { ref } = useSectionInView('Projects', .6)

  return (
    <section id='projects'
    className='scroll-mt-[16rem]'
    ref = {ref}
    >
      <SectionHeading>My Projects</SectionHeading>

      <div>
        {
          projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          ))
        }
      </div>
    </section>
  )
}