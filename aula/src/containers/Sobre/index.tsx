import Titulo from "../../components/Titulo"
import Paragrafo from "../../components/Paragrafo"
import { GithubSecao } from "./styles"

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre Mim</Titulo>
    <Paragrafo tipo="secundario">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem soluta, rem quam aut adipisci voluptatibus consequuntur tenetur saepe nesciunt facilis sed qui repellendus debitis sunt nihil eligendi dolore commodi alias
    </Paragrafo>
    <GithubSecao>
    <img  src="https://github-readme-stats.vercel.app/api?username=jake7038&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"/>
    <img  src="https://github-readme-stats.vercel.app/api/top-langs/?username=jake7038&layout=compact&langs_count=7&theme=dracula"/>
    </GithubSecao>
  </section>

)

export default Sobre