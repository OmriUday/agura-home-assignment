# My React App

## Setup & Run

1. Clone the repository:
   ```bash (in the terminal)
   git clone <https://github.com/OmriUday/agura-home-assignment.git>
   cd agura-home-assignment
   ```

dev docker :
docker build -t agura-home-assignment-dev -f Dockerfile.dev .

docker run -p 3000:9000 -v $(pwd):/usr/src/app --name omri-assigment-container-dev agura-home-assignment-dev

prod docker :
docker build -t agura-home-assignment-prod -f Dockerfile.prod .

docker run -p 8080:3000 --name omri-assigment-container-prod agura-home-assignment-prod
