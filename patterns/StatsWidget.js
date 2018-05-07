import React from 'react';
import PropTypes from 'prop-types';
import { Container, List, TextInput } from '@raketa-cms/raketa-cms';

const StatsWidget = ({ list, containerSettings }) => (
  <Container settings={containerSettings}>
    <div className="stats">
      <ul>
        {list.map((item, idx) =>
          <li key={idx}>
            <h4>{item.title}</h4>
            <span className="stat">{item.data}</span>
          </li>
        )}
      </ul>
    </div>
  </Container>
);

StatsWidget.title = 'Stats';
StatsWidget.category = 'Highlights';

StatsWidget.propTypes = {
  list: PropTypes.array,
  containerSettings: PropTypes.object.isRequired,
};

StatsWidget.defaults = {
  list: [
    { title: 'Teams', data: '40k' },
    { title: 'Players', data: '500k' },
    { title: 'Stats', data: '300+' },
    { title: 'Session', data: '100+' }
  ]
};

const StatsItem = ({ settings, onChangeItem }) => (
  <div>
    <TextInput
      label="Title"
      onChange={value => onChangeItem('title', value)}
      value={settings.title}
    />

    <TextInput
      label="Data"
      onChange={value => onChangeItem('data', value)}
      value={settings.data}
    />
  </div>
);

StatsItem.defaultProps = {
  settings: {},
};

StatsItem.propTypes = {
  settings: PropTypes.object,
  onChangeItem: PropTypes.func.isRequired,
};

StatsWidget.adminFields = (items, onChange, settings) => (
  <div>
    <List
      listItem={(settings, onChangeItem) =>
        <StatsItem settings={settings} onChangeItem={onChangeItem} />}
      onChangeList={onChange}
      items={items}
    />
  </div>
);

export default StatsWidget;
