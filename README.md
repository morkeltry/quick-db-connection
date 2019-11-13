# quick-db-connection

### Access this page at [https://bit.ly/2O4rHab](https://bit.ly/2O4rHab)

This is an extension of Casper's db connnection workshop in this morning's Google Classroom

Download the .CSV of 2017 election results by constituency from the
[Parliament website](https://researchbriefings.parliament.uk/ResearchBriefing/Summary/CBP-7979#fullreport).

Import the file into a SQL database, locally or wherever you use mySQL/ PostgreSQL.
[This article](https://medium.com/@AviGoom/how-to-import-a-csv-file-into-a-mysql-database-ef8860878a68) has suggestions on how to do it in MySQL Workbench, phpMyAdmin or (recommended) from the mySQL command line.

TLDR;
Modify this command to suit the shape of the file we're importing.
```
mysql>
LOAD DATA LOCAL INFILE '/Users/miguelgomez/Desktop/mock_data.csv'
INTO TABLE users
FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n'
IGNORE 1 ROWS
(id, first_name, last_name, email, transactions, @account_creation)
SET account_creation  = STR_TO_DATE(@account_creation, '%m/%d/%y');
```
Try to guess without looking it up, what each command does, whether you need it and how you can modify it to work for the file we are using.

### The exercise:

We will be coding up an app to show students registered to vote in two different places wehre their vote is most likely to affect which candidate is elected to be an MP, like the one in [this article](https://www.theguardian.com/politics/ng-interactive/2019/nov/07/should-you-vote-at-home-or-at-uni-students)

NB - it is legal to register to vote in multiple locations, but you are allowed to actually vote only in one.

We will use Node.JS and the `node-postcodes.io` [NPM package](https://www.npmjs.com/package/node-postcodes.io),  which gets lots of useful information from the free API from the helpful folks at [postcodes.io](postcodes.io), so:

Create a directory for your server, do `npm init` and `npm i node-postcodes.io`.
Alternatively, clone this repo, enter the directory and run `npm i` to install all packages at once.

The [node-postcodes.io package](https://www.npmjs.com/package/node-postcodes.io) is really user-friendly and you won't need to read more than the first few lines of the welcome page to use it.

If you want to output the result of a lookup in your local Node REPL before making a runnable .js file, you'll need to modify the provided command a little:
```
result postcodes.lookup('PO123AA')
```
wait a few milliseconds
```
console.log(result)
```
-or just use the commands as provided in the code of your .js file.

We can develop and run this Node app locally, and connect it to a SQL database which is either local or remote (depending on how you set yours up). Once it's working, you can deploy your whole app to your DigitalOcean or GCP servers.

### Running locally
This app uses a local server to receive the form data, and the conneciton is over HTTPS (secure HTTP) to avoid CORS (Cross Origin Request Sharing) errors.

But that means that we need an HTTPS certificate. This is included in the repo, but is 'self-signed' (I generated it by running `openssl req -nodes -new -x509 -keyout server.key -out server.cert`), so you will need to authorise your browser to accept it if the console shows a *Network Error* after you submit.

##### TLDR;
Navigate to `https://localhost:3000/`
When you get the yellow bordered warning page, click Advanced. You will see that the exact error is
`MOZILLA_PKIX_ERROR_SELF_SIGNED_CERT`
Accept the certificate and continue.
Now browse to `file:///` and navigate to `index.html` in the directory that you cloned the repo.
