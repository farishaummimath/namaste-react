import { render, waitFor,fireEvent} from "@testing-library/react";

import "@testing-library/jest-dom";
import Body from "../Body";
import { Provider } from "react-redux";
import store from '../../utils/store';
import { StaticRouter } from "react-router-dom/server";
import { RESTO_DATA } from "../../mocks/data";
global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(RESTO_DATA)
}));// return a promise

test('Shimmer loads results on home page', () => {
    const body = render(<StaticRouter><Provider store={store}><Body /></Provider></StaticRouter>);
    // console.log(body);
    const shimmer = body.getByTestId("shimmer");
    // expect(shimmer.children).toBeInTheDocument();
        expect(shimmer.children.length).toBe(10);

});
test(' Restaurants results on home page', async() => {
    const body = render(<StaticRouter><Provider store={store}><Body /></Provider></StaticRouter>);
    // console.log(body);
    // const searchBtn = body.getByTestId('search-btn');
    // console.log(searchBtn);
    await waitFor(() => expect(body.getByTestId("search-btn")))
    const restList = body.getByTestId("res-list");
    expect(restList.children.length).toBe(15);
});
// test(' search results on home page', () => {
//     const body = render(<StaticRouter><Provider store={store}><Body /></Provider></StaticRouter>);
//     // console.log(body);
//     const searchBtn = body.getByTestId('search-btn');
//     console.log(searchBtn);
// });
test(' Search for string (food) on home page', async() => {
    const body = render(<StaticRouter><Provider store={store}><Body /></Provider></StaticRouter>);
    // console.log(body);
    await waitFor(() => expect(body.getByTestId("search-btn")))
    const searchInput = body.getByTestId("search-input");
    fireEvent.change(searchInput, {
        target: {
            value:'food'
        }
    })
    const searchBtn = body.getByTestId("search-btn");

    fireEvent.click(searchBtn);
    // console.log(searchBtn);
    // await waitFor(() => expect(body.getByTestId("search-input")))
    const restList = body.getByTestId("res-list");
    expect(restList.children.length).toBe(3);
});