import styled from 'styled-components'

export const FormGroup = styled.div`
&:not(:last-child){
    margin-bottom: 2.5rem;
}
`
export const FormGroupIMG = styled(FormGroup)`
    display: flex;
    align-items: center;
    font-size: 1.6rem;
`

export const FormGroupMap = styled.div`
    margin-bottom: 5rem;
    height: 50rem;
`
export const FormIMG = styled.img`
    height:7.5rem;
    width: 7.5rem;
    border-radius: 50%;
    margin-right: 2rem;
`
export const FormFileInput = styled.input`
width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;

  &:focus + label {
    outline: 3px solid #0ED2F7;
    outline-offset: 3px;
  }

  & + label {
    color: #0ED2F7;
    display: inline-block;
    text-decoration: none;
    border-bottom: 1px solid #0ED2F7;
    padding: 3px;
    transition: all 0.2s;
    cursor: pointer;
  }

  & + label:hover {
    background-color: #0ED2F7;
    color: #fff;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }
`
export const FormLabel = styled.label`
    display: block;
    font-size: 1.6rem;
    font-weight: 700;
    margin-bottom: 0.75rem;

`
export const FormInput = styled.input`
  display: block;
  font-family: inherit;
  font-size: 1.5rem;
  color: inherit;
  padding: 1.25rem 1.75rem;
  border: none;
  width: 100%;
  background-color: #fff;
  background-color: #f2f2f2;
  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;
  transition: all 0.3s;
  border-radius: 4px;
  box-sizing: border-box;
  resize: vertical;

  &:focus {
    outline: none;
    border-bottom: 3px solid #0ED2F7;
  }

  &:focus:invalid {
    border-bottom: 3px solid #ff7730;
  }

  &::-webkit-input-placeholder {
    color: #bbb;
  }
`
export const FormButton = styled.button`
font-size: 1.6rem;
  padding: 1.4rem 3rem;
  border-radius: 10rem;
  text-transform: uppercase;
  display: inline-block;
  text-decoration: none;
  position: relative;
  transition: all 0.4s;
  font-weight: 400;
  backface-visibility: hidden;
  border: none;
  cursor: pointer;
  margin-top: 3rem;

  background-color: #0ED2F7;
  color: #fff;

  &::after {
    background-color: #0ED2F7;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:focus {
    outline: none;
    background-color: #069fbc;
  }

`