import { Link, Outlet } from "react-router"

const Home = () => {
  return (
    <div>
      Home
      <Link to='comments'>
        <button className="text-xl font-bold p-3 bg-amber-600 rounded-2xl">Comments</button>
      </Link>
      <Outlet />
    </div>
  )
}

export default Home