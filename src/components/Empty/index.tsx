import serverdownsvg from '../../assets/icons/server-down.svg'
import * as S from './styles'
const Empty =()=>{
    return(
        <S.Container>
            <S.EmptyIMG src={serverdownsvg} alt="server down" />
            <S.Title>Error While fetching the data</S.Title>
        </S.Container>
    )
}
export default Empty