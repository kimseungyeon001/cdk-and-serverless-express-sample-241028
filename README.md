## Getting Started

### Install

create the project

```
git clone https://github.com/kimseungyeon001/cdk-and-serverless-express-sample-241028.git
```

access the project directory

```
cd cdk-and-serverless-express-sample-241028
```

install dependencies

```
npm install
```

setting .env

```
cp ./packages/iac/.env.sample ./packages/iac/.env
```

And setup your accountId and region

### Deploy

```
npm run deploy:dev
```

If you failed, try it.

```
cd ./packages/iac
npm run cdk bootstrap:dev
```

Check API

```
curl -X GET -H "Content-Type: application/json" https://xxxxxxxx.execute-api.[region].amazonaws.com/v1/...
```
