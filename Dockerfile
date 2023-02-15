FROM node:alpine
WORKDIR D:\Projects\crud_api
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]
