import { DynamoDBClient, ScanCommand } from "@aws-sdk/client-dynamodb";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { Order, OrderItem } from "../shared/order";

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

    const orders: Order[] = 
        response.Items?.map((it) => {
            const items: OrderItem[] = it.items?.S
            ? JSON.parse(it.items.S)
            : []

            return{
                id: it.id?.S ?? '',
                date: it.date?.S ?? '',
                status: (it.status?.S as any) ?? 'NEW',
                items
            }
        }) ?? []

    return {
        statusCode: 200,
        body: JSON.stringify(orders)
    }
}