import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@raketa-cms/raketa-cms';

const HtmlWidget = ({ code, variant, containerSettings }) => (
  <Container settings={containerSettings}>
    <div
      dangerouslySetInnerHTML={{__html: code}}
      className={variant === 'contained' ? 'container' : ''}
    />
  </Container>
);

HtmlWidget.title = 'HTML';
HtmlWidget.category = 'General';

HtmlWidget.propTypes = {
  code: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
};

HtmlWidget.defaults = {
  code: '<h1>Custom HTML</h1>',
  variant: 'contained',
};

HtmlWidget.adminFields = {
  code: { type: 'textarea' },
  variant: { type: 'select', options: [['full-width', 'Full width'], ['contained', 'Contained']] },
};

export default HtmlWidget;
