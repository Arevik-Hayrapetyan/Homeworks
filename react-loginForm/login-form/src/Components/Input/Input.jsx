export default function Input({type, placeholder, onChange}){
    return(
        <div>
        <input 
        type={type}
        onChange={onChange}
        placeholder={placeholder}
         />
        </div>
    )
}