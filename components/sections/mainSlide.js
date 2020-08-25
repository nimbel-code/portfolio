import CustomerSlider from '../customerSlider';
import SectionLayout from '../sectionLayout';
import Universe from '../universe/universe';

const MainSlide = () => (
  <SectionLayout className="h-screen bg-corporative-slideDark text-corporative-color">
    <div className="grid lg:grid-cols-2 flex-1">
      <div className="self-center">
        <h1 className="text-6xl">Agileo CODE</h1>
        <h5>Latest software tools for you.</h5>
        <span>Show me the money.</span>
      </div>
      <Universe className="self-center" />
    </div>
    <CustomerSlider />
  </SectionLayout>
);

export default MainSlide;
