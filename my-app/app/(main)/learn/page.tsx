import { FeedWrapper } from '@/components/FeedWrapper'
import { StickyWrapper } from '@/components/StickyWrapper'
import { Header } from './Header'
import UserProgress from '@/components/UserProgress'

const page = () => {
  return (
    <div className='flex flex-row-reverse gap-12 px-6'>
      <StickyWrapper>
        
        <UserProgress
        activeCourse={{ title: 'Basic Skills', imageSrc: '/skills.png' }}
        hearts={5}
        points={100}
        hasActiveSubscription={true}
        />
      </StickyWrapper>
      <FeedWrapper>
        <Header title='Basic Skills' />
      </FeedWrapper>
    </div>
  )
}

export default page