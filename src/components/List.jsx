import React from 'react';
import { List as MuiList, ListItem as MuiListItem } from 'material-ui/List';

import ListControllerContainer from '../containers/ListControllerContainer';

const propTypes = {
  listData: React.PropTypes.object.isRequired,
};

function List(props) {
  const list = props.listData;

  return (
    <div>
      <MuiList>
        {list.map(itemMap => (
          <MuiListItem
            primaryText={itemMap.get('title')}
            key={itemMap.get('id')}
          />
        ))}
      </MuiList>
      <ListControllerContainer />
    </div>
  );
}

List.propTypes = propTypes;

export default List;
