import React from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import SwapVert from 'material-ui/svg-icons/action/swap-vert';
import Divider from 'material-ui/Divider';
import { List } from 'immutable';

const propTypes = {
  isOpened: PropTypes.bool.isRequired,
  selectedSortType: PropTypes.string.isRequired,
  selectedOrderType: PropTypes.string.isRequired,
  sortTypeList: PropTypes.instanceOf(List).isRequired,
  orderTypeList: PropTypes.instanceOf(List).isRequired,
  onSort: PropTypes.func.isRequired,
  onSortAsc: PropTypes.func.isRequired,
  onSortDesc: PropTypes.func.isRequired,
  handleDialogOpen: PropTypes.func.isRequired,
  handleDialogClose: PropTypes.func.isRequired,
};

function ListController(props) {
  function getStyle() {
    return {
      wrapper: {
      },
      FloatingActionButton: {
        position: 'fixed',
        right: 16,
        bottom: 16,
        zIndex: 2,
      },
      orderButton: {
        minWidth: '50%',
      },
    };
  }

  const style = getStyle();
  const sortTypeLabels = ['リリース', 'タイトル（読み）', 'タイトル（文字）'];
  const closeDialogButton = (
    <FlatButton
      label="close"
      secondary
      onTouchTap={props.handleDialogClose}
    />
  );

  return (
    <div style={style.wrapper}>
      <FloatingActionButton
        style={style.FloatingActionButton}
        secondary
        onTouchTap={props.handleDialogOpen}
      >
        <SwapVert />
      </FloatingActionButton>
      <Dialog
        title="ソート順"
        actions={closeDialogButton}
        modal={false}
        open={props.isOpened}
        onRequestClose={props.handleDialogClose}
      >
        {props.sortTypeList.map((sortKey, key) => (
          <FlatButton
            key={sortKey}
            label={sortTypeLabels[key]}
            primary={sortKey === props.selectedSortType}
            fullWidth
            onTouchTap={() => {
              props.onSort(sortKey);
            }}
          />
        ))}
        <Divider />
        <FlatButton
          label="昇順"
          onTouchTap={props.onSortAsc}
          primary={props.orderTypeList.get(0) === props.selectedOrderType}
          style={style.orderButton}
        />
        <FlatButton
          label="降順"
          onTouchTap={props.onSortDesc}
          primary={props.orderTypeList.get(1) === props.selectedOrderType}
          style={style.orderButton}
        />
      </Dialog>
    </div>
  );
}

ListController.propTypes = propTypes;

export default ListController;
