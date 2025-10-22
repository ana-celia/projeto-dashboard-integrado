#!/bin/bash
set -e
set -u

function create_user_and_database() {
    local database=$1
    echo "🟡 Criando database '$database'"
    psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
        CREATE DATABASE $database;
        GRANT ALL PRIVILEGES ON DATABASE $database TO $POSTGRES_USER;
EOSQL
}

if [ -n "$POSTGRES_MULTIPLE_DATABASES" ]; then
    echo "🚀 Iniciando criação de múltiplos databases: $POSTGRES_MULTIPLE_DATABASES"
    
    # Aguardar PostgreSQL ficar pronto
    while ! pg_isready -U $POSTGRES_USER; do
        echo "⏳ Aguardando PostgreSQL ficar pronto..."
        sleep 2
    done
    
    for db in $(echo $POSTGRES_MULTIPLE_DATABASES | tr ',' ' '); do
        create_user_and_database $db
    done
    echo "✅ Todos os databases criados com sucesso!"
else
    echo "ℹ️ Nenhum database adicional para criar"
fi