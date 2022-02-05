import * as S from './styles'
import {ChangeEvent, FormEvent, useState} from 'react'
import Map from '../Map'
import ReactLoading from 'react-loading'
import {toast} from 'react-toastify'
type Tour={
		address: string
		latLong: string
		locationName:string
		images: string[]
		imageCover: string
		description: string
		summary: string
		price: number
		maxGroupSize:number
		duration:number
		slug: string
		name: string
}
type TourFormProps={
    tour?:Tour
    onSubmit:(data:FormData)=>Promise<void>
}
function checkValidURLSlug(str: string) {
    const regexExp = /^[a-z0-9]+(?:-[a-z0-9]+)*$/g;
    return regexExp.test(str);
  }
const TourForm =({tour, onSubmit}:TourFormProps) => {
    const [loading,setLoading]=useState(false)
    const [name,setName]=useState(tour?.name||'')
    const [slug,setSlug]=useState(tour?.slug||'')
    const [summary,setSummary]=useState(tour?.summary||'')
    const [description,setDescription]=useState(tour?.description||'')
    const [price,setPrice]=useState(tour?.price||'')
    const [duration,setDuration]=useState(tour?.duration||'')
    const [maxGroupSize,setMaxGroupSize]=useState(tour?.maxGroupSize||'')
    const [address,setAddress]=useState(tour?.address||'')
    const [locationName,setLocationName]=useState(tour?.locationName||'')
    const [latLong,setLatLong]=useState(tour?.latLong||'')
    const [imageCover,setImageCover]=useState<string | File>(tour?.imageCover||'')
    const [images,setImages]=useState<string[] | FileList>(tour?.images||[])
    
    const handleMapClick=(latitude:number,longitude:number)=>{
        setLatLong(`${latitude},${longitude}`)
    }
    const handleImageCoverChange=(event:ChangeEvent<HTMLInputElement>)=>{
        if(event.target.files!==null){
            setImageCover(event.target.files[0])
        }
    }
    const handleImagesChange=(event:ChangeEvent<HTMLInputElement>)=>{
        if(event.target.files!==null){
            setImages(event.target.files)
        }
    }
    const getImagesArray=()=>{
        if(!images.length){
            return []
        }
        if(typeof images[0]==='string'){
            return images as string[]
        }
        const imagesFileList = images as FileList
        
        return Array.from(imagesFileList).map(image=>{
            return URL.createObjectURL(image)
        })

    }

    const handleSubmit=async (event:FormEvent)=>{
        event.preventDefault()
        if(!latLong){
            toast.error('Please Choose Location On The Map')
            return
        }
        if(tour&&(!slug||!checkValidURLSlug(slug))){
            toast.error('Please Choose Valid Slug')
            return
        }
        if(!imageCover){
            toast.error('Please Choose Image Cover')
            return
        }
        setLoading(true)
        const data=new FormData()
        data.append('name',name)
        data.append('summary',summary)
        data.append('description',description)
        data.append('price',price.toString())
        data.append('duration',duration.toString())
        data.append('maxGroupSize',maxGroupSize.toString())
        data.append('locationName',locationName)
        data.append('address',address)
        data.append('latLong',latLong)  
        if(slug!==''){
            data.append('slug', slug)
        }  
        if(typeof imageCover!=='string'){
            data.append('imageCover',imageCover,imageCover.name)
        }
        if(images.length && typeof images[0]!=='string'){
            const imagesFileList=images as FileList
            Array.from(imagesFileList).forEach(image=>{
                data.append('images', image,image.name)
            })
        }
        await onSubmit(data)
        
    }
    const imageCoverSrc=typeof imageCover!=='string' && typeof imageCover !== 'undefined' ? URL.createObjectURL(imageCover):imageCover
    const latitude=tour?parseFloat(tour.latLong.split(',')[0]):undefined
    const longitude=tour?parseFloat(tour.latLong.split(',')[1]):undefined

    return(
        <form onSubmit={handleSubmit} >
            <S.FormGroupIMG>
                {imageCover && (
                    <S.FormIMG src={imageCoverSrc}/>
                )}
                <S.FormFileInput multiple={false} type='file' accept='image/*' id='cover' onChange={handleImageCoverChange}/>
                <label htmlFor="cover">Choose Cover</label>
            </S.FormGroupIMG>
            <S.FormGroupIMG>
                {!!images.length && getImagesArray().map(image=>(
                 <S.FormIMG src={image} key={image}/>
                ))}
                <S.FormFileInput multiple type='file' accept='image/*' id='images' onChange={handleImagesChange}/>
                <label htmlFor="images">Choose Images</label>
            </S.FormGroupIMG>
            <S.FormGroup>
                <S.FormLabel htmlFor='name'>Name</S.FormLabel>
                <S.FormInput id='name' placeholder='Tour name' required value={name} onChange={e => setName(e.target.value)}/>
            </S.FormGroup>
            {tour && (
                 <S.FormGroup>
                 <S.FormLabel htmlFor='slug'>Slug</S.FormLabel>
                 <S.FormInput id='slug' placeholder='Tour name' value={slug} onChange={e => setSlug(e.target.value)}/>
                 </S.FormGroup>
            )}
            <S.FormGroup>
                <S.FormLabel htmlFor='summary'>Summary</S.FormLabel>
                <S.FormInput id='summary' placeholder='Tour summary' required as='textarea' value={summary} onChange={(e:ChangeEvent<HTMLTextAreaElement>) => setSummary(e.target.value)}/>
            </S.FormGroup>
            <S.FormGroup>
                <S.FormLabel htmlFor='description'>Description</S.FormLabel>
                <S.FormInput id='description' placeholder='Tour description' required as='textarea' value={description} onChange={(e:ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}/>
            </S.FormGroup>
            <S.FormGroup>
                <S.FormLabel htmlFor='price'>Price</S.FormLabel>
                <S.FormInput id='price' placeholder='Tour price' type='number' required value={price} onChange={e => setPrice(e.target.value)}/>
            </S.FormGroup>
            <S.FormGroup>
                <S.FormLabel htmlFor='duration'>Duration</S.FormLabel>
                <S.FormInput id='duration' placeholder='Tour duration' type='number' required value={duration} onChange={e => setDuration(e.target.value)}/>
            </S.FormGroup>
            <S.FormGroup>
                <S.FormLabel htmlFor='maxGroupSize'>Max Group Size</S.FormLabel>
                <S.FormInput id='maxGroupSize' placeholder='Tour max group size' type='number' required value={maxGroupSize} onChange={e => setMaxGroupSize(e.target.value)} />
            </S.FormGroup>
            <S.FormGroupMap>
                <S.FormLabel>Location</S.FormLabel>
                <Map onClick={handleMapClick} latitude={latitude} longitude={longitude}/>
            </S.FormGroupMap>
            <S.FormGroup>
                <S.FormLabel htmlFor='locationName'>Location Name</S.FormLabel>
                <S.FormInput id='locationName' placeholder='Tour Location Name' required value={locationName} onChange={e => setLocationName(e.target.value)}/>
            </S.FormGroup>
            <S.FormGroup>
                <S.FormLabel htmlFor='address'>Address</S.FormLabel>
                <S.FormInput id='address' placeholder='Tour address' required value={address} onChange={e => setAddress(e.target.value)}/>
            </S.FormGroup>
            <S.FormGroup>
                <S.FormButton type='submit' disabled={loading}>
                  {loading ? <ReactLoading type='spinningBubbles' height={20} width={20}/> : 'Save'}
                </S.FormButton>
            </S.FormGroup>
        </form>
    )
}
export default TourForm