'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface StatItem {
  value: string;
  label: string;
}

const STATS_DATA: StatItem[] = [
  { value: "+ 1500", label: "PARTICIPANTES" },
  { value: "+ 200", label: "PRODUCTORES" },
  { value: "+ 120", label: "SPONSORS" },
  { value: "+ 70", label: "ORADORES" },
  { value: "+ 45", label: "EXPOSITORES" },
  { value: "+ 20", label: "INSTITUCIONES" }
];

/**
 * Stats Component.
 */
export default function Stats() {
  return (
      <div className="max-w-full mx-auto px-4 sm:px-12 relative z-10 w-full">
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-y-8 gap-x-4 xl:gap-x-0 text-center w-full">
          {STATS_DATA.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className={`flex flex-col items-center justify-center py-2 xl:border-r border-neutral-800/50 ${
                idx === STATS_DATA.length - 1 ? 'xl:border-r-0' : ''
              }`}
            >
              <p className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-white font-sans select-none">
                <span className="text-[#D74E2A] mr-1">{stat.value.split(' ')[0]}</span>
                {stat.value.split(' ')[1]}
              </p>
              <p className="text-[9px] font-black tracking-[0.2em] text-neutral-400 mt-1.5 uppercase font-sans">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
  );
}