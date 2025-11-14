import { DynamoDBClient, UpdateItemCommand } from "@aws-sdk/client-dynamodb"
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda"

const client = new DynamoDBClient({})
const tableName = process.env.ORDERS_TABLE!

export const handler = async (
    event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
    console.log('PATCH confirm order', JSON.stringify(event))

    const path = event.path
    const parts = path.split('/')
    const id = parts[2] // ["", "orders", "{id}", "confirm"]

    if (!id){
        return {
            statusCode: 400,
            body: JSON.stringify({ message: "Missing order id"})
        }
    }

    const commnd = new UpdateItemCommand({
        TableName: tableName,
        Key: { id: { S: id } },
        UpdateExpression: "SET #s = :S",
        ExpressionAttributeNames: { "#s": "status" },
        ExpressionAttributeValues: { ":s": { S: 'CONFIRMED' } },
        ReturnValues: 'UPDATED_NEW'
    })

    await client.send(commnd)

    return {
        statusCode:200,
        body: JSON.stringify({ id, message: "order confirmed" })
    }
}