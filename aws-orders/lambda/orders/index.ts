import { DynamoDBClient, PutItemCommand, UpdateItemCommand, ScanCommand } from '@aws-sdk/client-dynamodb'
import crypto from 'crypto'
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { Order, OrderItem } from '../shared/order'

const client = new DynamoDBClient({})
const tableName = process.env.ORDERS_TABLE

export const handler = async (
    event: APIGatewayProxyEvent
    ): Promise<APIGatewayProxyResult> => {
    const method = event.httpMethod
    const path = event.path

    if (method === 'POST' && path === '/orders'){
        const body = JSON.parse(event.body || '{}')

        // gen ID
        const id = crypto.randomUUID()
        const date = body.date || new Date().toISOString()
        const status = body.status || 'NEW'
        const items: OrderItem[] = Array.isArray(body.items) ? body.items: []

        const order: Order = {
            id, date, status, items
        }

        // simple item serialization
        const cmd = new PutItemCommand({
            TableName: tableName,
            Item: {
                id: { S: id },
                date: { S: date },
                status: { S: status },
                items: { S: JSON.stringify(items) }
            }
        })

        await client.send(cmd)

        return {
            statusCode: 201,
            body: JSON.stringify({id: order.id, message: 'order created'})
        }
    }

    return {
        statusCode: 400,
        body: JSON.stringify({message: 'usupported route'})
    }
}