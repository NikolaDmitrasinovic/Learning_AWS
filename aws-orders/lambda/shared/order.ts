export type OrderStatus = 'NEW' | 'CONFIRMED' | 'CANCELLED'

export interface OrderItem{
    sku: string
    qty: string
}

export interface Order{
    id: string
    date: string
    status: OrderStatus
    items: OrderItem[]
}
