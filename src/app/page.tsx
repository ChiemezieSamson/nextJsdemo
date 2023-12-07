import Link from "next/link"
import Links from "./component/Links"

const page = () => {
 
  return (
    <div>
      <header>
        <nav>
          <Link href={"/dashboard"}>Dashboard</Link>
          <Links />
        </nav>
      </header>

    </div>
  )
}

export default page 