import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "antd";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "./Redux/themeSlice";

const Home = () => {
  const darkTheme = useSelector((state) => state?.theme?.darkTheme);
  const dispatch = useDispatch();
  const Title = styled.h1`
    font-size: 40px;
    text-align: center;
    color: ${darkTheme? '#ffc300':'black'};
  `;

  const Wrapper = styled.section`
    padding: 10px;
    background: ${darkTheme ? "#000814" : "#ffc300"};
    border-radius: 10px;
    margin-top: 10px;
  `;
  const ButtonStyled = styled.button`
    background: ${(props) => (darkTheme ? "#ffc300" : "white")};
    color: ${(props) => (darkTheme ? "white" : "#ffc300")};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #ffc300;
    border-radius: 3px;
  `;
  const navigate = useNavigate();
  return (
    <>
      <div className="container mx-auto">
        <Wrapper>
          <Title>This is My test project!</Title>
          <div className="bg-[#001d3d] text-[#ffd60a] p-2 rounded-md mt-4">
            <div className="flex justify-between items-center">
              <h1 className="capitalize text-start text-2xl font-bold p-4">
                Navigate to each project!
              </h1>
              <Button
                onClick={() => dispatch(toggleTheme())}
                type="primary"
                className=""
              >
                {darkTheme ? <MoonOutlined /> : <SunOutlined />}
              </Button>
            </div>
            <ul className="flex flex-wrap">
              <li>
                <ButtonStyled
                  type="primary"
                  onClick={() => navigate("Compeffect")}
                >
                  Hook useEffect
                </ButtonStyled>
              </li>
              <li>
                <ButtonStyled onClick={() => navigate("CompMemo")}>
                  Hook useMemo
                </ButtonStyled>
              </li>
              <li>
                <ButtonStyled onClick={() => navigate("CompReducer")}>
                  Hook useReducer
                </ButtonStyled>
              </li>
              {/* <li>
                <ButtonStyled onClick={() => navigate("CompE")}>
                  Hook useEffect
                </ButtonStyled>
              </li> */}
              <li>
                <ButtonStyled onClick={() => navigate("CompState")}>
                  Hook useState
                </ButtonStyled>
              </li>
              <li>
                <ButtonStyled onClick={() => navigate("CompRef")}>
                  Hook useRef
                </ButtonStyled>
              </li>
              <li>
                <ButtonStyled onClick={() => navigate("CompContext")}>
                  Hook useContext
                </ButtonStyled>
              </li>
              <li>
                <ButtonStyled onClick={() => navigate("CompReducer")}>
                  Hook useReducer
                </ButtonStyled>
              </li>
              <li>
                <ButtonStyled onClick={() => navigate("CompRedux")}>
                  Redux
                </ButtonStyled>
              </li>
            </ul>
            <Outlet />
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default Home;
