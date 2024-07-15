'use client'
import HomePage from './Home/page';
import HeaderFooter from '../Components/HeaderFooterWrapper/HeaderFooterWrapper';
export default function MobileNavbar({ children }: { children: any }) {
  return (
    <HeaderFooter>
      <HomePage/>
    </HeaderFooter>
  );
}