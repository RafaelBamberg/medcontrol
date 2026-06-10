import styled from 'styled-components'

export const LeafletCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const LeafletHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const LeafletImage = styled.img`
  width: 132px;
  height: 88px;
  object-fit: contain;
  background-color: white;
  border: 1px solid rgba(127, 127, 127, 0.25);
  border-radius: 5px;
  flex: 0 0 auto;
`

export const LeafletInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  min-width: 0;
`

export const LeafletTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  color: #111;
`

export const LeafletText = styled.p`
  margin: 0;
  color: #454545;
  font-size: 12px;
  line-height: 1.35;
`
