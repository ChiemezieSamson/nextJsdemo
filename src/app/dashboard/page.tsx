import Link from "next/link"

const page = () => {
  return <h1 className="text-cener text-3xl text-pink-400">Hello, Dashboard Page!
     <Link href={"/"}>Home</Link>
  </h1>
}

export default page 