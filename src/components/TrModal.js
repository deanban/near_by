import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
// import GoogleMapReact from 'google-map-react';
// import MapStyle from './MapStyle';
import keys from '../keys/keys';

const modalRoot = document.getElementById('modal-root');

export default class TrModal extends PureComponent {
  state = {
    placeInfo: [],
    venuePics: [],
  };

  componentDidMount() {
    this.props.places.map(place => {
      if (place.type || place.type === 'Recommended Places') {
        const placeInfoArr = place.items.filter(
          item => item.venue.name === this.props.children
        );
        this.setState({ placeInfo: placeInfoArr });
      } else this.setState({ placeInfo: this.props.places });
    });
  }

  renderModalInfo = ({ placeInfo }) => {
    if (placeInfo.length === 1) {
      return placeInfo.map(place => (
        <div>
          <h5 key={place.referralId}>
            {place.venue.location.formattedAddress[0]}
          </h5>
          <h6>{place.venue.location.formattedAddress[1]}</h6>
          <h6>{place.venue.location.formattedAddress[2]}</h6>
          <hr />
        </div>
      ));
    }
    if (placeInfo.length > 1) {
      const newPlaceInfo = placeInfo.filter(
        place => place.name === this.props.children
      );
      return newPlaceInfo.map(place => (
        <div>
          <h5 key={place.referralId}>{place.location.formattedAddress[0]}</h5>
          <h6>{place.location.formattedAddress[1]}</h6>
          <h6>{place.location.formattedAddress[2]}</h6>
          <hr />
        </div>
      ));
    }
  };

  renderModal = ({ onClose, children }) => (
    <div
      style={{
        position: 'absolute',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)',
      }}
      onClick={onClose}
    >
      <div className="card" style={{ width: '30rem' }}>
        <div className="card-body">
          <h3 className="card-title">{children}</h3>
          <hr />
          <br />
          {this.renderModalInfo(this.state)}
        </div>
      </div>
    </div>
  );

  render() {
    // this.getInfo();
    console.log(this.state);
    return ReactDOM.createPortal(this.renderModal(this.props), modalRoot);
  }
}
TrModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  places: PropTypes.array,
};
