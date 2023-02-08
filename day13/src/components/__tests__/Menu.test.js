import { render, waitFor,fireEvent} from "@testing-library/react";

import "@testing-library/jest-dom";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import  Cart from "../Cart";

import { Provider } from "react-redux";
import store from '../../utils/store';
import { StaticRouter } from "react-router-dom/server";
import { MENU_DATA } from "../../mocks/data";
global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(MENU_DATA)
}));// return a promise

test('Add items to cart', async() => {
    const restoMenu = render(<StaticRouter><Provider store={store}>
        <Header/><RestaurantMenu /><Cart/></Provider></StaticRouter>);
    // console.log(body);
    await waitFor(() => expect(restoMenu.getByTestId("menu")));
    const addBtn = restoMenu.getAllByTestId("addBtn");
    fireEvent.click(addBtn[ 0 ]);
     fireEvent.click(addBtn[0]);
  fireEvent.click(addBtn[2]);
     const cart = restoMenu.getByTestId("cart-items");
    expect(cart.innerHTML).toBe(" Cart3 items");
});
// test(' Restaurants results on home page', async() => {
//     const body = render(<StaticRouter><Provider store={store}><Body /></Provider></StaticRouter>);
//     // console.log(body);
//     // const searchBtn = body.getByTestId('search-btn');
//     // console.log(searchBtn);
//     await waitFor(() => expect(body.getByTestId("search-btn")))
//     const restList = body.getByTestId("res-list");
//     expect(restList.children.length).toBe(15);
// });
// // test(' search results on home page', () => {
// //     const body = render(<StaticRouter><Provider store={store}><Body /></Provider></StaticRouter>);
// //     // console.log(body);
// //     const searchBtn = body.getByTestId('search-btn');
// //     console.log(searchBtn);
// // });
// test(' Search for string (food) on home page', async() => {
//     const body = render(<StaticRouter><Provider store={store}><Body /></Provider></StaticRouter>);
//     // console.log(body);
//     await waitFor(() => expect(body.getByTestId("search-btn")))
//     const searchInput = body.getByTestId("search-input");
//     fireEvent.change(searchInput, {
//         target: {
//             value:'food'
//         }
//     })
//     const searchBtn = body.getByTestId("search-btn");

//     fireEvent.click(searchBtn);
//     // console.log(searchBtn);
//     // await waitFor(() => expect(body.getByTestId("search-input")))
//     const restList = body.getByTestId("res-list");
//     expect(restList.children.length).toBe(3);
// });