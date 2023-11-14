import Banner from "../components/banner/banner";
import Order from "../components/order/order";

import banner from "../img/banner.jpg";

export default function SuccessfulOrder() {
  return (
    <>
      <Banner img={banner} />
      <Order />
    </>
  );
}
