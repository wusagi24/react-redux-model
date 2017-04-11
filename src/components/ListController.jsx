import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import SwapVert from 'material-ui/svg-icons/action/swap-vert';
import Divider from 'material-ui/Divider';

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
  const sortTypeLabels = ['標準', 'タイトル（読み）', 'タイトル（文字）'];
  const closeDialogButton = (
    <FlatButton
      label="close"
      primary
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
          style={style.orderButton}
        />
        <FlatButton
          label="降順"
          onTouchTap={props.onSortDesc}
          style={style.orderButton}
        />
      </Dialog>
    </div>
  );
}

export default ListController;
