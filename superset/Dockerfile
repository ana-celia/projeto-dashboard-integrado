FROM apache/superset:latest

USER root

# Instalar dependências adicionais
RUN pip install redis psycopg2-binary

# Copiar configurações
COPY superset_config.py /app/
COPY init-superset.sh /app/

# Dar permissão de execução
RUN chmod +x /app/init-superset.sh

USER superset

CMD ["/app/init-superset.sh"]