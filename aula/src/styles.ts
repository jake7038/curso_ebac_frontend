import styled, {createGlobalStyle} from 'styled-components'


const EstiloGlobal = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  font-family: "Inter", sans-serif;
}
  body{
    padding-top: 80px;

    @media (max-width:768px) {
    padding-top:16px;
    }

  }

`
export default EstiloGlobal;

export const Container = styled.div`
  max-width: 1024 px;
  width: 50%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 128px auto;
  column-gap: 56px;

  @media (max-width:768px) {
    max-width: 80%;
    display: block;
  }
  img {
    max-width: 100%;
  }
`