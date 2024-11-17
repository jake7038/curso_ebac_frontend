import Sidebar from './containers/sidebar'
import Sobre from './containers/Sobre';
import Projetos from './containers/Projetos';
import EstiloGlobal, { Container } from './styles'
function App() {
  return (
    <>
    <EstiloGlobal/>
    <Container>
    <Sidebar/>
    <main>
      <Sobre/>
      <Projetos/>
    </main>
    </Container>
    </>

  )
}

export default App;
