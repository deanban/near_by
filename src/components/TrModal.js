import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.getElementById('modal-root');

export default class TrModal extends PureComponent {
  state = {
    placeInfo: [],
  };

  componentDidMount() {
    this.getInfo();
  }

  getInfo = () => {
    let placeInfoArr;
    this.props.places.map(place => {
      if (place.type || place.type === 'Recommended Places') {
        placeInfoArr = place.items.filter(
          item => item.venue.name === this.props.children
        );
      }
    });
    // console.log('TCL: TrModal -> getInfo -> placeInfoArr', placeInfoArr);
    this.setState({ placeInfo: placeInfoArr });
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
      <div
        style={{
          padding: 20,
          background: '#fff',
          borderRadius: '2px',
          display: 'inline-block',
          minHeight: '300px',
          margin: '1rem',
          position: 'relative',
          minWidth: '300px',
          boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
          justifySelf: 'center',
        }}
      >
        <h2>{children}</h2>
        <hr />
        <br />
        {this.state.placeInfo.map(place => (
          <div>
            <h5 key={place.referralId}>
              {place.venue.location.formattedAddress[0]}
            </h5>
            <h6>{place.venue.location.formattedAddress[1]}</h6>
            <h6>{place.venue.location.formattedAddress[2]}</h6>
          </div>
        ))}
      </div>
    </div>
  );

  render() {
    // this.getInfo();
    console.log(this.state);
    return ReactDOM.createPortal(this.renderModal(this.props), modalRoot);
  }
}
