FROM node:20-alpine
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

ENV PORT=4050
ENV HOSTNAME=0.0.0.0

EXPOSE 4050

CMD ["npm", "run", "start", "--", "-p", "4050"]