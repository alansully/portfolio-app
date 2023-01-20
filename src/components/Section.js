import React from "react"
import styled from "styled-components"
import Wave from "./Wave"

const Section = props => (
  <SectionGroup image={props.image}>
    <WaveTop>
      <svg
        width="100%"
        height="170"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="white">
          <animate
            fill="freeze"
            attributeName="d"
            dur="0s"
            values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;
        M0 86.3149C316 86.315 444 159.155 884 51.1554C1324 -56.8446 1320.29 34.1214 1538 70.4063C1814 116.407 2156 188.408 2560 86.315V232.317L0 232.316V86.3149Z;
        M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z;
        
        M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z
        "
          />
        </path>
      </svg>
    </WaveTop>
    {/* <WaveBottom>
      <Wave />
    </WaveBottom> */}
    <SectionLogo src={props.logo} />
    <SectionTitleGroup>
      <SectionTitle>{props.title}</SectionTitle>
      <SectionText>{props.text}</SectionText>
      <SectionImage src={props.image} />
    </SectionTitleGroup>
  </SectionGroup>
)

export default Section

const SectionGroup = styled.div`
  background-color: royalblue;
  background-image: linear-gradient(royalblue, #103ea0);
  height: 700px;
  background-size: cover;
  display: grid;
  grid-template-rows: 300px auto;
  grid-gap: 20px;
  position: relative;
  @media (max-width: 640px) {
    height: 1000px;
  }
`

const SectionLogo = styled.img`
  align-self: end;
  width: 128px;
  margin: 0 auto;
`

const SectionTitleGroup = styled.div`
  max-width: 920px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 300px auto;
  grid-gap: 20px;
  grid-template-rows: auto 100%;
  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`

const SectionTitle = styled.h3`
  color: white;
  font-size: 60px;
  margin: 0;
  line-height: 1.2;
  grid-row-start: 1;
  grid-row-end: 3;
  @media (max-width: 720px) {
    font-size: 40px;
  }
`

const SectionText = styled.p`
  color: white;
`

const WaveBottom = styled.div`
  position: absolute;
  width: 100%;
  bottom: -6px;
`

const WaveTop = styled.div`
  position: absolute;
  width: 100%;
  top: -6px;
  transform: rotate(180deg);
`
const SectionImage = styled.img`
  grid-row-start: 2;
  width: 60%;
`
