import { render, screen } from '@testing-library/react';
import { GifGridItem } from '../../src/components/GifGridItem';

describe('Pruebas sobre <GifGridItem/>', () => {
    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg';

    test('Debe hacer match con el Snapshot', () => {
        const { container } = render(<GifGridItem title={title} url={url} />);

        expect(container).toMatchSnapshot();
    });

    test('Debe de mostrar la imagen con el URL y el ALT indicado', () => {

        render(<GifGridItem title={title} url={url} />);
        // expect(screen.getByRole('img').src).toBe(url);
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('Debe de mostrar el titulo en el componente', () => {
        render(<GifGridItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
    });
});
