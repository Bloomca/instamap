import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// component declaration
import Photos from './component';

const mapStateToProps = createStructuredSelector({
  placeKey: state => state.map.key,
  photos: state => state.photos,
});

export default connect(mapStateToProps)(Photos);
