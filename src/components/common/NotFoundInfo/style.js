import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ImgContainer = styled.div`
  display: block;
  max-height: 150px;
  height: 150px;
  width: 150px;
  position: relative;
`
export const Img = styled.img`
  object-fit: contain;
  height: 100%;
  width: 100%;
  object-position: center;
  max-width: 100%;
`
export const Text = styled.p`
  font-size: 17px;
  max-width: 275px;
  text-align: center;
  margin-left: 17px;
  color: #5c6b85;
`
