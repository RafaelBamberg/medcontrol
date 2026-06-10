import styled from 'styled-components'

export const Page = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Header = styled.div`
  display: flex;
  margin-top: 20px;
  width: 70%;
  min-height: 58px;
  justify-content: center;
  align-items: center;
`

export const Text = styled.p`
  font-weight: 500;
  font-size: 18px;
  margin: 0;
`

export const Summary = styled.div`
  width: 82%;
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 10px;

  span {
    color: #454545;
    font-size: 12px;
  }
`

export const Alert = styled.div`
  width: 82%;
  display: flex;
  flex-direction: column;
  gap: 4px;
  background-color: #fee2e2;
  color: #991b1b;
  border: 1px solid #ef4444;
  border-radius: 6px;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 12px;
`

export const List = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  width: 80%;
  gap: 10px;
  overflow-y: scroll;
  align-items: center;
  padding: 5px;
`

export const Item = styled.div`
  position: relative;
  display: flex;
  gap: 13px;
  width: 98%;
  height: 95px;
  min-height: 95px;
  cursor: default;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0, rgba(27, 31, 35, 0.15) 0 0 0 1px;
`

export const Img = styled.img`
  height: 95px;
  width: 95px;
  object-fit: contain;
  background-color: white;
`

export const Fallback = styled.div`
  height: 95px;
  width: 95px;
  background-color: white;
  color: #4181ff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  font-weight: 800;
`

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 5px;
  justify-content: center;
  padding-right: 28px;
`

export const Name = styled.p`
  margin: 0;
  font-weight: 700;
`

export const Detail = styled.p`
  margin: 0;
  color: #4181ff;
  font-size: 14px;
  font-weight: 600;
`

export const Time = styled.p`
  margin: 0;
  font-size: 13px;
  color: #454545;
`

export const Alarm = styled.p`
  margin: 0;
  width: fit-content;
  color: #166534;
  background-color: #dcfce7;
  border-radius: 4px;
  padding: 3px 6px;
  font-size: 11px;
  font-weight: 700;
`

export const Empty = styled.div`
  border: 1px dashed rgba(127, 127, 127, 0.35);
  border-radius: 6px;
  padding: 18px;
  width: 100%;
  color: #454545;
  font-size: 14px;
`

export const Button = styled.button`
  padding: 12px;
  background-color: #4181ff;
  font-family: "Inter", sans-serif;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
  color: white;
  font-weight: bold;
  border: none;
  outline: none;
  cursor: pointer;
  width: 82%;
  height: 48px;
  font-size: 15px;
  transition: 0.6s;
  font-weight: 200;
  margin: 8px 0 10px;
  white-space: nowrap;
`
