#!/bin/bash

# Fix Navbar
sed -i \
  -e 's/bg-white\/95 backdrop-blur-md border-b border-slate-200\/80 text-slate-900/bg-blue-600 border-b border-blue-500\/50 text-white/g' \
  -e 's/text-slate-900 group-hover:text-blue-600/text-white group-hover:text-orange-300/g' \
  -e 's/text-slate-500 font-bold mt-1/text-blue-200 font-bold mt-1/g' \
  -e 's/text-slate-600/text-white/g' \
  -e 's/hover:text-blue-600/hover:text-orange-300/g' \
  src/components/Navbar.tsx

# Fix Hero
sed -i \
  -e 's/bg-white text-slate-900/bg-blue-600 text-white/g' \
  -e 's/text-slate-900/text-white/g' \
  -e 's/text-blue-600 underline/text-white underline/g' \
  -e 's/text-slate-600/text-blue-100/g' \
  -e 's/bg-orange-600\/10 border-l-4 border-orange-600/bg-blue-700\/50 border-l-4 border-white/g' \
  -e 's/text-blue-600 uppercase/text-white font-black uppercase/g' \
  src/components/HeroSection.tsx

