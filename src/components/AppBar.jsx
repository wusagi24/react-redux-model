import React from 'react';
import MuiAppBar from 'material-ui/AppBar';

function AppBar(props) {
  function getStyle() {
    return {
      wapper: {
        position: 'relative',
        left: 0,
        top: 0,
        marginBottom: 64,
      },
      MuiAppBar: {
        position: 'fixed',
        left: 0,
        top: 0,
      },
    };
  }

  const style = getStyle();

  return (
    <div style={style.wapper}>
      <MuiAppBar
        title={props.title}
        style={style.MuiAppBar}
        showMenuIconButton={false}
      />
    </div>
  );
}

AppBar.propTypes = {
  title: React.PropTypes.string,
};

AppBar.defaultProps = {
  title: '',
};

export default AppBar;
