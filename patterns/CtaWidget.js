import React from 'react';
import { Container, Img, imageSrc } from '@raketa-cms/raketa-cms';
import Button from '../frontend/Button';

const CallToActionWidget = ({ title, description, primaryButton, secondaryButton, containerSettings }) => (
  <Container className="cta-widget" settings={containerSettings}>
    <div className="container">
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
  </Container>
);

CallToActionWidget.title = 'Call to Action';
CallToActionWidget.category = 'Highlights';

CallToActionWidget.defaults = {
  variant: 'horizontal',
  title: 'Call to action',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
  primaryButton: {},
  secondaryButton: {},
  containerSettings: {},
};

CallToActionWidget.adminFields = {
  title: { type: 'text' },
  description: { type: 'rich' },
  primaryButton: { type: 'button' },
  secondaryButton: { type: 'button' },
};

export default CallToActionWidget;
