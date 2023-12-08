import { Header } from "../../components/header"
import { Loading } from "../../components/loading"
import { useRequestData } from "../../hooks/useRequestData"
import { MainContainer } from "./styles"

export const MainPage = () => {
  const [products, loading] = useRequestData("/productsData", [])

  console.log(products)

  return (
    <>
      <Header />
      <MainContainer>

        {
          loading ?
            <Loading />
            :
            <p>tabela</p>
        }
      </MainContainer>
    </>
  )
}
