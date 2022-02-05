import ReactLoading from 'react-loading'
import * as S from './style'
const Loading = ()=>{
    return (
        <S.LoadingWrapper>
                <ReactLoading type='bubbles' color='#55f57a'/>
        </S.LoadingWrapper>
    )
}
export default Loading