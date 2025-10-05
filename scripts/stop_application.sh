#!/bin/bash
echo "Stopping Next.js application..."

# Kill any existing Node.js processes running on port 3000
pkill -f "node.*server.js" || true
pkill -f "next.*start" || true

# Stop nginx to prevent conflicts during deployment
systemctl stop nginx || true

echo "Application stopped successfully"
