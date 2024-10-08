﻿# food-assignment

 ## project setup

**Prerequisites**:
Ensure Docker is installed and active on your system.

**How to Run the Project**

***Backend***

Automatic Start: 

1. Open a terminal in the root directory of the project.

2. Run the following command to start everything automatically:

***unix***: `chmod +x run.sh` to make the script executable

***bash***: `./run.sh`


Manual Start: 

1. Navigate to the assignment/backend folder: `cd assignment/backend`

2. Run the following command to build and start the Docker containers: `docker-compose up --build`

3. Once the containers are up, apply database migrations, generate Prisma client, and seed the
database, open another terminal, navigate to backend root folder and run:

- Apply migrations: `docker exec -i assignment-api npx prisma migrate dev --name 'some name'`

- Generate Prisma client: `docker exec -i assignment-api npx prisma generate`

- Seed the database: docker exec -it assignment-api npx prisma db seed


***Backend***

1. Navigate to the frontend folder: `cd frontend`

2.  Install dependencies: `npm install`

3.  Start the development server: `npm run dev`

4.  Open your browser through clicking vite url in the terminal or manually.



## How to improve further the function of smart search?


The current implementation of entity search in PostgreSQL relies on multiple OR conditions with contains queries. While this works for smaller datasets, performance may degrade as the data grows. One way to improve the logic is by leveraging PostgreSQL's full-text search capabilities, which provide better performance and relevance ranking by creating search vectors for more efficient matching. This allows the database to handle partial matches, typos, and better ordering of results based on relevance, improving the user experience.

Additionally, implementing caching mechanisms such as Redis can optimize performance for frequently queried terms, reducing the load on the database. This would store common queries and their results in memory.

For even larger datasets, a more scalable solution would be to adopt a dedicated search tool like Elasticsearch. 



 

