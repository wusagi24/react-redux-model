import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import SwapVert from 'material-ui/svg-icons/action/swap-vert';
import Divider from 'material-ui/Divider';
import { List } from 'immutable';

const propTypes = {
  isOpened: React.PropTypes.bool.isRequired,
  selectedSortType: React.PropTypes.string.isRequired,
  selectedOrderType: React.PropTypes.string.isRequired,
  sortTypeList: React.PropTypes.instanceOf(List).isRequired,
  orderTypeList: React.PropTypes.instanceOf(List).isRequired,
  onSort: React.PropTypes.func.isRequired,
  onSortAsc: React.PropTypes.func.isRequired,
  onSortDesc: React.PropTypes.func.isRequired,
  handleDialogOpen: React.PropTypes.func.isRequired,
  handleDialogClose: React.PropTypes.func.isRequired,
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
            disabled={sortKey === props.selectedSortType}
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
          disabled={props.orderTypeList.get(0) === props.selectedOrderType}
          style={style.orderButton}
        />
        <FlatButton
          label="降順"
          onTouchTap={props.onSortDesc}
          disabled={props.orderTypeList.get(1) === props.selectedOrderType}
          style={style.orderButton}
        />
      </Dialog>
    </div>
  );
}

ListController.propTypes = propTypes;

export default ListController;
