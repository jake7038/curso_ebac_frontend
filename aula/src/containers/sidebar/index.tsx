import Avatar from "../../components/Avatar"
import Titulo from "../../components/Titulo"
import Paragrafo from "../../components/Paragrafo"
import { Descricao, BotaoTema, SidebarContainer } from "./styles"
const Sidebar = () => (

  <aside>
    <SidebarContainer>
    <Avatar></Avatar>
    <Titulo fontSize={20}>Rafael Costa</Titulo>
    <Paragrafo tipo="secundario" fontSize={16}>jake7038</Paragrafo>
    <Descricao fontSize={12} tipo="principal">Desenvolvedor FullStack</Descricao>
    <BotaoTema>Trocar Tema</BotaoTema>
    </SidebarContainer>
    </aside>
)

export default Sidebar
