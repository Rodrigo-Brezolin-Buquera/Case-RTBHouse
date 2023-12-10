import React from 'react'
import { formatPrice } from '../../utils/formatPrice'
import { ColumnHeader, Row, Table, TableContainer, TableItem } from './styles'

export const ProductsTable = ({ products }) => {

    const productsList = products?.length && products.map((product) => {
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
            <h2>Product Sales</h2>
            <Table>
                <Row>
                    <ColumnHeader width={"120px"}>Store Name</ColumnHeader>
                    <ColumnHeader width={"200px"}> Product</ColumnHeader>
                    <ColumnHeader width={"100px"} >Price</ColumnHeader>
                    <ColumnHeader width={"60px"} >Amount</ColumnHeader>
                    <ColumnHeader width={"100px"} >Total Revenue</ColumnHeader>
                </Row>
                {
                    products.length
                        ?
                        productsList
                        :
                        <p>No items found</p>

                }
            </Table>
        </TableContainer>
    )
}
