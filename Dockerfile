# build step
FROM node:16.15 as build
WORKDIR /usr/src/app
COPY ./package*.json ./
COPY ./tsconfig*.json ./
RUN npm install
COPY . .
RUN npm run build

# run step
FROM node:16.15
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/package*.json ./
COPY --from=build /usr/src/app/tsconfig*.json ./
COPY --from=build /usr/src/app/public ./public
COPY --from=build /usr/src/app/.next ./.next
COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/next.config.js ./
CMD ["npm", "start"]

# export step
FROM node:16.15 as export
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/public ./public
COPY --from=build /usr/src/app/.next ./.next
COPY --from=build /usr/src/app/next.config.js ./
COPY --from=build /usr/src/app/package.json ./
COPY --from=build /usr/src/app/package-lock.json ./
RUN npm ci --only=production
RUN npm run next export
CMD ["npm", "run", "start"]