import styled from "styled-components";

export const Container = styled.div`
    background-color: white;
`;

interface ButtonProps {
    $backgroundImage: string;
    $islogin?: boolean;
}

export const Button = styled.button<ButtonProps>`
    width: 12%;
    height: 55px;
    background-color: red;
    cursor: pointer;
    border: none;
    background-image: ${(props) => `url(${props.$backgroundImage})`};
    background-size: cover;
    background-position: center;
    margin-left: ${(props) => (props.$islogin ? "100px" : "100px")};
    margin-top: ${(props) => (props.$islogin ? "50px" : "200px")};
`;