import { RestApi, LambdaIntegration } from 'aws-cdk-lib/aws-apigateway';
import { AttributeType, BillingMode, Table } from 'aws-cdk-lib/aws-dynamodb';
import { Code, Runtime, Function as LambdaFunction } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import * as cdk from 'aws-cdk-lib/core';
import { Construct } from 'constructs';
import { join } from 'path';

export class AwsOrdersStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    //
    const ordersTable =new Table(this, 'OrdersTable', {
      tableName: 'Orders',
      partitionKey: {name: 'id', type: AttributeType.STRING},
      billingMode: BillingMode.PAY_PER_REQUEST
    })

    // POST
    const ordersLambda = new NodejsFunction(this, 'OrdersLambda', {
      entry: join(__dirname, "..", "..", 'aws-orders/lambda/orders/index.ts'),
      handler: 'handler',
      runtime: Runtime.NODEJS_22_X,
      environment: {
        ORDERS_TABLE: ordersTable.tableName
      }
    })

    //GET
    const getOrdersLambda = new NodejsFunction(this, 'GetOrdersLambda', {
      entry: 'aws-orders/lambda/orders/get-orders',
      handler: 'handler',
      runtime: Runtime.NODEJS_22_X,
      environment: {
        ORDERS_TABLE: ordersTable.tableName
      }
    })

    // PATCH
    const confirmOrderLambda = new NodejsFunction(this, 'ConfirmOrderLambda', {
      entry: 'aws-orders/lambda/orders/confirm-order',
      handler: 'handler',
      runtime: Runtime.NODEJS_22_X,
      environment: {
        ORDERS_TABLE: ordersTable.tableName
      }
    })

    // permissions
    ordersTable.grantReadWriteData(ordersLambda)

    //
    const api = new RestApi(this, 'OrdersApi', {
      restApiName: 'Orders Service'
    })
    const ordersResource = api.root.addResource('orders')
  }
}
