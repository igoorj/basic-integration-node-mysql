FROM mysql:5.7

ENV MYSQL_DATABASE=nodedb \
    MYSQL_ROOT_PASSWORD=root

RUN sudo chmod 755 -R .
ADD tabela_people.sql /docker-entrypoint-initdb.d