FROM oven/bun

WORKDIR /app

EXPOSE 3333

COPY . .

RUN bun i 

CMD ["bun","run","start"]
