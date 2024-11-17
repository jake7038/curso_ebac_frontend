import styled from "styled-components";

import {props} from '.';

export const P = styled.h3<props>`
    font-size:14px;
    color: ${(props) => (props.tipo == 'principal' ? '#282a35' : '#949494')};
    line-height: 22px;
`
