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
  gap: 12px;
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

export const ScannerBox = styled.div`
  width: 280px;
  max-width: 82%;
  display: flex;
  flex-direction: column;
  gap: 9px;
`

export const ScanFrame = styled.div`
  height: 126px;
  border: 2px solid #4181ff;
  border-radius: 6px;
  background-color: white;
  color: #4181ff;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

export const ScanLine = styled.div`
  position: absolute;
  left: 18px;
  right: 18px;
  top: 50%;
  height: 2px;
  background-color: #16a34a;
  box-shadow: rgba(22, 163, 74, 0.45) 0 0 12px;
`

export const ScannerLabel = styled.label`
  color: rgba(127, 127, 127);
  font-weight: 400;
  font-size: 15px;
`

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 82px;
  border-radius: 5px;
  background-color: transparent;
  outline: none;
  border: 1px solid rgba(127, 127, 127, 0.3);
  color: rgba(127, 127, 127);
  padding: 12px;
  box-sizing: border-box;
  resize: none;
  font-family: "Inter", sans-serif;
`

export const ActionRow = styled.div`
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
  border: none;
  outline: none;
  cursor: pointer;
  width: 280px;
  max-width: 82%;
  height: 55px;
  font-size: 16px;
  transition: 0.6s;
  font-weight: 700;
  white-space: nowrap;
  box-sizing: border-box;
  flex: 0 0 auto;

  &:disabled {
    background-color: #9ca3af;
    box-shadow: none;
    cursor: not-allowed;
    opacity: 0.85;
  }
`
