#!/bin/bash
set -e

if [ ! -d "vendor" ]; then
    echo "Vendor directory not found. Installing dependencies..."
    composer install --no-interaction --optimize-autoloader
fi

echo "Fixing storage and cache permissions..."
chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

echo "Running optimizations..."
php artisan optimize:clear

echo "Waiting for database connection..."
until php -r "try { new PDO('mysql:host='.getenv('DB_HOST').';port='.getenv('DB_PORT').';dbname='.getenv('DB_DATABASE'), getenv('DB_USERNAME'), getenv('DB_PASSWORD')); exit(0); } catch(Exception \$e) { exit(1); }"; do
  sleep 2
done

echo "Running migrations..."
php artisan migrate --force

echo "Starting Apache..."
exec apache2-foreground
