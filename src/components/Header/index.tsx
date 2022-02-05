import * as S from './styles' 
const Header=()=>{
    return(
        <S.Container>
            <S.Nav>
                <S.Link to='/'>
                    All Tours
                </S.Link>
                <S.Link to='/tour/new'>
                    Create Tours
                </S.Link>
            </S.Nav>
        </S.Container>
    )
}
export default Header