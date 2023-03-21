import { ComponentType } from 'react';
import Offer from '../../types/offer';
import SimpleCardItem from './simple-card-item';

type HOCProps = {
  offer: Offer;
  onMouseOverHandler: () => void;
  onMouseLeaveHandler: () => void;
}

type Props = {
  children: string | JSX.Element | JSX.Element[];
  onMouseOverHandler: () => void;
  onMouseLeaveHandler: () => void;
}

function makeHardCardItem({offer, onMouseOverHandler, onMouseLeaveHandler}: HOCProps): ComponentType<HOCProps> {


  function InnerItem(): JSX.Element {
    return (
      <MainComponent onMouseOverHandler={onMouseOverHandler} onMouseLeaveHandler={onMouseLeaveHandler}>
        <SimpleCardItem offer={offer}/>
      </MainComponent>
    );
  }
  return InnerItem;
}

function MainComponent({children, onMouseOverHandler, onMouseLeaveHandler} : Props): JSX.Element {
  return (
    <div onMouseOver={onMouseOverHandler} onMouseLeave={onMouseLeaveHandler}>
      {children}
    </div>
  );
}

export default makeHardCardItem;
