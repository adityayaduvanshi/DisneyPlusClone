'use client';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface AnimationProps {
  children: ReactNode;
}

const Animation: React.FC<AnimationProps> = ({ children }) => {
  return <motion.div>{children}</motion.div>;
};

export default Animation;
