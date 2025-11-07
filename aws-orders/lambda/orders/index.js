const { DynamoDBClient, PutItemCommand } = require('@aws-sdk/client-dynamodb')
const crypto = require('crypto')

const client = new DynamoDBClient({})
const tableName = process.env.ORDERS_TABLE

exports.handler = async (event) => {
    const method = event.httpMethod
    const path = event.path

    if (method === 'POST' && path === '/orders'){
        const body = JSON.parse(event.body || '{}')

        // gen ID
        const id = crypto.randomUUID()
        const date = body.date || new Date().toISOString()
        const status = body.status || 'NEW'
        const items = Array.isArray(body.items) ? body.items: []

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
            body: JSON.stringify({id, message: 'order created'})
        }
    }

    return {
        statusCode: 400,
        body: JSON.stringify({message: 'usupported route'})
    }
}