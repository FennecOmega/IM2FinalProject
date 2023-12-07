import "../../index.css";
import OrderForms from "../../Components/OrderForms.jsx";

function OrderPage() {
  return (
    <>
      <div className="flex flex-col items-center gap-4">
        <OrderForms />
      </div>
    </>
  );
}

export default OrderPage;
