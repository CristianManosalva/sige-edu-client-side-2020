import styled from 'styled-components'

export const Card = styled.div`
  /* border: 1px solid red; */
  padding: 0;
  padding-top: 2rem;
  /* padding-bottom: 0.3rem; */
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  width: 100%;
  margin-bottom: 1rem;
`

export const HeaderContainer = styled.div`
  /* margin-bottom: 2rem; */
  padding: 0 2rem;
`
export const CropImage = styled.div`
  display: block;
  max-height: 125px;
  height: 125px;
  width: 100%;
`
export const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  max-width: 100%;
`
export const TitleContainer = styled.div``

export const TimeContainer = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  flex-direction: column;
`

export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: green;
  align-items: center;
`
export const Score = styled.span`
  font-size: 2.5em;
`

export const ScoreTitle = styled.p`
  margin: 0;
  margin-top: 1em;
  text-align: center;
`

export const ContentContainer = styled.div`
  margin-bottom: 2rem;
  /* margin-top: 2rem; */
  padding: 0 3rem;
`
export const ResourceContainer = styled.div`
  margin-bottom: 2rem;
  padding: 0 3rem;
`

export const ReponseContainer = styled.div`
  /* margin-bottom: 2rem; */
  padding: 0 3rem;
`

export const ToggleContainer = styled.div`
  margin-top: 0.4rem;
  padding: 0 2rem;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  font-weight: 500;
  color: rgb(30, 174, 223);
  background-color: ${(props) =>
    props.open ? 'rgba(0, 0, 0, 0.05)' : 'transparent'};
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`

export const DeleteIcon = styled.span`
  position: absolute;
  top: 6px;
  right: 10px;
  padding: 6px 7px !important;
  margin: 0;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`
