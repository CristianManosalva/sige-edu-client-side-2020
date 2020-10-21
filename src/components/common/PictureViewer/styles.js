import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
`

export const CarouselContainer = styled.div`
  max-width: 100%;
  height: 118px;
  padding: 0.3em 0.2em;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    /* width: 15px; */
    height: 0.5em;
  }
  &::-webkit-scrollbar-thumb {
    background: white;
    border-radius: 20px;
    transition: background-color 0.3s linear;
  }

  &:hover::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.4);
  }
`

export const ImgContainer = styled.div`
  display: block;
  max-height: 100px;
  height: 100px;
  width: 100px;
  min-width: 100px;
  position: relative;
  margin-right: 4px;
  position: relative;
`
export const Img = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  object-position: center;
  max-width: 100%;
`

export const Icon = styled.i`
  margin-right: 11px;
  color: ${(props) => props.color};
  font-size: 22px;
`
