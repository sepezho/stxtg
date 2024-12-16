import styled from "styled-components"

export const HeaderContainer = styled.div`
  text-align: center;
  width: 275px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: auto;
  span {
    a {
      color: #adadad;
    }
  }
`

export const Logo = styled.img`
  width: 32px;
  margin: 0 auto 0 auto;
  transition: transform 1s ease-in-out;
  &:hover {
    transform: perspective(200px) rotateY(-180deg);
  }
`

export const RoadmapList = styled.div`
  text-align: center;
  text-align: left;
  width: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: auto;
`

export const Launch = styled.div`
  text-align: center;
  width: 154.6px;
  height: 38px;
  border: 1px dashed #fff;
  cursor: pointer;
  margin:  auto;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.125s ease-in-out;
  &:hover {
    transform: scale(1.018);
    text-decoration: underline;
    border: 1px solid #fff;
  }
`
