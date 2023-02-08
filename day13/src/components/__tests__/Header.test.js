import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from '../../utils/store';
import { StaticRouter } from "react-router-dom/server";

test('Logo should load on rendering header', () => {
    //Load header
    
    const header = render(<StaticRouter><Provider store={store}><Header /></Provider></StaticRouter>);
    // check if logo loadeds
    const logo = header.getAllByTestId('logo');
    expect(logo[0].src).toBe("http://localhost/dummy.png")

});

// test('Online status should be green on rendering header', () => {
//      const header = render(
//         <StaticRouter>
//             <Provider store={store}>
//                 <Header />
//         </Provider>
//          </StaticRouter>
//      );
//     // check if Online status is green
//     const onlineStatus = header.getByTestId('online-status');
//     expect(onlineStatus.innerHTML).toBe("✅")
//     // expect()
// });
// test('Cart items should  be zero on rendering header', () => {
//     // expect()
//      const header = render(
//         <StaticRouter>
//             <Provider store={store}>
//                 <Header />
//         </Provider>
//          </StaticRouter>
//     );
//     // check if Online status is green
//     const cartItems = header.getByTestId('cart-items');
//     expect(cartItems.innerHTML).toBe("Cart0 items")
// });

// test('Footer should be there on page  load', () => {
//     // expect()
//      const header = render(
//         <StaticRouter>
//             <Provider store={store}>
//                 <Header />
//         </Provider>
//          </StaticRouter>
//     );
//     // check if Online status is green
//     // const cartItems = header.getByTestId('cart-items');
//     // expect(cartItems.innerHTML).toBe("Cart0 items")
// });