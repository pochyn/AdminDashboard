import DashboardResponsive from '../components/DashboardResponsive';
import HeaderSiderLayout from '../layouts/HeaderSiderLayout';

export default function Home() {
  return (
    <div>
      <DashboardResponsive/>      
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