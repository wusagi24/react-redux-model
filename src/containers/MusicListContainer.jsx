import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import List from '../components/List';
import { requestMusicList } from '../actions/api';
import { musicListOrderAsc, musicListOrderDesc, musicListSort } from '../actions/musicList';
import MusicList from '../models/MusicList';

class MusicListContainer extends React.Component {
  static propTypes = {
    requestMusicList: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.requestMusicList();
  }

  render() {
    return (
      <List
        listData={this.props.musicList.get('list')}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    musicList: state.musicList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    requestMusicList: () => {
      dispatch(requestMusicList());
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MusicListContainer);
