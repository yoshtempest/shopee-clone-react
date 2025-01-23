import * as S from "./styles"
import ICONS from "../../assets/icons/";

interface Props{
    isLogin?: boolean;
}

const ButtonGoHome:React.FC<Props> = ({
    isLogin = false,
}) => {
    const icon = isLogin ? ICONS.logoHome : ICONS.logoLogin;
    return(
        <S.Container>
            <S.Button 
                $backgroundImage={icon}
            />
        </S.Container>
    ) 
}

export default ButtonGoHome