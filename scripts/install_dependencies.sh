#!/bin/bash
echo "Installing dependencies and setting up application..."

# Create application directory if it doesn't exist
mkdir -p /var/www/docbooker

# Set proper ownership and permissions
chown -R nginx:nginx /var/www/docbooker
chmod -R 755 /var/www/docbooker

# Install Node.js if not present
if ! command -v node &> /dev/null; then
    yum install -y nodejs npm
fi

# Navigate to application directory and install dependencies
cd /var/www/docbooker
if [ -f package.json ]; then
    npm install --production
fi

echo "Dependencies installed successfully"
