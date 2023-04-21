import { renderHook } from '@testing-library/react';
import useMap from './use-map';
import { makeFakeCity } from '../utils/mocks';

const fakeCity = makeFakeCity();

describe('Test hook: useMap', () => {
  it('should return map object', () => {
    const mapElement = document.createElement('div');
    document.body.appendChild(mapElement);

    const mapRef = {
      current: mapElement,
    };

    const { result } = renderHook(() =>
      useMap(mapRef, fakeCity),
    );

    const map = result.current;
    expect(map).toBeInstanceOf(Object);
  });
});
