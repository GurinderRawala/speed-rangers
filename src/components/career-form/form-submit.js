export const Submit = ({collection, collect}) =>{
  const Submitted = (e) =>{
    e.preventDefault()
    console.log(collection)
  }
  return { Submitted }
}