# Stage 1: Dependencies
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json yarn.lock* pnpm-lock.yaml* ./
RUN npm install

# Stage 2: Builder
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build

# Stage 3: Runner
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
# Set the standalone output for smaller images if desired
# ENV NEXT_OUTPUT standalone
RUN addgroup --system --gid 1001 nextjs
RUN adduser --system --uid 1001 nextjs
COPY --from=builder /app/public ./public
# Automatically leverages output traces from `next build`
# COPY --from=builder --chown=nextjs:nextjs /app/.next/standalone ./
# COPY --from=builder --chown=nextjs:nextjs /app/.next/static ./.next/static
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs

EXPOSE 3000
CMD ["npm", "start"]