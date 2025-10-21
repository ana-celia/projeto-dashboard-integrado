import os

# Database do Superset
SQLALCHEMY_DATABASE_URI = os.getenv(
    'SUPERSET_DATABASE_URL', 
    'postgresql://admin:admin123@postgres:5432/superset'
)

FEATURE_FLAGS = {
    "EMBEDDED_SUPERSET": True,
    "ENABLE_TEMPLATE_PROCESSING": True,
}

PUBLIC_ROLE_LIKE_GAMMA = True
ENABLE_PROXY_FIX = True

# Cache com Redis
CACHE_CONFIG = {
    'CACHE_TYPE': 'RedisCache',
    'CACHE_DEFAULT_TIMEOUT': 300,
    'CACHE_KEY_PREFIX': 'superset_',
    'CACHE_REDIS_URL': 'redis://redis:6379/0'
}