import Header from "../components/Header";
import { useProtectedPage } from "../hooks/useProtectedPage";

const AdminHomePage = () => {
  useProtectedPage()
  return (
    <div>
      <Header voltar={"/"}/>

    </div>
  )
}

export default AdminHomePage