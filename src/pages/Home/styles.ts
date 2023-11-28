import styled from 'styled-components'
import { mixins } from '../../mixins'

// export const OverflowBannerContainer = styled.div`
//   position: relative;

//   > img {
//     position: absolute;
//     top: 0;
//     left: 0;
//     max-height: 544px;
//     width: 100vw;
//     object-fit: cover;
//   }
// `

// export const BannerContainer = styled.section`
//   display: flex;
//   max-width: 1160px;
//   gap: 3.5rem;

//   img {
//     width: 29.75rem;
//     height: 22.5rem;
//   }
// `

// export const TextBannerContainer = styled.div`
//   h1 {
//     ${mixins.fonts.titleXL}
//     color: ${(props) => props.theme['base-title']};
//   }
// `

// export const ItemsBannerContainer = styled.div``

export const Hero = styled.section`
  position: relative;

  img#hero-bg {
    position: absolute;
    top: 0;
    left: 0;
    max-height: 544px;
    width: 100vw;
    object-fit: cover;
  }
`

export const HeroContent = styled.div`
  max-width: 1160px;
  padding: 92px 20px;
  margin: 0 auto;

  display: flex;
  gap: 3rem;
  align-items: flex-start;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: column;
    gap: 66px;
  }
`

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  > h1 {
    ${mixins.fonts.titleXL}
    color: ${({ theme }) => theme['base-title']}
  }

  > span {
    ${mixins.fonts.textL}
    color: ${({ theme }) => theme['base-subtitle']}
  }
`

export const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 20px;

  > div {
    display: flex;
    align-items: center;
    gap: 12px;

    svg {
      padding: 8px;
      border-radius: 999px;
    }
  }
`
