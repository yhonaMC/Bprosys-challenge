import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { AnimatedSectionProps } from './AnimateSection.type'

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  id,
  className = ''
}) => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  }

  return (
    <motion.section
      id={id}
      className={className}
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  )
}

export default AnimatedSection
