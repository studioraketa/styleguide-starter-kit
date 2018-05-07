import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@raketa-cms/raketa-cms';

const TextBoxWidget = ({ text, variant, alignment, containerSettings }) => (
  <Container settings={containerSettings}>
    <div className="container">
      <div className="grid">
        <div className={variant}>
          <div className={`text ${alignment}`} dangerouslySetInnerHTML={{ __html: text }} />
        </div>
      </div>
    </div>
  </Container>
);

TextBoxWidget.title = 'Text';
TextBoxWidget.category = 'General';

TextBoxWidget.defaults = {
  variant: 'full-width',
  alignment: 'left',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porttitor semper est in porta. Vestibulum fringilla justo in magna ornare, non commodo justo consectetur. Mauris ut tristique nisi, sed tristique lectus. Sed diam mauris, aliquet quis imperdiet sed, viverra sit amet lorem. Quisque urna sapien, molestie a bibendum nec, tempor vitae magna.',
  containerSettings: {},
};

TextBoxWidget.adminFields = {
  variant: { type: 'select', options: [['full-width', 'Full width'], ['shift-2', 'Shifted']] },
  alignment: { type: 'select', options: [['left', 'Left'], ['center', 'Center']] },
  text: { type: 'rich' },
};

TextBoxWidget.dialogSize = 'large';

export default TextBoxWidget;
