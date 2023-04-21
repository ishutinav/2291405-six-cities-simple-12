import './load-spinner.css';

function LoadSpinner(): JSX.Element {
  return (
    <div className="spinner-wrapper" data-testid="loader">
      <div className="lds-ring">
        <div>
        </div>
        <div>
        </div>
        <div>
        </div>
        <div>
        </div>
      </div>
      <div>
        <p>Loading data...</p>
      </div>
    </div>
  );
}

export default LoadSpinner;
