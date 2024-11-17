import styled from "styled-components";

import {props} from '.';

export const Titulo = styled.h3<props>`
    color: #282a35;
    font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
    font-weight: bold;
    margin-bottom: 16px;
    
`
