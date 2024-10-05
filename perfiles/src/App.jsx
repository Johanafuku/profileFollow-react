import { users } from "./constants"
import { ProfileFollowing } from "./components/ProfileFollowing"
import { Footer } from "./components/Footer"
import './App.css'

function App() {

  return (
    <>
      <header className="profile-header">
      <h1>Rick and Morty profiles</h1>
      </header>
     <main className="app">
     
      {
        users.map(({id, name, gender, species, location, image, isFollowing})=>{
          return (
            <ProfileFollowing
             key={id} 
             isFollowing={isFollowing}
             image={image}
             name={name}>
              {
                <>
                  <h2>{name}</h2>
                  <p><span>Gender:</span> {gender}</p>
                  <p><span>Species: </span>{species}</p>
                  <p><span>Location:</span> {location}</p>
                </>     
              }
            </ProfileFollowing>
          )
        })
      }
      <Footer/>
    </main>
    </>
  )
}

export default App
