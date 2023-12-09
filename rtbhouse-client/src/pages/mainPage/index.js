import { Header } from "../../components/header"
import { Loading } from "../../components/loading"
import { ProductsTable } from "../../components/productsTable"
import { useRequestData } from "../../hooks/useRequestData"
import { MainContainer } from "./styles"

export const MainPage = () => {
  const [products, loading] = useRequestData("/productsData", [])

  return (
    <>
      <Header />
      <MainContainer>

        {
          loading ?
            <Loading />
            :
            <ProductsTable products={products}/>
        }
      </MainContainer>
    </>
  )
}
