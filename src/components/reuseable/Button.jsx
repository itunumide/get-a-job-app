

const Button = ({color, text, width, backgroundColor}) => {
  return (
    <>
      <button style={{color:color, height:"45px", border:'none',borderRadius:'50px', fontSize:"14px", fontWeight:"700", width:width, backgroundColor:backgroundColor,}}>{text}</button>
    </>
  )
}

export default Button