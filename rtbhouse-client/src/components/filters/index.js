import React from 'react'
import { FiltersContainer, InputLine, StyledButton, StyledInput, StyledLabel } from './styles'

export const Filters = ({ inputHandlers, inputValues }) => {
    const {
        handleName,
        handleStore,
        handleMinTotal,
        handleMaxTotal,
        handleMinPrice,
        handleMaxPrice,
        clearAll
    } = inputHandlers

    const {
        name,
        store,
        minTotal,
        maxTotal,
        minPrice,
        maxPrice
    } = inputValues

    return (
        <FiltersContainer>
            <h3>Filters</h3>

            <StyledLabel htmlFor="storeName" >Store Name</StyledLabel>
            <StyledInput
                id="storeName"
                onChange={handleStore}
                placeholder="Store Name"
                value={store}
            />

            <StyledLabel htmlFor="productName"  >Product Name</StyledLabel>
            <StyledInput
                id="productName"
                onChange={handleName}
                placeholder="Product"
                value={name}
            />

            <h4>Price</h4>

            <InputLine>
                <label htmlFor="minPrice" >Min</label>
                <StyledInput
                    id="minPrice"
                    type="number"
                    onChange={handleMinPrice}
                    placeholder="Min Price"
                    value={minPrice}
                    width={"120px"}
                />
            </InputLine>

            <InputLine>
                <label htmlFor="maxPrice" >Max</label>
                <StyledInput
                    id="maxPrice"
                    type="number"
                    onChange={handleMaxPrice}
                    placeholder="Max Price"
                    value={maxPrice}
                    width={"120px"}

                />
            </InputLine>

            <h4>Revenue</h4>

            <InputLine>
                <label htmlFor="minRevenue" >Min</label>
            <StyledInput
                id="minRevenue"
                type="number"
                onChange={handleMinTotal}
                placeholder="Min Revenue"
                value={minTotal}
                width={"120px"}

            />
            </InputLine>
            <InputLine>
                <label htmlFor="maxRevenue" >Max</label>
            <StyledInput
                type="number"
                onChange={handleMaxTotal}
                placeholder="Max Revenue"
                value={maxTotal}
                width={"120px"}
            />
            </InputLine>

            <StyledButton onClick={clearAll} >Clear all </StyledButton>
        </FiltersContainer>
    )
}
