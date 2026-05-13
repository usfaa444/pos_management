#!/bin/bash
set -e

if [ ! -d "vendor" ]; then
    echo "Vendor directory not found. Installing dependencies..."
    composer install --no-interaction --optimize-autoloader
fi

echo "Ensuring required directories exist..."
mkdir -p /var/www/html/storage/framework/sessions
mkdir -p /var/www/html/storage/framework/views
mkdir -p /var/www/html/storage/framework/cache
mkdir -p /var/www/html/storage/logs
mkdir -p /var/www/html/bootstrap/cache

echo "Fixing storage and cache permissions..."
chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache
if [ -f "/var/www/html/.env" ]; then
    chown www-data:www-data /var/www/html/.env
fi

echo "Running optimizations..."
php artisan optimize:clear

echo "Waiting for database connection..."
until php -r "
try {
    \$host = getenv('DB_HOST');
    \$port = getenv('DB_PORT');
    \$db   = getenv('DB_DATABASE');
    \$user = getenv('DB_USERNAME');
    \$pass = getenv('DB_PASSWORD');
    new PDO(\"mysql:host=\$host;port=\$port;dbname=\$db\", \$user, \$pass);
    exit(0);
} catch(Exception \$e) {
    echo 'Connection failed: ' . \$e->getMessage() . PHP_EOL;
    exit(1);
}
"; do
  sleep 2
done
echo "Database connected!"

echo "Running migrations..."
php artisan migrate --force

echo "Starting Apache..."
exec apache2-foreground
