import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@raketa-cms/raketa-cms';

const SectionTitleWidget = ({ title, containerSettings }) => (
  <Container settings={containerSettings}>
    <div className="container">
      <div className="section-title">
        <h2>{title}</h2>
      </div>
    </div>
  </Container>
);

SectionTitleWidget.title = 'Section Title';
SectionTitleWidget.category = 'General';

SectionTitleWidget.propTypes = {
  title: PropTypes.string.isRequired,
  containerSettings: PropTypes.object.isRequired,
};

SectionTitleWidget.defaults = {
  title: 'Section title',
  containerSettings: {},
};

SectionTitleWidget.adminFields = {
  title: { type: 'text' },
};

export default SectionTitleWidget;
