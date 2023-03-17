import React from "react";
import styled from "styled-components";
import { Form } from "./Form";

const Wrapper = styled.div`
  background-color: ${({ color }) => color};
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 100px 48px 48px 48px;
  width: 100%;
`;

const Container = styled.nav`
  margin: auto;
  max-width: 640px;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 3.4rem;
  font-weight: 700;
  margin-bottom: 24px;
  text-align: center;
  text-transform: uppercase;

  strong {
    color: rgba(255, 255, 255, 0.9);
    font-weight: 600;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.4;
  margin-bottom: 48px;
  text-align: center;
`;

export function Page({ page, ...rest }) {
  return (
    <Wrapper color={page.color} {...rest}>
      <Container>
        <Title>
          React <strong>/ Transições de Página</strong>
        </Title>

        <Description>
          Veja as instruções de uso e código-fonte em{" "}
          <a
            href="https://github.com/xophantom/react-transicoes"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
            <br />
            <br />
            Desenvolvido por Léo Sperandio e Bruno Braga.
        </Description>

        <Form />
      </Container>
    </Wrapper>
  );
}
