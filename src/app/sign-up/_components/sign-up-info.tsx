import Heading from "./heading";
import InfoItem from "./info-item";

import FastForwardIcon from "@mui/icons-material/FastForward";
import ListAltIcon from "@mui/icons-material/ListAlt";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import DiscountIcon from "@mui/icons-material/Discount";

export default function SignUpInfo() {
  return (
    <section className="mt-6 space-y-4 flex flex-col items-center lg:w-1/2">
      <Heading>Why it&apos;s worth having an account on storeX</Heading>
      <ul className="w-[70%] space-y-4">
        <InfoItem>
          <FastForwardIcon />
          <span>Order faster</span>
        </InfoItem>
        <InfoItem>
          <ListAltIcon />
          <span>Check previous orders</span>
        </InfoItem>
        <InfoItem>
          <LocalShippingIcon />
          <span>Track order status</span>
        </InfoItem>
        <InfoItem>
          <DiscountIcon />
          <span>Use discounts and promotions</span>
        </InfoItem>
      </ul>
    </section>
  );
}
