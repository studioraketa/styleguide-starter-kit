import React from 'react';
import PropTypes from 'prop-types';
import { Container, Img } from '@raketa-cms/raketa-cms';
import Button from '../frontend/Button';

const SpotlightImage = ({ image }) => (
  <div className="half">
    <Img src={image} variant="fixed_image" />
  </div>
);

const SpotlightContent = ({ title, description, primaryButton, secondaryButton }) => (
  <div className="half">
    <div className="spotlight-content-wrapper">
      <div className="spotlight-content">
        <h2>{title}</h2>
        {description &&
          <div dangerouslySetInnerHTML={{ __html: description }} />
        }

        <div className="btn-wrapper">
          {(primaryButton && primaryButton.label) &&
            <Button settings={primaryButton} />
          }
          {(secondaryButton && secondaryButton.label) &&
            <Button settings={secondaryButton} />
          }
        </div>
      </div>
    </div>
  </div>
);

const SpotlightWidget = ({
  direction,
  image,
  title,
  description,
  primaryButton,
  secondaryButton,
  containerSettings
}) => (
  <Container settings={containerSettings}>
      <div className="spotlight">
        <div className="fluid-container">
          {direction === 'left' &&
            <div className="grid">
              <SpotlightImage image={image} />

              <SpotlightContent
                title={title}
                description={description}
                primaryButton={primaryButton}
                secondaryButton={secondaryButton}
              />
            </div>
          }

          {direction === 'right' &&
            <div className="grid">
              <SpotlightContent
                title={title}
                description={description}
                primaryButton={primaryButton}
                secondaryButton={secondaryButton}
              />

              <SpotlightImage image={image} />
            </div>
          }
        </div>
      </div>
  </Container>
);

SpotlightWidget.title = 'Spotlight';
SpotlightWidget.category = 'Highlights';

SpotlightWidget.dialogSize = 'large';

SpotlightWidget.defaults = {
  direction: 'left',
  image: 'http://via.placeholder.com/829x533',
  title: 'Spotlight title',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptatibus ratione ab nisi facere voluptas unde recusandae, dolorem quis blanditiis odit similique voluptate. Nostrum praesentium expedita vero, culpa eum perferendis!',
  primaryButton: {},
  secondaryButton: {},
};

SpotlightWidget.adminFields = {
  direction: { type: 'select', options: [['left', 'Left'], ['right', 'Right']] },
  image: { type: 'image' },
  title: { type: 'text' },
  description: { type: 'rich' },
  primaryButton: { type: 'button' },
  secondaryButton: { type: 'button' },
};

export default SpotlightWidget;
