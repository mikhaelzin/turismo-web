import TourForm from '../../components/TourForm'
import * as S from './styles'
import {useNavigate} from 'react-router-dom'
import { api } from '../../services/api'
import { toast } from 'react-toastify'

const NewTour= () =>{
    const navigate= useNavigate()
    const handleSubmit=async(data:FormData)=>{
        try{
            await api.post('tours',data)
                    navigate('/')
        } catch(error){
            toast.error('Error')
        }
       
    }
    return(
        <S.Main>
            <S.FormContainer>
                    <S.FormTitle>
                        Create Tour
                </S.FormTitle>
                <TourForm onSubmit={handleSubmit}/>
            </S.FormContainer>
        </S.Main>
    )
}
export default NewTour