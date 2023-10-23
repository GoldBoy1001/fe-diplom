import Banner from "../components/banner/banner";
import PassengersPage from "../components/passengersPage/passengers-page";

import banner from "../img/baner1.jpg";

export default function Check() {
  return (
    <>
      <Banner img={banner} />
      <PassengersPage visible={false} />
    </>
  );
}
