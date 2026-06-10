import styled from 'styled-components'

export const Footer = styled.div`
  width: 373px;
  max-height: 67px;
  min-height: 67px;
  display: flex;
  position: relative;
  border-radius: 0 0 5px 5px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  background-color: #f0f8ff;

  .selected {
    color: #4181ff;
  }

  .start {
    border-radius: 0 0 0 10px;
  }

  .end {
    border-radius: 0 0 10px 0;
  }
`

export const MenuItem = styled.div`
  width: 100%;
  min-width: 0;
  display: flex;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 0.5s;

  &:hover {
    background-color: rgba(127, 127, 127, 0.5);
  }
`

export const MenuIcon = styled.div`
  line-height: 0;
`

export const MenuText = styled.p`
  margin: 0;
  font-size: 9px;
  font-weight: 600;
  white-space: nowrap;
  line-height: 1.1;
  max-width: 70px;
  overflow: hidden;
  text-overflow: ellipsis;
`
