import React from 'react'
import { formatPrice } from '../../utils/formatPrice'
import { ColumnHeader, Row, TableContainer, TableItem } from './styles'

export const ProductsTable = ({ products }) => {

    if (!products.length) {
        return <p>No items found</p>
    }

    const productsList = products.map((product) => {
        const { storeName, name, amountSold, price, totalRevenue, id } = product
        return (
            <Row key={id}>
                <TableItem width={"120px"}>{storeName}</TableItem>
                <TableItem width={"200px"}> {name}</TableItem>
                <TableItem width={"100px"} >{formatPrice(price)}</TableItem>
                <TableItem width={"60px"} justify={"center"} >{amountSold}</TableItem>
                <TableItem width={"100px"} >{formatPrice(totalRevenue)}</TableItem>
            </Row>
        )
    })

    return (
        <TableContainer>
            <Row>
                <ColumnHeader width={"120px"}>Store Name</ColumnHeader>
                <ColumnHeader width={"200px"}> Product</ColumnHeader>
                <ColumnHeader width={"100px"} >Price</ColumnHeader>
                <ColumnHeader width={"60px"} >Amount</ColumnHeader>
                <ColumnHeader width={"100px"} >Total Revenue</ColumnHeader>
            </Row>
            {productsList}
        </TableContainer>
    )
}
