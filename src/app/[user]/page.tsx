import TopBar from   '@/app/[user]/top_bar/top_bar'
import Profile from  '@/app/[user]/profile/profile'
import Projects from '@/app/[user]/projects/projects'

export default function ProfilePage(
  { params }: 
  { params: 
    { user: string } 
  }
  ) 
{
  return (
    <main>
      <section className='h-screen'>
        <TopBar/>
        <Profile/>
      </section>
      <Projects/> 
    </main>
  )
}