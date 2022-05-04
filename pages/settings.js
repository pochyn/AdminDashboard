import HeaderLayout from '../layouts/HeaderLayout';

export default function Settings() {
  return (
    <div>
        
    </div>
  )
}


Settings.getLayout = function getLayout(page) {
  return (
    <HeaderLayout>
      {page}
    </HeaderLayout>
  )
}