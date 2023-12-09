import React from 'react'
import { FiltersContainer, StyledInput } from './styles'

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
            <button onClick={clearAll} >Clear all </button>
            <StyledInput
                onChange={handleStore}
                placeholder="Store Name"
                value={store}
            />
            <StyledInput
                onChange={handleName}
                placeholder="Product"
                value={name}
            />
            <StyledInput
                type="number"
                onChange={handleMinTotal}
                placeholder="Min Revenue"
                value={minTotal}
            />
            <StyledInput
                type="number"
                onChange={handleMaxTotal}
                placeholder="Max Revenue"
                value={maxTotal}
            />
            <StyledInput
                type="number"
                onChange={handleMinPrice}
                placeholder="Min Price"
                value={minPrice}
            />
            <StyledInput
                type="number"
                onChange={handleMaxPrice}
                placeholder="Max Price"
                value={maxPrice}
            />
        </FiltersContainer>
    )
}
