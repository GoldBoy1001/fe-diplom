import Banner from "../components/banner/banner";

import banner from "../img/baner1.jpg";
import PassengersPage from "../components/passengersPage/passengers-page";

export default function Passengers() {
  return (
    <>
      <Banner img={banner} />
      <PassengersPage visible={true} />
    </>
  );
}
