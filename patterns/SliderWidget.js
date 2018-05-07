import React from 'react';
import PropTypes from 'prop-types';
import Swiper from 'react-id-swiper';
import { Container, Img, List, ImagePicker, TextArea, SelectMenu } from '@raketa-cms/raketa-cms';

class SliderWidget extends React.Component {
  goNext() {
    if (this.swiper) this.swiper.slideNext()
  }

  goPrev() {
    if (this.swiper) this.swiper.slidePrev()
  }

  render() {
    const { list, size, containerSettings } = this.props;

    return (
      <div>
        <Container settings={containerSettings}>
          <div className={`${size === 'full-width' ? '' : 'container'} slider`}>
            <Swiper
              rebuildOnUpdate
              pagination={{
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
              }}
              paginationClickable
              slidesPerView={1}
              spaceBetween={0}
              loop
              speed={500}
              ref={node => { if (node) this.swiper = node.swiper }}
            >
              {list.map((slide, idx) =>
                <figure className="single-image" key={idx}>
                  <Img src={slide.image} variant="fullscreen" />
                  <figcaption>{slide.description}</figcaption>
                </figure>
              )}
            </Swiper>

            <button onClick={() => this.goNext()} className="swiper-button-next icon-arrow-right" />
            <button onClick={() => this.goPrev()} className="swiper-button-prev icon-arrow-left" />
          </div>
        </Container>
      </div>
    );
  }
}

SliderWidget.title = 'Image Slider';
SliderWidget.category = 'Media';

SliderWidget.propTypes = {
  size: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  containerSettings: PropTypes.object.isRequired,
};

SliderWidget.defaults = {
  size: 'normal',
  list: [
    { id: 1, image: 'http://placehold.it/1920x1080', description: 'Lorem ipsum dolor sit nostrum necessitatibus ipsum dolor' },
    { id: 2, image: 'http://placehold.it/1920x1080', description: 'Lorem ipsum dolor sit nostrum necessitatibus ipsum dolor' },
    { id: 3, image: 'http://placehold.it/1920x1080', description: 'Lorem ipsum dolor sit nostrum necessitatibus ipsum dolor' },
  ],
  containerSettings: {},
};

const SingleImageSliderItem = ({ settings, onChangeItem }) => (
  <div>
    <ImagePicker
      onChange={value => onChangeItem('image', value)}
      value={settings.image}
    />

    <TextArea
      label="Description"
      onChange={value => onChangeItem('description', value)}
      value={settings.description}
    />
  </div>
);

SingleImageSliderItem.defaultProps = {
  settings: {},
};

SingleImageSliderItem.propTypes = {
  settings: PropTypes.object,
  onChangeItem: PropTypes.func.isRequired,
};

SliderWidget.adminFields = (items, onChange, settings) => (
  <div>
    <SelectMenu
      label="Size"
      options={[['normal', 'Normal'], ['full-width', 'Full Width']]}
      value={settings.size}
      onChange={value => onChange('size', value)}
    />

    <List
      listItem={(settings, onChangeItem) =>
        <SingleImageSliderItem settings={settings} onChangeItem={onChangeItem} />}
      onChangeList={onChange}
      items={items}
    />
  </div>
);

export default SliderWidget;
