#!/bin/bash

echo "⏳ Aguardando PostgreSQL..."
sleep 10

echo "🚀 Inicializando Superset..."

# Inicializar database
superset db upgrade

# Criar admin user
superset fab create-admin \
    --username admin \
    --firstname Admin \
    --lastname User \
    --email admin@superset.com \
    --password admin

# Inicializar Superset
superset init

echo "✅ Superset inicializado!"

# Iniciar servidor
superset run -p 8088 --with-threads --reload --debugger --host=0.0.0.0