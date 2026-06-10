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
  gap: 10px;
  overflow-y: scroll;
  flex: 1;
  min-height: 0;
  padding: 4px;
  box-sizing: border-box;
`

export const Label = styled.label`
  color: rgba(127, 127, 127);
  font-weight: 400;
  margin-top: 8px;
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

export const ToggleGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
`

export const ToggleButton = styled.button`
  border: 1px solid rgba(127, 127, 127, 0.3);
  background-color: white;
  color: #454545;
  border-radius: 5px;
  padding: 12px;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  cursor: pointer;

  &.selected {
    background-color: #4181ff;
    border-color: #4181ff;
    color: white;
  }
`

export const Suggestions = styled.div`
  background-color: white;
  border: 1px solid rgba(127, 127, 127, 0.25);
  border-radius: 5px;
  overflow: hidden;
`

export const Suggestion = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  border: 0;
  background-color: white;
  padding: 8px;
  cursor: pointer;
  text-align: left;
  font-weight: 700;
  color: #111;

  img {
    width: 62px;
    height: 42px;
    object-fit: contain;
  }

  &:hover {
    background-color: rgba(127, 127, 127, 0.15);
  }
`

export const Preview = styled.div`
  border: 1px solid rgba(127, 127, 127, 0.25);
  background-color: white;
  border-radius: 5px;
  padding: 10px;
  margin-top: 4px;
`

export const Error = styled.p`
  margin: 0;
  background-color: #fee2e2;
  color: #991b1b;
  padding: 10px;
  border-radius: 5px;
  font-size: 13px;
`

export const Success = styled(Error)`
  background-color: #dcfce7;
  color: #166534;
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
  margin-bottom: 12px;
  white-space: nowrap;
  box-sizing: border-box;

  &:hover {
    opacity: 0.8;
    text-decoration: underline;
  }
`

export const ModalOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.42);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  box-sizing: border-box;
  z-index: 10;
`

export const Modal = styled.div`
  width: 100%;
  max-width: 312px;
  background-color: white;
  border-radius: 6px;
  padding: 18px;
  box-shadow: rgba(0, 0, 0, 0.24) 0 12px 32px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const ModalTitle = styled.h3`
  margin: 0;
  font-size: 17px;
`

export const ModalWarning = styled.p`
  margin: 0;
  background-color: #fee2e2;
  color: #991b1b;
  border: 1px solid #ef4444;
  border-radius: 5px;
  padding: 10px;
  font-size: 13px;
  line-height: 1.35;
`

export const ModalActions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
`

export const SecondaryButton = styled.button`
  border: 1px solid rgba(127, 127, 127, 0.35);
  background-color: white;
  color: #454545;
  border-radius: 5px;
  padding: 12px;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  cursor: pointer;
`

export const PrimaryButton = styled(SecondaryButton)`
  background-color: #4181ff;
  border-color: #4181ff;
  color: white;
`
