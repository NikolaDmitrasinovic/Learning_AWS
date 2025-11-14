import { DynamoDBClient, ScanCommand } from "@aws-sdk/client-dynamodb";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";


const client = new DynamoDBClient({})
const tableName = process.env.ORDERS_TABLE!

export const handler = async (
    event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
    console.log('GET/orders', JSON.stringify(event))

    const cmd= new ScanCommand({
        TableName: tableName,
        Limit: 50
    })

    const response = await client.send(cmd)

    const orders = 
        response.Items?.map((it) => ({
            id: it.id?.S,
            date: it.date?.S,
            status: it.status?.S,
            items: it.items?.S ? JSON.parse(it.items.S) : []
        })) ?? []

    return {
        statusCode: 200,
        body: JSON.stringify(orders)
    }
}