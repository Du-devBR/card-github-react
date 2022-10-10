import "../../style/components/infoData.sass"
import followers from '../../img/followers.png'
import repository from '../../img/repository.png'
import company from '../../img/company.png'
import location from '../../img/location.png'
export function InfoData(){
  return (
    <div className="container_info">
      <div className="data">
        <img src={followers} alt="" />
        <p>716</p>
        <p>Seguidores</p>
      </div>
      <div className="data">
        <img src={followers} alt="" />
        <p>716</p>
        <p>Seguidores</p>
      </div>
      <div className="data">
        <img src={repository} alt="" />
        <p>716</p>
        <p>Seguidores</p>
      </div>
      <div className="data">
        <img src={company} alt="" />
        <p>716</p>
        <p>Seguidores</p>
      </div>
      <div className="data">
        <img src={location} alt="" />
        <p>716</p>
        <p>Seguidores</p>
      </div>
    </div>
  )
}
