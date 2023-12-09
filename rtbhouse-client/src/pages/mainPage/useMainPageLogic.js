import { useRequestData } from "../../hooks/useRequestData"
import { useInput } from "../../hooks/useInput";

export const useMainPageLogic = () => {
  const [data, loading] = useRequestData("/productsData", [])
  const [name, handleName, clearName] = useInput("");
  const [store, handleStore, clearStore] = useInput("");
  const [minTotal, handleMinTotal, clearMinTotal] = useInput(0);
  const [maxTotal, handleMaxTotal, clearMaxTotal] = useInput(1000000);
  const [minPrice, handleMinPrice, clearMinPrice] = useInput(0);
  const [maxPrice, handleMaxPrice, clearMaxPrice] = useInput(1000000);

  const products = data?.length && data
    .filter(product => product.name?.toLowerCase().includes(name.toLowerCase()))
    .filter(product => product.storeName?.toLowerCase().includes(store.toLowerCase()))
    .filter(product => {
      const max = maxTotal || 100000
      return product.totalRevenue >= minTotal && product.totalRevenue <= max
    })
    .filter(product => {
      const max = maxPrice || 100000
      return product.price >= minPrice && product.price <= max
    })

  const clearAll = () => {
    clearName()
    clearStore()
    clearMinTotal()
    clearMaxTotal()
    clearMinPrice()
    clearMaxPrice()
  }
  
  const inputValues = {
    name,
    store,
    minTotal,
    maxTotal,
    minPrice,
    maxPrice
  }
  const inputHandlers = {
    handleName,
    handleStore,
    handleMinTotal,
    handleMaxTotal,
    handleMinPrice,
    handleMaxPrice,
    clearAll
  }
  
  return [products, loading, inputHandlers, inputValues]
}
