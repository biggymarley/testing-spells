import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { RoomsContext } from "../Context/UserContext";

function LoggedUser() {
  return (
    <RoomsContext.Provider value={{}}>
      <PayPalScriptProvider options={{ "client-id": "your-client-id" }}>
        <PayPalButtons
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: "0.01",
                  },
                },
              ],
            });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then((details) => {
              alert(
                "Transaction completed by " + details.payer.name.given_name
              );
            });
          }}
        />
      </PayPalScriptProvider>
    </RoomsContext.Provider>
  );
}

export default LoggedUser;
