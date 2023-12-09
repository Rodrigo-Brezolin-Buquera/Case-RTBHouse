import React from 'react'
import { formatPrice } from '../../utils/formatPrice'
import { ColumnHeader, Row, TableItem } from './styles'

export const ProductsTable = ({ products }) => {

    if (!products.length) {
        return <p>No items found</p>
    }

    const productsList = products.map((product) => {
        const { storeName, name, amountSold, price, totalRevenue, id } = product
        return (
            <Row key={id}>
                <TableItem>{storeName}</TableItem>
                <TableItem> {name}</TableItem>
                <TableItem>{formatPrice(price)}</TableItem>
                <TableItem>{amountSold}</TableItem>
                <TableItem>{formatPrice(totalRevenue)}</TableItem>
            </Row>
        )
    })

    return (
        <section>
            <Row>
                <ColumnHeader>Store Name</ColumnHeader>
                <ColumnHeader> Product</ColumnHeader>
                <ColumnHeader>Price</ColumnHeader>
                <ColumnHeader>Amount Sold</ColumnHeader>
                <ColumnHeader>Total Revenue</ColumnHeader>
            </Row>
            {productsList}
        </section>
    )
}
