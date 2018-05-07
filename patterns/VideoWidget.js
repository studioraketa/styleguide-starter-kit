import React from 'react';
import PropTypes from 'prop-types';
import { Container, EmbeddedVideo } from '@raketa-cms/raketa-cms';

const VideoWidget = ({ videoUrl, variant, containerSettings }) => (
  <Container settings={containerSettings}>
    <div className="container">
      <div className="video">
        <div className="grid">
          <div className={variant === 'normal' ? 'full-width' : 'shift-2'}>
            <div className="video-wrapper">
              <EmbeddedVideo videoUrl={videoUrl} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
);

VideoWidget.title = 'Video';
VideoWidget.category = 'Media';

VideoWidget.propTypes = {
  videoUrl: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  containerSettings: PropTypes.object.isRequired,
};

VideoWidget.defaults = {
  videoUrl: 'https://www.youtube.com/embed/99w8cdTcliA',
  variant: 'normal',
  containerSettings: {},
};

VideoWidget.adminFields = {
  variant: { type: 'select', options: [['normal', 'Normal'], ['inset', 'Inset']] },
  videoUrl: { type: 'text' },
};

export default VideoWidget;
