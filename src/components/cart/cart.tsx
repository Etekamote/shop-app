import { Button } from "../ui/button";
import CartItem from "./cartItem";

export default function Cart() {
  return (
    <div className="w-[90%] space-y-6 lg:w-[30%]">
      <h2 className="text-2xl font-bold">Cart</h2>
      <CartItem />
      <CartItem />
      <CartItem />
      <Button variant="blue" className="w-full">
        Checkout
      </Button>
    </div>
  );
}
