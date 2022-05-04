import Content from '../components/Responsive';
import HeaderSiderLayout from '../layouts/HeaderSiderLayout';

export default function Home() {
  return (
    <div>
      <Content/>      
    </div>
  )
}


Home.getLayout = function getLayout(page) {
  return (
    <HeaderSiderLayout>
      {page}
    </HeaderSiderLayout>
  )
}