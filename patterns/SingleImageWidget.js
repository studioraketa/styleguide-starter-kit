import React from 'react';
import PropTypes from 'prop-types';
import { Container, Img } from '@raketa-cms/raketa-cms';

const SingleImageWidget = ({ variant, image, description, containerSettings }) => (
  <Container settings={containerSettings}>
    <div className="container">
      <div className="grid">
        <figure className={`single-image ${variant}`}>
          <Img src={image} variant="image" />
          {description &&
            <figcaption>{description}</figcaption>
          }
        </figure>
      </div>
    </div>
  </Container>
);

SingleImageWidget.title = 'Image';
SingleImageWidget.category = 'Media';

SingleImageWidget.defaults = {
  variant: 'full-width',
  image: 'http://placehold.it/980x735',
  description: 'Image description',
  containerSettings: {},
};

SingleImageWidget.adminFields = {
  variant: { type: 'select', options: [['full-width', 'Normal'], ['shift-2', 'Inset']] },
  image: { type: 'image' },
  description: { type: 'text' },
};

export default SingleImageWidget;
