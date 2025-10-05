#!/bin/bash
echo "Stopping Next.js application..."

systemctl stop docbooker;

# Stop nginx to prevent conflicts during deployment


echo "Application stopped successfully"
