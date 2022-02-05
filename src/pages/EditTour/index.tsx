import TourForm from '../../components/TourForm'
import * as S from './styles'
import {useNavigate, useParams} from 'react-router-dom'
import { api } from '../../services/api'
import useTour, { Tour } from '../../hooks/useTour'
import Loading from '../../components/Loading'
import Empty from '../../components/Empty'
import { toast } from 'react-toastify'



const EditTour= () =>{
    const {slug}=useParams()
    const {data:tour,isLoading}=useTour(slug)
    const navigate= useNavigate()
    const getFinalData = (data: FormData) => {
        if (!tour) return
        const dataJson: Record<string, string | number> = {}
        const numberItems = ['price', 'duration', 'maxGroupSize']
    
        data.forEach((item, key) => {
          if (key !== 'imageCover' && key !== 'images') {
            if (numberItems.includes(key)) {
              const keyEl = key as keyof Tour
              const itemNumber = parseFloat(item.toString())
              if (tour[keyEl] !== itemNumber) {
                dataJson[key] = itemNumber
              }
            } else {
              const keyEl = key as keyof Tour
              if (tour[keyEl] !== item) {
                dataJson[key] = item.toString()
              }
            }
          }
        })
    
        return dataJson
      }
    
      const handleUpdateImageCover = (slug: string | undefined, data: FormData) => {
        const imageCover = data.get('imageCover')
        if (!imageCover) return []
        const formData = new FormData()
        const imageCoverFile = imageCover as File
        formData.append('imageCover', imageCoverFile, imageCoverFile.name)
        const imageCoverRequest = api.patch(`tours/${slug}/cover`, formData)
        return [imageCoverRequest]
      }
    
      const handleUpdateImages = (slug: string | undefined, data: FormData) => {
        const images = data.getAll('images')
        if (!images.length) return []
        const formData = new FormData()
        images.forEach(image => {
          const imageFile = image as File
          formData.append('images', imageFile, imageFile.name)
        })
        const imagesRequest = api.patch(`tours/${slug}/images`, formData)
        return [imagesRequest]
      }
    
      const handleSubmit = async (data: FormData) => {
        const finalData = getFinalData(data)
    
        try {
          const updatedSlug = data.get('slug')
          if (updatedSlug) {
            await api.patch(`tours/${slug}`, finalData)
            const [imageCoverRequest] = handleUpdateImageCover(updatedSlug as string, data)
            const [imagesRequest] = handleUpdateImages(updatedSlug as string, data)
            await Promise.all([imageCoverRequest, imagesRequest])
            navigate(`/tour/${updatedSlug}`)
          } else {
            const updateTourRequest = []
            if (finalData) {
              updateTourRequest.push(api.patch(`tours/${slug}`, finalData))
            }
            const [imageCoverRequest] = handleUpdateImageCover(slug as string, data)
            const [imagesRequest] = handleUpdateImages(slug as string, data)
            await Promise.all([updateTourRequest[0], imageCoverRequest, imagesRequest])
            navigate(`/tour/${slug}`)
          }
        } catch (error) {
          toast.error('An error occurred')
        }
      }
    
    if(isLoading){
        return <Loading/>
    }
    if(!tour){
        return <Empty/>
    }
    return(
        <S.Main>
            <S.FormContainer>
                    <S.FormTitle>
                        Edit Tour
                </S.FormTitle>
                <TourForm tour={tour} onSubmit={handleSubmit}/>
            </S.FormContainer>
        </S.Main>
    )
}
export default EditTour