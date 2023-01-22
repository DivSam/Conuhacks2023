import React from 'react'
import { motion } from 'framer-motion'

const Handle = (spring) => {
  return (
    <motion.div style={{
        width: "20px",
        height: "20px",
        backgroundColor: "white",
        borderRadius: "40px"
    }} className="handle" layout transition={spring} />
  )
}

export default Handle