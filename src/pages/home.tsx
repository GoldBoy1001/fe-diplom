import About from "../components/about/about";
import Banner from "../components/banner/banner";
import Reviews from "../components/reviws/reviews";
import Works from "../components/works/works";

import banner from "../img/baner1.jpg";

export default function Home() {
  return (
    <>
      <Banner img={banner} onFurther={false} />
      <About />
      <Works />
      <Reviews />
    </>
  );
}
