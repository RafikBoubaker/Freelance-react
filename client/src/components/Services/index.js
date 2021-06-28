import React from 'react'
import Icon1 from '../../images/1-budget.svg'
import Icon2 from '../../images/2-certificate.svg'
import Icon3 from '../../images/3-asset-management.svg'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServiceElements'

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1 style={{ color: 'black '}}>SERVICES OFFERED</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>Reach more Costumers</ServicesH2>
          <ServicesP>Manage teamwork and boost productivity with one powerful workspace.</ServicesP>
        </ServicesCard>
        <ServicesCard>
        <ServicesIcon src={Icon2}/>
          <ServicesH2>Connect to freelancers</ServicesH2>
          <ServicesP>Connect to freelancers with proven business experience</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3}/>
          <ServicesH2 style={{ textAlign: 'center'}}>Start an online business</ServicesH2>
          <ServicesP>Get matched with the perfect talent by a customer success manager</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
