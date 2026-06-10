import styled from 'styled-components'

export const Home = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  animation: slide-in-fwd-right 0.5s ease-in-out both;
  overflow: hidden;
  justify-content: flex-start;
  padding: 92px 0 38px;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  justify-content: center;
  width: 280px;
  max-width: 82%;
`

export const HeaderText = styled.h1`
  margin: 0;
  font-size: 32px;
  font-weight: 800;
  text-shadow: 6px 6px 6px rgba(0, 0, 0, 0.3);
  letter-spacing: 0.5px;
  white-space: nowrap;
`

export const Texts = styled.div`
  display: flex;
  justify-content: center;
  text-align: justify;
  width: 90%;
  align-items: end;
  height: 100%;
  flex-direction: column;
  gap: 8px;
`

export const Title = styled.h1`
  margin: 0;
  font-weight: 400;
  font-size: 24px;
`

export const Paragraph = styled.p`
  font-size: 16px;
  margin: 0;
  color: #4181ff;
  font-weight: 500;
  cursor: pointer;
  transition: 1s;

  &:hover {
    opacity: 0.6;
    text-decoration: underline;
  }
`

export const Logo = styled.div`
  height: 54px;
  width: 54px;
  border-radius: 12px;
  background-color: #4181ff;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-weight: 800;
  letter-spacing: 0;
  box-shadow: rgba(0, 0, 0, 0.18) 0 3px 8px;
`

export const Button = styled.button`
  padding: 10px 15px;
  background-color: #4181ff;
  font-family: "Inter", sans-serif;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  border: none;
  outline: none;
  cursor: pointer;
  width: 100%;
  transition: 1.2s;
  box-sizing: border-box;

  &:hover {
    opacity: 0.8;
    text-decoration: underline;
  }
`

export const GovButton = styled(Button)`
  width: 100%;
  background-color: white;
  color: #111;
  border: 1px solid rgba(127, 127, 127, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  img {
    height: 22px;
    max-width: 70px;
    object-fit: contain;
  }
`

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 4px;
  margin-top: auto;
`

export const FooterText = styled.p`
  margin: 0;
  font-weight: 500;
  letter-spacing: 1.5px;
`

export const Box = styled.div`
  overflow: hidden;
  animation: scale-in-center 1.1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const LogoLoading = styled.div`
  height: 185px;
  width: 185px;
  border-radius: 35px;
  background-color: #4181ff;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 58px;
  font-weight: 800;
  letter-spacing: 0;
  clip-path: circle(0%);
  animation: reveal 1s linear forwards;
`

export const LoadingText = styled.p`
  margin: 0;
  font-size: 38px;
  font-weight: 800;
  animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.61, 0.355, 1) both;
  text-shadow: 6px 6px 6px rgba(0, 0, 0, 0.3);
`

export const Login = styled.div`
  display: flex;
  justify-content: center;
  text-align: left;
  width: 280px;
  max-width: 82%;
  align-items: start;
  gap: 5px;
  flex-direction: column;
  animation: slide-in-fwd-top 0.5s ease-in-out both;
  margin-top: 120px;
`

export const Tabs = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2px;
  background-color: rgba(127, 127, 127, 0.15);
  border-radius: 5px;
  padding: 3px;
  margin-bottom: 8px;
`

export const TabButton = styled.button`
  border: 0;
  border-radius: 4px;
  padding: 10px 0;
  background-color: transparent;
  color: #454545;
  font-weight: 600;
  cursor: pointer;

  &.selected {
    background-color: white;
    color: #111;
    box-shadow: rgba(0, 0, 0, 0.12) 0 1px 3px;
  }
`

export const Label = styled.label`
  color: rgba(127, 127, 127);
  font-weight: bold;
  margin-top: 12px;
  font-size: 15px;
`

export const Input = styled.input`
  border-radius: 5px;
  width: 100%;
  background-color: rgba(127, 127, 127, 0.15);
  outline: none;
  border: none;
  color: rgba(127, 127, 127);
  padding: 18px 12px;
  box-sizing: border-box;
`

export const ButtonLogin = styled(Button)`
  width: 100%;
  margin-top: 10px;
`

export const ChangeInput = styled.p`
  text-align: center;
  margin-top: 55px;
  width: 100%;
  cursor: pointer;
  font-size: 15px;
  text-decoration: underline;
  transition: 0.6s;

  &:hover {
    opacity: 0.6;
  }
`

export const Message = styled.p`
  margin: 8px 0 0;
  width: 100%;
  padding: 9px;
  border-radius: 5px;
  background-color: #dcfce7;
  color: #166534;
  font-size: 12px;

  &.error {
    background-color: #fee2e2;
    color: #991b1b;
  }
`
