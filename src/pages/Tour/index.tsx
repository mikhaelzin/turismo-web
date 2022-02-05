import {useParams} from 'react-router-dom'
import Loading from '../../components/Loading'
import useTour from "../../hooks/useTour"
import * as S from './styles'
import {MapPin,Clock,User,DollarSign} from 'styled-icons/feather'
import Map from '../../components/Map'


const Tour =()=>{
const {slug}=useParams()
    const{data,isLoading}=useTour(slug)
    if(isLoading){
        return (
           <Loading/>
        ) 

    }
    const latitude=data?.latLong.split(',').shift()||'' 
    const longitude=data?.latLong.split(',').pop()||''
    return(
        <>
        <S.SectionHeader>
            <S.HeaderHero>
                <S.HeaderHeroOverlay/>
                <S.HeaderHeroIMG src={data?.imageCover} alt={data?.name}/>
            </S.HeaderHero>
            <S.HeadingBox>
                <S.HeroTitle>
                    <span>{data?.name} tour</span>
                </S.HeroTitle>
                <S.HeadingBoxGroup>
                    <S.HeadingBoxDetail>
                        <Clock color='#FFF'/>
                        <span>{data?.duration} days</span>
                    </S.HeadingBoxDetail>
                    <S.HeadingBoxDetail>
                        <MapPin color='#fff'/>
                        <span>{data?.locationName}</span>
                    </S.HeadingBoxDetail>
                </S.HeadingBoxGroup>
                <S.EditButton to='edit'>
                    Edit Tour 
                </S.EditButton>
            </S.HeadingBox>
        </S.SectionHeader>
        <S.SectionDescription>
            <S.OveviewBox>
                <div>
                <S.SectionTitle>Quick Facts</S.SectionTitle>
                <S.OveviewBoxDetail>
                    <User color='#0ED2F7'/>
                    <S.OveviewBoxLabel>Participants</S.OveviewBoxLabel>
                    <S.OveviewBoxText>{data?.maxGroupSize} people</S.OveviewBoxText>
                </S.OveviewBoxDetail>
                <S.OveviewBoxDetail>
                    <DollarSign color='#0ED2F7'/>
                    <S.OveviewBoxLabel>Price</S.OveviewBoxLabel>
                    <S.OveviewBoxText>${data?.price} </S.OveviewBoxText>
                </S.OveviewBoxDetail>
                </div>
                <S.DescriptionBox>
                    <S.SectionTitle>about {data?.name} tour</S.SectionTitle>
                    <S.DescriptionText>{data?.description}</S.DescriptionText>
                </S.DescriptionBox>
                </S.OveviewBox>
        </S.SectionDescription>
        <S.SectionPictures>
            {data?.images.map(image =>(
                <div>
                    <S.BoxImage src={image}/>
                </div>
            ))}
        </S.SectionPictures>
        <S.SectionMap>
            <Map latitude={parseFloat(latitude)} longitude={parseFloat(longitude)}/>
        </S.SectionMap>
        <S.SectionBox>
            <S.BoxContainer>
                {data?.images.slice(0,2).map(image =>(
                    <S.BoxIMG src={image} key={image}/>
                ))}
                <S.BoxContent>
                    <S.BoxHeading>
                        What are you waiting for ?
                    </S.BoxHeading>
                    <S.BoxText>
                        {data?.duration} days. 1 adventure. Infinite Memories. Make it yours today!
                    </S.BoxText>
                </S.BoxContent>
            </S.BoxContainer>
        </S.SectionBox>

        </>
    )
}
export default Tour