import { LambdaRestApi } from 'aws-cdk-lib/aws-apigateway';
import { AttributeType, BillingMode, Table } from 'aws-cdk-lib/aws-dynamodb';
import { Code, Runtime, Function as LambdaFunction } from 'aws-cdk-lib/aws-lambda';
import * as cdk from 'aws-cdk-lib/core';
import { Construct } from 'constructs';

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
      environment: {
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
  }
}
