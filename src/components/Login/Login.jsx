import React from 'react';
import { Button, Grid, Input, Card, Text, Row, Col } from '@nextui-org/react';
import styled, { } from "styled-components";

const Container = styled.div`
  background-color: #E2ECF2;
  width: 100vw;

  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginInput = styled.div`
  margin-left: 3em;
  display: flex;
  flex-direction: column;

`;
const Login = () => {
    return (
        <Container >
        <Grid xs={12} sm={5}>
          <Card width="100%" color="#f6f6f6" cover>
            <Card.Header style={{ position: 'absolute', zIndex: 1, top: 5 }}>
              <Col>
                <Text
                  size={12}
                  weight="bold"
                  transform="uppercase"
                  color="#ffffffAA"
                >
                  23/12/2021
                </Text>
                <Text h3 color="white">
                  Codi Drive
                </Text>
              </Col>
            </Card.Header>
            <Card.Image
              autoResize={false}
              src='https://thumbs.web.sapo.io/?W=800&H=0&delay_optim=1&epic=NzI5gosQ7yoLVPqdXwozBYub6I0f+/OfoUlprQXquZt6cfN+EbtffqvIQQ93X9Fx200FfQXi9czAqNvHz4+32MjucNr6+h6g555O1kk9diG8oO8='
              height={400}
              width="100%"
              alt="Card example background"
            />
            <Card.Footer
              blur
              border
              borderColor="rgba(255, 255, 255, 0.2)"
              style={{ position: 'absolute', zIndex: 1, bottom: 0 }}>
              <Row>
                <Col>
                  <Text color="#fff" size={14} weight="bold">Nuevas funcionalidades</Text>
                  <Text color="#fff" size={12}>Enterate de más en nuestra página web</Text>
                </Col>
                <Col>
                  <Row justify="flex-end">
                    <Button flat auto rounded color="white">
                      <Text size={12} weight="bold" color="black" transform="uppercase">
                        Enterarse
                      </Text>
                    </Button>
                  </Row>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
        <LoginInput>
          <div class="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
            <div class="self-center font-bold mb-6 text-xl  text-gray-600 sm:text-2xl dark:text-white">
              Inicio de Sesión
            </div>
            <div class="mt-8">
              <form action="#" autoComplete="off">
                <div class="flex flex-col mb-2">
                  <div class="flex relative ">
                    <span class="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                      <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z">
                        </path>
                      </svg>
                    </span>
                    <input type="text" id="sign-in-email" class=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="Your email" />
                  </div>
                </div>
                <div class="flex flex-col mb-6">
                  <div class="flex relative ">
                    <span class="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                      <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z">
                        </path>
                      </svg>
                    </span>
                    <input type="password" id="sign-in-email" class=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="Your password" />
                  </div>
                </div>
                <div class="flex items-center mb-6 -mt-4">
                  <div class="flex ml-auto">
                    <a href="#" class="inline-flex text-xs font-thin text-gray-500 sm:text-sm dark:text-gray-100 hover:text-gray-700 dark:hover:text-white">
                      Olvidaste tu clave?
                    </a>
                  </div>
                </div>
                <div class="flex w-full">
                  <button type="submit" class="py-2 px-4  hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg " style={{ background: '#01286B' }}>
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </LoginInput>
      </Container>
    )
}

export default Login
