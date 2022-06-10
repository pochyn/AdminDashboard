docker login --username AWS --password $(aws ecr get-login-password 2>&1) 883846757755.dkr.ecr.us-east-1.amazonaws.com

docker build -t dashboard-tool .

docker tag dashboard-tool:latest 883846757755.dkr.ecr.us-east-1.amazonaws.com/dashboard-tool:latest

docker push 883846757755.dkr.ecr.us-east-1.amazonaws.com/dashboard-tool:latest