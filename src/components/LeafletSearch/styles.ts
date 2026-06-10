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
  gap: 14px;
  min-height: 0;
  padding-bottom: 12px;
  box-sizing: border-box;
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

export const SearchBlock = styled.div`
  width: 280px;
  max-width: 82%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Label = styled.label`
  color: rgba(127, 127, 127);
  font-weight: 400;
  font-size: 15px;
`

export const Input = styled.input`
  flex: 1;
  min-width: 0;
  width: 100%;
  background-color: transparent;
  outline: none;
  border: 0;
  color: rgba(127, 127, 127);
  padding: 16px 12px;
  box-sizing: border-box;
  font-size: 14px;
`

export const SearchField = styled.div`
  width: 100%;
  min-height: 54px;
  display: flex;
  align-items: stretch;
  overflow: hidden;
  background-color: white;
  border: 1px solid rgba(127, 127, 127, 0.3);
  border-radius: 5px;
  box-sizing: border-box;
`

export const SearchButton = styled.button`
  flex: 0 0 86px;
  border: 0;
  background-color: #4181ff;
  color: white;
  font-family: "Inter", sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    opacity: 0.88;
  }
`

export const Result = styled.div`
  width: 280px;
  max-width: 82%;
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  border: 1px dashed rgba(127, 127, 127, 0.35);
  border-radius: 5px;
  padding: 14px;
  background-color: white;
  box-sizing: border-box;
`

export const Empty = styled.p`
  margin: 0;
  color: #454545;
  font-size: 14px;
`

export const Error = styled(Empty)`
  background-color: #fee2e2;
  color: #991b1b;
  padding: 12px;
  border-radius: 5px;
`

export const Button = styled.button`
  padding: 15px;
  background-color: #4181ff;
  font-family: "Inter", sans-serif;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
  color: white;
  font-weight: bold;
  border: none;
  outline: none;
  cursor: pointer;
  width: 280px;
  max-width: 82%;
  height: 55px;
  font-size: 16px;
  transition: 0.6s;
  font-weight: 200;
  white-space: nowrap;
  box-sizing: border-box;
  flex: 0 0 auto;

  &:hover {
    opacity: 0.8;
    text-decoration: underline;
  }

  &:disabled {
    background-color: #9ca3af;
    box-shadow: none;
    cursor: not-allowed;
    opacity: 0.85;
    text-decoration: none;
  }
`
