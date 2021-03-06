import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ListController from '../components/ListController';
import { musicListOrderAsc, musicListOrderDesc, musicListSort } from '../actions/musicList';
import MusicList from '../models/MusicList';

class ListControllerContainer extends React.Component {
  static propTypes = {
    listOrderAsc: PropTypes.func.isRequired,
    listOrderDesc: PropTypes.func.isRequired,
    listSort: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      isOpened: false,
    };

    this.onSortAsc = this.onSortAsc.bind(this);
    this.onSortDesc = this.onSortDesc.bind(this);
    this.onSort = this.onSort.bind(this);
    this.handleDialogOpen = this.handleDialogOpen.bind(this);
    this.handleDialogClose = this.handleDialogClose.bind(this);
  }

  onSortAsc() {
    this.props.listOrderAsc();
  }

  onSortDesc() {
    this.props.listOrderDesc();
  }

  onSort(key) {
    this.props.listSort(key);
  }

  handleDialogOpen() {
    this.setState({ isOpened: true });
  }

  handleDialogClose() {
    this.setState({ isOpened: false });
  }

  render() {
    return (
      <ListController
        isOpened={this.state.isOpened}
        selectedSortType={this.props.musicList.get('sortType')}
        selectedOrderType={this.props.musicList.get('orderType')}
        sortTypeList={MusicList.sortTypeList}
        orderTypeList={MusicList.orderTypeList}
        onSort={this.onSort}
        onSortAsc={this.onSortAsc}
        onSortDesc={this.onSortDesc}
        handleDialogOpen={this.handleDialogOpen}
        handleDialogClose={this.handleDialogClose}
      />
    );
  }
}

function mapStateToProps(state) {
  return {...state};
}

function mapDispatchToProps(dispatch) {
  return {
    listOrderAsc: () => {
      dispatch(musicListOrderAsc());
    },
    listOrderDesc: () => {
      dispatch(musicListOrderDesc());
    },
    listSort: (key) => {
      dispatch(musicListSort(key));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListControllerContainer);
