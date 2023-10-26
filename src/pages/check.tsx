import Banner from "../components/banner/banner";
import PassengersPage from "../components/passengersPage/passengers-page";

import banner from "../img/banner.jpg";

export default function Check() {
  return (
    <>
      <Banner img={banner} />
      <PassengersPage visible={false} />
    </>
  );
}
