import React from 'react';
import PropTypes from 'prop-types';
import { Container, Img, List, TextInput, ImagePicker, RichText } from '@raketa-cms/raketa-cms';

const CardsWidget = ({ list, containerSettings }) => (
  <Container settings={containerSettings}>
    <div className="cards">
      <div className="container">
        <div className="grid">
          {list.map((card, idx) => (
            <div className="third" key={idx}>
              <a href={card.link} className="card-image">
                <div className="card">
                  <div className="image-wrapper">
                    <Img src={card.image} variant="card_horizontal" />
                  </div>

                  <div className="card-content">
                    <h3>{card.title}</h3>
                    {card.description &&
                      <div className="text" dangerouslySetInnerHTML={{ __html: card.description }} />
                    }
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Container>
);

CardsWidget.title = 'Cards';
CardsWidget.category = 'Lists';

CardsWidget.dialogSize = 'large';

CardsWidget.propTypes = {
  list: PropTypes.array.isRequired,
  containerSettings: PropTypes.object.isRequired,
};

CardsWidget.defaults = {
  list: [
    { id: 1, image: 'http://via.placeholder.com/490x370', title: 'Card title', description: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, necessitatibus repellat soluta quis numquam.</p>', link: '#' },
    { id: 2, image: 'http://via.placeholder.com/490x370', title: 'Card title', description: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, necessitatibus repellat soluta quis numquam.</p>', link: '#' },
    { id: 3, image: 'http://via.placeholder.com/490x370', title: 'Card title', description: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, necessitatibus repellat soluta quis numquam.</p>', link: '#' }
  ]
};

const CardsItem = ({ settings, onChangeItem }) => (
  <div>
    <ImagePicker
      onChange={value => onChangeItem('image', value)}
      value={settings.image}
    />

    <TextInput
      label="Title"
      onChange={value => onChangeItem('title', value)}
      value={settings.title}
    />

    <RichText
      label="Description"
      onChange={value => onChangeItem('description', value)}
      value={settings.description}
    />

    <TextInput
      label="Link"
      onChange={value => onChangeItem('link', value)}
      value={settings.link}
    />
  </div>
);

CardsItem.defaultProps = {
  settings: {},
};

CardsItem.propTypes = {
  settings: PropTypes.object,
  onChangeItem: PropTypes.func.isRequired,
};

CardsWidget.adminFields = (items, onChange, settings) => (
  <div>
    <List
      listItem={(settings, onChangeItem) =>
        <CardsItem settings={settings} onChangeItem={onChangeItem} />}
      onChangeList={onChange}
      items={items}
    />
  </div>
);

export default CardsWidget;
