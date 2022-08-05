
const reducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_CART":
      // return { ...state, cart: [] };
      return Object.assign({}, state, { cart: [] });
      break;

    case "REMOVE":

      return Object.assign({}, state, {
        cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
      });

    case "INCREASE":

      const check1 = state.cart.find(
        (cartItem) => cartItem.id === action.payload
      );

      
      if (!Array.isArray(check1)) {
        let tempCart1 = state.cart.map((cartItem) => {
          if (Object.is(cartItem.id, action.payload)) {
            // return { ...cartItem, amount: cartItem.amount + 1 };
            return Object.assign({}, cartItem, { amount: cartItem.amount + 1 });
          }
          return cartItem;
        });
        // return { ...state, cart: tempCart1 }
        return Object.assign({}, state, { cart: tempCart1 });
      }
      break;

    case "DECREASE":
      const check2 = state.cart.find(
        (cartItem) => cartItem.id === action.payload
      );
      if (!Array.isArray(check2)) {
        let tempCart2 = state.cart
          .map((cartItem) => {
            if (Object.is(cartItem.id, action.payload)) {
              // return { ...cartItem, amount: cartItem.amount - 1 };
              return Object.assign({}, cartItem, {
                amount: cartItem.amount - 1,
              });
            }
            return cartItem;
          })
          .filter((cartItem) => cartItem.amount !== 0);
        // return { ...state, cart: tempCart2 };
        return Object.assign({}, state, { cart: tempCart2 });
      }

      break;

    case "GET_TOTALS":
      let { total, amount } = state.cart
        // .filter(function (total) {
        //   return typeof total === "number";
        // })
        .reduce(
          (cartTotal, cartItem) => {
            const { price, amount } = cartItem;
            const itemTotal = price * amount;

            cartTotal.total += itemTotal;
            cartTotal.amount += amount;
            return cartTotal;
          },
          {
            total: 0,
            amount: 0,
          }
        );
      total = parseFloat(total.toFixed(2));

      return { ...state, total, amount };
      break;

    case "LOADING":
      // return { ...state, loading: true };
      return Object.assign({}, state, { loading: true })
      break;

    case "DISPLAY_ITEMS":
      // return { ...state, cart: action.payload, loading: true };
      return Object.assign({}, state, { cart: action.payload, loading: true })
      break;

    case "TOGGLE_AMOUNT":
      const check3 = state.cart.find(
        (cartItem) => cartItem.id === action.payload
      );

      if (!Array.isArray(check3)) {
        let tempCart = state.cart
          .map((cartItem) => {
            if (Object.is(cartItem.id, action.payload)) {
              if (Object.is(action.payload.type, "inc")) {
                // return { ...cartItem, amount: cartItem.amount + 1 };
                return Object.assign({}, cartItem, {
                  amount: cartItem.amount + 1,
                });
              }
              if (Object.is(action.payload.type, "dec")) {
                // return { ...cartItem, amount: cartItem.amount - 1 };
                return Object.assign({}, cartItem, {
                  amount: cartItem.amount - 1,
                });
              }
            }
            return cartItem;
          })
          .filter((cartItem) => cartItem.amount !== 0);
        // return { ...state, cart: tempCart };
        return Object.assign({}, state, { cartItem: tempCart });
      }
    default:
      break;
  }
  throw new Error("no matching action type");
};

export default reducer;
