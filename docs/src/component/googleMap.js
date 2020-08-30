import React,{Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
const style = {
  width: '100%',
  height: '100%'
}
 export class MapContainer extends Component {
     
  render() {
    return (
      <Map google={this.props.google} zoom={14} containerStyle={style} >
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyDSCd0pCdQ3ZSq8dimTyqwrI1jvbCVQB7o")
})(MapContainer)