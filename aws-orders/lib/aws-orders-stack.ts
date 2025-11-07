import { LambdaRestApi } from 'aws-cdk-lib/aws-apigateway';
import { AttributeType, BillingMode, Table } from 'aws-cdk-lib/aws-dynamodb';
import { LambdaFunction } from 'aws-cdk-lib/aws-events-targets';
import { Code, Runtime } from 'aws-cdk-lib/aws-lambda';
import * as cdk from 'aws-cdk-lib/core';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class AwsOrdersStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    //
    const ordersTable =new Table(this, 'OrdersTable', {
      tableName: 'Orders',
      partitionKey: {name: 'id', type: AttributeType.STRING},
      billingMode: BillingMode.PAY_PER_REQUEST
    })

    //
    const ordersLambda = new LambdaFunction(this, 'OrdersLambda', {
      runtime: Runtime.NODEJS_22_X,
      handler: 'index.handler',
      code: Code.fromAsset('lambda/orders'),
      this.environment: {
        ORDERS_TABLE: ordersTable.tableName
      }
    })

    // permissions
    ordersTable.grantReadWriteData(ordersLambda)

    //
    const api = new LambdaRestApi(this, 'OrdersApi', {
      handler: ordersLambda,
      proxy: true
    })

    // example resource
    // const queue = new sqs.Queue(this, 'AwsOrdersQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
