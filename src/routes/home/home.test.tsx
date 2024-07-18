import Home from "./home";
import { screen } from '@testing-library/react';
import { renderWithRedux } from "./../../utils/testReduxRender";


describe('Renders main page correctly', async () => {
    it('Should render the page correctly', async () => {
        // Setup
        renderWithRedux(<Home />);
        const h4 = await screen.queryByText('Welcome');

        // Expectations
        expect(h4).not.toBeNull();
    });
});