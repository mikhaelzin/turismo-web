import {MapPin,User} from 'styled-icons/feather'
import Loading from '../../components/Loading'
import useTours from "../../hooks/useTours"
import * as S from './styles'
const Home=()=>{
    const{data,isLoading}=useTours()
    if(isLoading){
        return (
           <Loading/>
        ) 

    }
    return(
        <S.Main>
            <S.CardContainer>
                {data?.map(tour =>(
                    <S.Card key={tour._id}>
                        <S.CardHeader>
                            <S.CardPicture>
                                <S.CardPictureOverlay/>
                                <S.CardPictureImage src={tour.imageCover} alt={tour.name}/>
                            </S.CardPicture>
                            <S.Title>
                                <span>{tour.name}</span>
                            </S.Title>
                        </S.CardHeader>
                        <S.CardDetails>
                            <S.CardSubHeading>{tour.duration}-day tour</S.CardSubHeading>
                            <S.CardText>{tour.summary}</S.CardText>
                            <S.CardData>
                                <MapPin color='#0ED2F7'/>
                                <span>{tour.locationName}</span>
                            </S.CardData>
                            <S.CardData>
                                <User color='#0ED2F7'/>
                                <span>{tour.maxGroupSize} people</span>
                            </S.CardData>
                        </S.CardDetails>
                        <S.CardFooter>
                            <p>
                                <S.CardFooterValue>${tour.price} </S.CardFooterValue>
                                <S.CardFooterText>Per Person</S.CardFooterText>
                            </p>
                            <S.CardFooterLink to={`tour/${tour.slug}`}>Details</S.CardFooterLink>
                        </S.CardFooter>
                    </S.Card>
                ))}
            </S.CardContainer>
        </S.Main>
    )
}
export default Home