

import "../../style/components/card.sass"
import logo from '../../img/logo.png'
import { InfoData } from "../infoData"
import { useState } from "react"
import { useEffect } from "react"
export function Card(){
  const [user, setUser] =
    useState({
      avatar: '',
      name: '',
      followers: '',
      following: '',
      public_repos: '',
      company: '',
      location: ''
    })
  const [userGithub, setUserGithub] = useState([])

  useEffect(()=> {
    async function fetchData(){
      const response = await fetch('https://api.github.com/users/Du-devBR')
      const data = await response.json()
      setUser({
        name: data.name,
        avatar: data.avatar_url,
        followers: data.followers,
        following: data.following,
        public_repos: data.public_repos,
        company: data.company,
        location: data.location
      })
    }
    fetchData()
  }, [userGithub])

  return (
    <div className="container_card">
      <div className="card">
        <div className="header">
          <div className="img">
            <img src={logo} alt="logo rocketseat cor roxa" />
          </div>
          <h1>{user.name}</h1>
        </div>
        <div className="content">
          <div className="avatar">
            <img src={user.avatar} alt="" />
          </div>
          <div className="info">
            <InfoData
              followers={user.followers}
              following={user.following}
              public_repos={user.public_repos}
              company={user.company}
              location={user.location}
            />
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
