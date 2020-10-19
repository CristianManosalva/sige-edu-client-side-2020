import styled from 'styled-components'

export const ActionsContainer = styled.div`
  margin-bottom: 0.5em;
  text-align: end;
`

export const DeleteIcon = styled.button`
  /* position: absolute; */
  /* top: 6px; */
  /* right: 10px; */
  padding: ${(props) => (props.loader ? '6px' : '6px 7px')} !important;
  /* padding: 6px 7px !important; */
  margin: 0;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`

export const Container = styled.div`
  width: 100%;
  /* display: flex;
  justify-content: center;
  align-items: center; */
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

// export const SquareAdd = styled.div`
//   min-width: 100px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 100px;
//   height: 100px;
//   border: 2px dashed rgba(0, 0, 0, 0.3);
//   margin-right: 4px;
//   cursor: pointer;
//   box-sizing: border-box;
// `

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

export const DeleteButton = styled.span`
  position: absolute;
  top: 3px;
  right: 3px;
  background-color: orangered;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

// export const AddPictureButton = styled.button`
//   background-color: transparent;
//   border-color: transparent;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 8px;
//   &:hover {
//     background-color: rgba(0, 0, 0, 0.1);
//     border-radius: 8px;
//   }
// `

export const Icon = styled.i`
  margin-right: 11px;
  color: ${(props) => props.color};
  font-size: 22px;
`

// export const TextButton = styled.span`
//   color: rgba(0, 0, 0, 0.5);
//   font-weight: 500;
// `
