import "../../style/components/card.sass"
import logo from '../../img/logo.png'
import { InfoData } from "../infoData"
export function Card(){
  return (
    <div className="container_card">
      <div className="card">
        <div className="header">
          <div className="img">
            <img src={logo} alt="logo rocketseat cor roxa" />
          </div>
          <h1>Eduardo Ananias</h1>
        </div>
        <div className="content">
          <div className="avatar">
            <img src="https://avatars.githubusercontent.com/u/89052479?v=4" alt="" />
          </div>
          <div className="info">
            <InfoData/>
          </div>
        </div>
        <footer className="footer">
          <img src={logo} alt="" />
          <p>rocketcard</p>
        </footer>
      </div>
    </div>
  )
}
