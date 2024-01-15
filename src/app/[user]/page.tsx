export default function ProfilePage({ params }: { params: { user: string } }) {
  return <div>My Post: {params.user}</div>
}