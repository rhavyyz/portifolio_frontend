import TopBar from  '@/app/[user]/top_bar/top_bar'
import Profile from '@/app/[user]/profile/profile'

export default function ProfilePage(
  { params }: 
  { params: 
    { user: string } 
  }
  ) 
{
  return (
    <main>
      <div className='h-screen'>
        <TopBar/>
        <Profile/>
      </div>
    </main>
  )
}