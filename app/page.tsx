import { Banner } from './components/banner';
import { Experience } from './components/experience';
import { Services } from './components/services';
import style from './styles/home.module.css'
export default function Home() {
  return (
    <div>
      <Banner/>
      <Services/>
      <Experience/>
    </div>
  );
}
