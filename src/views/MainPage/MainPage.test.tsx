import { useState } from 'react';
import renderer from 'react-test-renderer';
import { MainPage } from './MainPage';
import { mockProducts } from '../../Product';
import { MemoryRouter } from 'react-router-dom';

describe('MainPage', () => {
    const WrapperComponent = () => {
        const [products, setProducts] = useState(mockProducts);
        return <MainPage products={products} setProducts={setProducts} />;
    };

    const MainPageRender = renderer.create(
        <MemoryRouter>
            <WrapperComponent />
        </MemoryRouter>
    );

    it('should match the snapshot', () => {
        expect(MainPageRender.toJSON()).toMatchSnapshot();
    });
});
