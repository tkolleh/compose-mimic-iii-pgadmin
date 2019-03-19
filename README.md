## Docker compose of Postgresql, PgAdmin & Prisma for the MIMIC-III dataset

MIMIC-III (Medical Information Mart for Intensive Care III) is a large, freely-available database comprising deidentified health-related data associated with over forty thousand patients who stayed in critical care units of the Beth Israel Deaconess Medical Center between 2001 and 2012.

This project composes the following containers: 
- Postgres database setup with the MIMIC-III schema
- PgAdmin for database management
- Prisma for serving data using JavaScript

MIMIC data is not included in the containers

### Access to Postgres: 
- **URL:** `localhost:5432`
- **Username:** mimic
- **Password:** password

#### Test
Retrieve a list of patients using Postgres:

```
psql --host 127.0.0.1 --username=mimic --dbname=mimic -c 'SELECT FROM mimic.patients LIMIT 10;
```

### Access to PgAdmin: 
- **URL:** `http://localhost:5050`
- **Username:** pgadmin4@pgadmin.org
- **Password:** admin


### Access to Prisma (Playground): 
- **URL:** `http://localhost:4466`

#### Test
Retrieve a list of caregivers using GraphQL:

```
curl \
   -X POST \
   -H "Content-Type: application/json" \
   --data '{ "query": "{ caregivers { cgid } }" }' \
   http://localhost:4466/
```
#### Response

```
{
  "data" : {
    "caregivers" : [ ]
  }
}
```

### Setup
Link the database volume to a local folder i.e. `export DB_DIR="/Users/<path to dir>/postgresDB"`. Then setup the containers using `docker-compose up -d`. Install the Prisma client with: 

```
npm init -y
npm install --save prisma-client-lib
```

## References
- [PostgresSQL scripts for mimic-code](https://github.com/MIT-LCP/mimic-code)
- [Postgres container](https://hub.docker.com/_/postgres)
- [PgAdmin4 container](https://hub.docker.com/r/dpage/pgadmin4/)
