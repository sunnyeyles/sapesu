#!/bin/bash
# Update all packages in package manager
sudo apt update
# Install nginx web server
sudo apt install nginx -y
# Check the state of the web server
sudo systemctl status nginx

aws ec2 authorize-security-group-ingress \
    --group-id "sg-0c76815628b34e274" \
    --tag-specifications 'ResourceType=security-group-rule,Tags=[{Key=Name,Value=sapesu_server}]' \
    --ip-permissions IpProtocol=tcp,FromPort=3001,ToPort=3001,IpRanges="[{CidrIp=0.0.0.0/0}]" \
    IpProtocol=tcp,FromPort=80,ToPort=80,IpRanges="[{CidrIp=0.0.0.0/0}]"