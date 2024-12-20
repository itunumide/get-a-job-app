import next from "../../assets/Next Arrow.svg";
import prev from "../../assets/Prev Arrow.svg";
import './Arrow.css'

const Arrow = ({align}) => {
  return (
    <div className="arrow-container" style={{alignSelf: align}}>
    <img src={prev} alt="previous arrow" />
    <img src={next} alt="next arrow" />
  </div>
  )
}

export default Arrow