import styled from 'styled-components'

export const ServicesContainer = styled.div`
  height: 720px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(255,255,255,0.5) ;
  color: #0F265C;

  @media screen and (max-width: 768px) {
    height: 1300px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
 `
export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
      grid-template-columns: 1fr 1fr;
  }

    @media screen and (max-width: 786px) {
      grid-template-columns: 1fr;
      padding: 0 20px;
  }
`
export const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding:  30px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor:pointer;
  }
`
export const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;

`
export const ServicesH1 = styled.h1`
  font-size: 2.1rem;
  color: #fff;
  margin-bottom: 64px;
  letter-spacing: 4px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
    text-align: center;
  }  
`
export const ServicesH2 = styled.h2`
  font-size: 1.1rem;
  margin-bottom: 10px;
  font-weight: 800;
`

export const ServicesP = styled.p`
  font-family: utopia-std, serif;
  font-size: 1.05rem;
  text-align: center;
`


