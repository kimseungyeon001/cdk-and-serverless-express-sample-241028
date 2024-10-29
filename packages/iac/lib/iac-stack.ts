import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

// Main stack
export class IacStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Lambda
    const restApiFunc = new cdk.aws_lambda_nodejs.NodejsFunction(
      this,
      'RestApiFunc',
      {
        architecture: cdk.aws_lambda.Architecture.ARM_64,
        runtime: cdk.aws_lambda.Runtime.NODEJS_20_X,
        entry: '../server/src/lambda/api-gateway/rest-api/router.ts',
      },
    );

    // REST API
    const restApi = new cdk.aws_apigateway.LambdaRestApi(this, 'RestApi', {
      handler: restApiFunc,
      defaultCorsPreflightOptions: {
        allowOrigins: cdk.aws_apigateway.Cors.ALL_ORIGINS,
        allowMethods: cdk.aws_apigateway.Cors.ALL_METHODS,
        allowHeaders: cdk.aws_apigateway.Cors.DEFAULT_HEADERS,
        maxAge: cdk.Duration.minutes(5),
      },
      deployOptions: {
        stageName: 'v1',
        tracingEnabled: false,
      },
    });

    // API Gateway
    new cdk.CfnOutput(this, 'RestApiEndpoint', {
      value: restApi.deploymentStage.urlForPath(),
    });
  }
}
