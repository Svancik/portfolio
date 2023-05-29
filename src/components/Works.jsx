import React, { useState } from "react";
import styled from "styled-components";
import { Development } from "./Development";
import { WebDesign } from "./WebDesign";
import { ProductDesign } from "./ProductDesign";

const data = [
  "Web Design",
  "Development",
  "Illustration",
  "Product Design",
  "Social Media",
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  height: 1400px;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 560px;
`;
const ListItem = styled.li`
  font-size: 80px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;

  position: relative;

  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: whitesmoke;
    width: 0px; //zde jsme nastavili width = 0px a níže v keyframes animaci změníme width na 100% - tím se vytvoří proces animace
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    ::after {
      animation: moveText 0.5s linear both; //díky příznaku both zůstane animace v konečném stavu

      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;
const Right = styled.div`
  flex: 1;
`;

export const Works = () => {
  const [work, setWork] = useState("Web Design");

  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem key={item} text={item} onClick={() => setWork(item)}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
          {work === "Web Design" ? (
            <WebDesign />
          ) : work === "Development" ? (
            <Development />
          ) : (
            <ProductDesign />
          )}
        </Right>
      </Container>
    </Section>
  );
};
