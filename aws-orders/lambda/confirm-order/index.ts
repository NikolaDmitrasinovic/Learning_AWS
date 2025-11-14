import { DynamoDBClient, UpdateItemCommand } from "@aws-sdk/client-dynamodb"
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda"
import { OrderStatus } from "../shared/order"

const client = new DynamoDBClient({})
const tableName = process.env.ORDERS_TABLE!
const CONFIRMED: OrderStatus = 'CONFIRMED'

export const handler = async (
    event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
    console.log('PATCH confirm order', JSON.stringify(event))

    const id = event.pathParameters?.id

    if (!id){
        return {
            statusCode: 400,
            body: JSON.stringify({ message: "Missing order id"})
        }
    }

    try {
        const commnd = new UpdateItemCommand({
        TableName: tableName,
        Key: { id: { S: id } },
        UpdateExpression: "SET #s = :S",
        ExpressionAttributeNames: { "#s": "status" },
        ExpressionAttributeValues: { ":S": { S: 'CONFIRMED' } },
        ReturnValues: 'UPDATED_NEW'
        })

        const response = await client.send(commnd)
        console.log('Update response', response)

        return {
            statusCode: 200,
            body: JSON.stringify({ id, message: 'order confirmed' })
        }
    }
    catch (err){
        console.error('Error confirming order', err)
        return{
            statusCode: 500,
            body: JSON.stringify({ message: 'Internal server error' })
        }
    }
}