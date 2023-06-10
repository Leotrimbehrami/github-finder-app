import UsersResults from "../users/UsersResults"
import UserSearch from "../users/UserSearch"

// console.log(import.meta.env.VITE_APP_GITHUB_URL)
function Home() {
  return (
    <div>
      <UserSearch />
      <UsersResults />
      {/* {import.meta.env.VITE_APP_GITHUB_TOKEN} */}
    </div>
  )
}

export default Home