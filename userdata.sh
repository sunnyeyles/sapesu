#!/bin/bash
# Update all packages in package manager
sudo apt update
# Install nginx web server
sudo apt install nginx -y
# Check the state of the web server
sudo systemctl status nginx