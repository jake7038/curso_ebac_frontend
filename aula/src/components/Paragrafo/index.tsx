import { P  } from "./styles"

export type props = {
children: string;
tipo?: 'principal' | 'secundario';
fontSize?: number;
}

const Paragrafo = ({children, tipo = 'principal', fontSize}: props) => <P fontSize={fontSize} tipo={tipo}>{children}</P>

export default Paragrafo
