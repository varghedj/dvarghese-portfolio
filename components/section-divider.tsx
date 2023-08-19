'use client'

import React from 'react'
import { delay, motion } from 'framer-motion'

export default function SectionDivider() {
  return (
    <motion.div className=' flex items-center justify-center
    text-gray-200 text-2xl
    my-24 h-16 
    rounded-full hidden 
    sm:block'
    //'bg-gray-200 
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0}}
      transition={{ delay: 0.125 }}
    >
      🌸
    </motion.div>
  )
}
