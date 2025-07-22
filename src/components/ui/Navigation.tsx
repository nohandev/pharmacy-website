type NavdataType = {
  id: number
  title: string
  content?: string
}

const Navigation = () => {

  const navData = [
    {
      id: 1,
      title: 'Home',
      content: ''
    },
    {
      id: 2,
      title: 'Services',
      content: 'Simulating navigation content'
    },
    {
      id: 3,
      title: 'Speciality',
      content: 'Simulating navigation content'
    },
    {
      id: 4,
      title: 'Blog',
      content: ''
    },
    {
      id: 5,
      title: 'About Us',
      content: ''
    },
    {
      id: 6,
      title: 'Contact',
      content: ''
    },
  ]

  return (
    <div className='flex gap-8 border-1 border-light p-4 rounded-full'>
      {navData.map((data:NavdataType) => (
        // If there were more pages, there would be logic to mark the navigation button that the user is on.
        <a
        key={data.id}
        href='#'
        className='group'>
          <div className='group-hover:bg-primary rounded-full px-4 py-3 transition'>
            <p className='text-secondary group-hover:text-white'>{data.title}</p>
          </div>
        </a>
      ))}
    </div>
  )
}

export default Navigation