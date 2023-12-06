
const  DashboardLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <section>
   
      <header>
        <nav>
          <h1>dashboard here</h1>
        </nav>
      </header>

      <main>
        {children}
      </main>
 
    </section>
  )
}


export default DashboardLayout