import React from 'react'


const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <section>
        {children}
      </section>
      </main>
  )
}

export default layout