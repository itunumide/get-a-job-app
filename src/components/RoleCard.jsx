import './RoleCard.css'

const RoleCard = ({image, sector, numOfJobs}) => {
  return (
    <div className="role-card">
  <img className="role-card__image" src={image} alt="" />
  <h4 className="role-card__title">{sector}</h4>
  <span className="role-card__jobs">{numOfJobs}</span>
</div>

  )
}

export default RoleCard