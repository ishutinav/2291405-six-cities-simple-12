import { render, screen } from '@testing-library/react';
import CardGalleryItem from './card-gallery-item';
import {image } from 'faker';


describe('Component: CardGalleryItem', () => {

  it('should render correctly', () => {
    render(
      <CardGalleryItem img={image.imageUrl(640, 480, 'nature', true)}/>);

    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
