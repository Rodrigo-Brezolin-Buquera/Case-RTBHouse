import { Filters } from "../../components/filters"
import { Loading } from "../../components/loading"
import { ProductsTable } from "../../components/productsTable"
import { MainContainer } from "./styles"
import { useMainPageLogic } from "./useMainPageLogic.js"

export const MainPage = () => {
  const [products, loading, inputHandlers, inputValues] = useMainPageLogic()

  if(loading){
    return  <Loading />
  }

  return (
      <MainContainer>
        <Filters inputHandlers={inputHandlers} inputValues={inputValues}/>
        <ProductsTable products={products}/>     
      </MainContainer>
  )
}
