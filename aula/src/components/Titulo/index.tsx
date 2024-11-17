import { Titulo as TituloEstilo } from "./styles"

export type props = {
children: string;
fontSize?: number;
}

const Titulo = (props: props) => <TituloEstilo fontSize={props.fontSize}>{props.children}</TituloEstilo>

export default Titulo
