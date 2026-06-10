import styled from 'styled-components'

export const Page = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Content = styled.div`
  width: 100%;
  height: calc(100% - 67px);
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 0;
`

export const Header = styled.div`
  display: flex;
  margin-top: 20px;
  width: 280px;
  max-width: 82%;
  min-height: 58px;
  justify-content: center;
  align-items: center;
  position: relative;

  svg {
    position: absolute;
    left: 0;
  }
`

export const Text = styled.p`
  font-weight: 500;
  font-size: 18px;
  margin: 0;
`

export const Form = styled.div`
  width: 280px;
  max-width: 82%;
  display: flex;
  flex-direction: column;
  gap: 9px;
  margin-bottom: 14px;
`

export const Label = styled.label`
  color: rgba(127, 127, 127);
  font-weight: 400;
  font-size: 15px;
`

export const Input = styled.input`
  border-radius: 5px;
  width: 100%;
  background-color: transparent;
  outline: none;
  border: 1px solid rgba(127, 127, 127, 0.3);
  color: rgba(127, 127, 127);
  padding: 15px 12px;
  box-sizing: border-box;
`

export const Button = styled.button`
  padding: 13px;
  background-color: #4181ff;
  font-family: "Inter", sans-serif;
  border-radius: 5px;
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
  width: 100%;
  font-size: 15px;
  font-weight: 700;
`

export const Error = styled.p`
  margin: 0;
  background-color: #fee2e2;
  color: #991b1b;
  padding: 10px;
  border-radius: 5px;
  font-size: 13px;
`

export const List = styled.div`
  width: 82%;
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 4px 0 12px;
  box-sizing: border-box;
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: white;
  border: 1px solid rgba(127, 127, 127, 0.25);
  border-radius: 6px;
  padding: 8px;
`

export const Img = styled.img`
  width: 58px;
  height: 48px;
  object-fit: contain;
  flex: 0 0 auto;
`

export const Fallback = styled.div`
  width: 58px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #991b1b;
  background-color: #fee2e2;
  border-radius: 5px;
  font-weight: 800;
  font-size: 22px;
  flex: 0 0 auto;
`

export const Info = styled.div`
  min-width: 0;
  flex: 1;
`

export const Name = styled.p`
  margin: 0;
  font-size: 15px;
  font-weight: 800;
`

export const Detail = styled.p`
  margin: 3px 0 0;
  color: #454545;
  font-size: 12px;
`

export const RemoveButton = styled.button`
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  background-color: #fee2e2;
  color: #991b1b;
  border-radius: 5px;
  cursor: pointer;
  flex: 0 0 auto;
`
