FROM node:22-alpine3.19

COPY . /app
WORKDIR /app
RUN ["npm", "install"]

EXPOSE 4000

CMD ["npm", "run", "start"]
