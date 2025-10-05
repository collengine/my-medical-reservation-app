#!/bin/bash
echo "Installing dependencies and setting up application..."
# Create application directory if it doesn't exist
mkdir -p /var/www/docbooker
# Set proper ownership and permissions
chown -R nginx:nginx /var/www/docbooker
chmod -R 755 /var/www/docbooker
cp -rf .next/static/*  /var/www/docbooker
cp -rf .next/standalone/*  /var/www/docbooker
# Install Node.js if not present
if ! command -v node &> /dev/null; then
    yum install -y nodejs npm
fi

echo "Dependencies installed successfully"
