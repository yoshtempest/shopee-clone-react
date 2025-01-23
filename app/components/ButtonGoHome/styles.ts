import styled from "styled-components";

export const Container = styled.div`
    background-color: white;
`;

interface ButtonProps {
    $backgroundImage: string;
}

export const Button = styled.button<ButtonProps>`
    width: 30%;
    height: 120px;
    background-color: red;
    border: none;
    background-image: ${(props) => `url(${props.$backgroundImage})`};
    background-size: cover;
    background-position: center;
`;