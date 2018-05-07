import React from 'react';
import PropTypes from 'prop-types';
import { Container, Img, imageSrc } from '@raketa-cms/raketa-cms';
import Button from '../frontend/Button';

const LeadImageWidget = ({ image, title, description, primaryButton, secondaryButton, overlay, containerSettings }) => (
  <Container settings={containerSettings}>
    <div className="lead-image">
      <Img src={image} variant="lead_fixed" />

      <div className="overlay" style={{ background: `rgba(0, 0, 0, ${overlay})` }}></div>

      <div className="content">
        <div className="container">
          <h1>{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: description }} />

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
  </Container>
);

LeadImageWidget.title = 'Lead Image';
LeadImageWidget.category = 'Media';

LeadImageWidget.defaults = {
  image: 'http://placehold.it/1920x750',
  title: 'Lead image',
  description: 'Sample description',
  primaryButton: { type: 'primary', label: 'Primary', link: '#' },
  secondaryButton: { type: 'secondary', label: 'Secondary', link: '#' },
  overlay: 0,
  containerSettings: {},
};

LeadImageWidget.adminFields = {
  image: { type: 'image' },
  title: { type: 'text' },
  description: { type: 'rich' },
  primaryButton: { type: 'button' },
  secondaryButton: { type: 'button' },
  overlay: { type: 'select', options: [[0, 'No Overlay'], [0.1, '10%'], [0.2, '20%'], [0.3, '30%'], [0.4, '40%'], [0.5, '50%'], [0.6, '60%'], [0.7, '70%'], [0.8, '80%']] },
};

export default LeadImageWidget;
