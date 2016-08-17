// redux declaration
import { connect } from 'react-redux';
import Actions from '../../redux/modules/actions';

// component declaration
import Map from './component';

const mapDispatchToProps = {
  getPhotos: Actions.photos.getPhotos,
  setLocation: Actions.map.setLocation,
};

export default connect(null, mapDispatchToProps)(Map);
