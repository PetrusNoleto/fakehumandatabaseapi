# humandatabaseapi

Created to test projects using names that look like real people, in any project that uses any of this data.
# documentation
- <a href ="#Get-Started">Get Started</a>
  - <a href ="#instalation">instalation</a>
  - <a href ="Environment-Variables">Environment Variables</a>
- <a href ="#comands">comands</a>
- <a href ="#erros">erros</a>
  - <a href ="#erro85690">85690</a>
  - <a href ="erro79830">79830</a>
  - <a href ="#erro48530">48530</a>
  - <a href ="#erro48960">48960</a>



## <span id = "Get-Started">Get Started</span>


### <span id = "instalation">Instalation</span> 


#### Download project

> [https://github.com/PetrusNoleto/humandatabaseapi.git](https://github.com/PetrusNoleto/humandatabaseapi.git)
> 

### <span id = "Environment-Variables" >Environment Variables</span> 

```
DATABASE_URL = "file:../database/humans.db"
```
> This project uses PRISMA ORM to manage the database, by default SQLite, which can be modified by any of your preference please see how to do it in the Prisma documentation.
> [switch database provider prisma documentation](https://www.prisma.io/docs/orm/overview/databases)

```
API_URL = "https://randomuser.me/api/?nat="      
```
```
API_PARAMETERS = "&inc=id,name,gender,email,phone,location,dob,login&”
```
```
API_SERVER = "6580”
```
> API_SERVER is default port of this project change if necessary
> 

### <span id = "commands" > Commands</span>

#### Deploy

> npm run deploy
> 

```json
"deploy": "npm install && npx prisma generate && npx prisma migrate deploy && npm run build && npm run test && npm run start"
```

#### Dev (Development Command - no compilation required)

> npm run dev
> 

```json
"dev": "npm install && npx prisma generate && npx prisma migrate dev && npm run devtest && npm run devstart",
```

### <span id = "erros" > ERROS</span>


#### <span id = "erro85690" > 85690</span> - environment variable not defined

##### solutions error (85690) - environment variable not defined
```
step 1: Verify that environment variable have been declared
```
```
step 2: verify the environment variable is empty
```
#### <span id = "erro79830" > 79830</span> - external api connection failed

##### solutions error (79830) - external api connection failed
```
step 1: Verify that environment variable ( API_URL ,  API_PARAMETERS )  have been declared
```
```
step 2: verify the environment variable ( API_URL ,  API_PARAMETERS ) is empty
```
```
step 3: verify the environment variable content
```
> correct variables = ( ```API_URL = "https://randomuser.me/api/?nat="``` , ```API_PARAMETERS = "&inc=id,name,gender,email,phone,location,dob,login&”``` )
> 

#### <span id = "erro48530" > 48530</span> - database table not find or not defined or name table incorrect

##### solutions error (48530) - database table not find or not defined or name table incorrect
```
step 1: Verify that environment variable  DATABASE_URL  have been declared
```
```
step 2: verify the environment variable DATABASE_URL is empty
```
```
step 3: check names
```
> database table names = ( ```human``` , ``` humanlocation ```, ```humanlogin``` )
> 

#### <span id = "erro48960" > 48960 </span> - failed connection with database or database not existis or database address incorrect or database address not defined

##### solutions error (48960) - failed connection with database or database not existis or database address incorrect or database address not defined

``` 
step 1: Verify that environment variable  DATABASE_URL  have been declared
```

``` 
step 2: verify the environment variable DATABASE_URL is empty
```

```
step 3: verify the database status
```

``` 
step 4: verify the database connection
```
