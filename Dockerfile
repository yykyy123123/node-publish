# 基础镜像为node
FROM node:16-alpine


WORKDIR  /code

#  将Dockerfile当前目录下所有文件拷贝至容器内项目目录并安装项目依赖
ADD .  /code
RUN npm config set registry https://registry.npm.taobao.org && npm install

# 容器对外暴露的端口号，要和node项目配置的端口号一致
EXPOSE 3000
CMD npm run start