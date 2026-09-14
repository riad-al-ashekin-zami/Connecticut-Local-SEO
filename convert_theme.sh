#!/bin/bash

# Find all TSX files except FreeAudit.tsx and ThankYou.tsx (since we just created them with light theme)
find src/ -name "*.tsx" -not -name "FreeAudit.tsx" -not -name "ThankYou.tsx" | xargs sed -i \
  -e 's/bg-slate-950/bg-white/g' \
  -e 's/bg-slate-900/bg-slate-50/g' \
  -e 's/border-slate-800/border-slate-200/g' \
  -e 's/text-slate-50/text-slate-900/g' \
  -e 's/text-slate-300/text-slate-600/g' \
  -e 's/text-slate-400/text-slate-500/g' \
  -e 's/text-white/text-slate-900/g' \
  -e 's/text-orange-400/text-blue-600/g' \
  -e 's/text-orange-500/text-blue-600/g' \
  -e 's/border-orange-500\/20/border-blue-600\/20/g' \
  -e 's/bg-orange-950\/50/bg-blue-50/g' \
  -e 's/bg-gradient-to-r from-orange-400 to-orange-600/bg-gradient-to-r from-blue-600 to-indigo-600/g'

