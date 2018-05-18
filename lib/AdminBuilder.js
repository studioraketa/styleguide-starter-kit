import React from 'react';
import { PageBuilder } from '@raketa-cms/raketa-cms';

import LIBRARY from '../patterns';

const IMAGES = [{"id":12,"name":"tiago-almeida-185270.jpg","width":1920,"height":1280,"urls":{"original":"/static/system/images/assets/000/000/012/original/tiago-almeida-185270.jpg?1520321003","image":"/static/system/images/assets/000/000/012/image/tiago-almeida-185270.jpg?1520321003","vertical":"/static/system/images/assets/000/000/012/vertical/tiago-almeida-185270.jpg?1520321003","lead":"/static/system/images/assets/000/000/012/lead/tiago-almeida-185270.jpg?1520321003","fullscreen":"/static/system/images/assets/000/000/012/fullscreen/tiago-almeida-185270.jpg?1520321003","thumb":"/static/system/images/assets/000/000/012/thumb/tiago-almeida-185270.jpg?1520321003"},"alt":null},{"id":11,"name":"simone-hutsch-384848.jpg","width":1358,"height":1920,"urls":{"original":"/static/system/images/assets/000/000/011/original/simone-hutsch-384848.jpg?1520320997","image":"/static/system/images/assets/000/000/011/image/simone-hutsch-384848.jpg?1520320997","vertical":"/static/system/images/assets/000/000/011/vertical/simone-hutsch-384848.jpg?1520320997","lead":"/static/system/images/assets/000/000/011/lead/simone-hutsch-384848.jpg?1520320997","fullscreen":"/static/system/images/assets/000/000/011/fullscreen/simone-hutsch-384848.jpg?1520320997","thumb":"/static/system/images/assets/000/000/011/thumb/simone-hutsch-384848.jpg?1520320997"},"alt":null},{"id":10,"name":"samuel-zeller-111218.jpg","width":1920,"height":1280,"urls":{"original":"/static/system/images/assets/000/000/010/original/samuel-zeller-111218.jpg?1520320993","image":"/static/system/images/assets/000/000/010/image/samuel-zeller-111218.jpg?1520320993","vertical":"/static/system/images/assets/000/000/010/vertical/samuel-zeller-111218.jpg?1520320993","lead":"/static/system/images/assets/000/000/010/lead/samuel-zeller-111218.jpg?1520320993","fullscreen":"/static/system/images/assets/000/000/010/fullscreen/samuel-zeller-111218.jpg?1520320993","thumb":"/static/system/images/assets/000/000/010/thumb/samuel-zeller-111218.jpg?1520320993"},"alt":null},{"id":9,"name":"soragrit-wongsa-377820.jpg","width":1920,"height":1280,"urls":{"original":"/static/system/images/assets/000/000/009/original/soragrit-wongsa-377820.jpg?1520320971","image":"/static/system/images/assets/000/000/009/image/soragrit-wongsa-377820.jpg?1520320971","vertical":"/static/system/images/assets/000/000/009/vertical/soragrit-wongsa-377820.jpg?1520320971","lead":"/static/system/images/assets/000/000/009/lead/soragrit-wongsa-377820.jpg?1520320971","fullscreen":"/static/system/images/assets/000/000/009/fullscreen/soragrit-wongsa-377820.jpg?1520320971","thumb":"/static/system/images/assets/000/000/009/thumb/soragrit-wongsa-377820.jpg?1520320971"},"alt":null},{"id":8,"name":"ilya-yakover-270146.jpg","width":1920,"height":1145,"urls":{"original":"/static/system/images/assets/000/000/008/original/ilya-yakover-270146.jpg?1520320958","image":"/static/system/images/assets/000/000/008/image/ilya-yakover-270146.jpg?1520320958","vertical":"/static/system/images/assets/000/000/008/vertical/ilya-yakover-270146.jpg?1520320958","lead":"/static/system/images/assets/000/000/008/lead/ilya-yakover-270146.jpg?1520320958","fullscreen":"/static/system/images/assets/000/000/008/fullscreen/ilya-yakover-270146.jpg?1520320958","thumb":"/static/system/images/assets/000/000/008/thumb/ilya-yakover-270146.jpg?1520320958"},"alt":null},{"id":7,"name":"alejandro-escamilla-4.jpg","width":5616,"height":3744,"urls":{"original":"/static/system/images/assets/000/000/007/original/alejandro-escamilla-4.jpg?1520320899","image":"/static/system/images/assets/000/000/007/image/alejandro-escamilla-4.jpg?1520320899","vertical":"/static/system/images/assets/000/000/007/vertical/alejandro-escamilla-4.jpg?1520320899","lead":"/static/system/images/assets/000/000/007/lead/alejandro-escamilla-4.jpg?1520320899","fullscreen":"/static/system/images/assets/000/000/007/fullscreen/alejandro-escamilla-4.jpg?1520320899","thumb":"/static/system/images/assets/000/000/007/thumb/alejandro-escamilla-4.jpg?1520320899"},"alt":null},{"id":6,"name":"kari-shea-199320.jpg","width":5298,"height":3532,"urls":{"original":"/static/system/images/assets/000/000/006/original/kari-shea-199320.jpg?1520320899","image":"/static/system/images/assets/000/000/006/image/kari-shea-199320.jpg?1520320899","vertical":"/static/system/images/assets/000/000/006/vertical/kari-shea-199320.jpg?1520320899","lead":"/static/system/images/assets/000/000/006/lead/kari-shea-199320.jpg?1520320899","fullscreen":"/static/system/images/assets/000/000/006/fullscreen/kari-shea-199320.jpg?1520320899","thumb":"/static/system/images/assets/000/000/006/thumb/kari-shea-199320.jpg?1520320899"},"alt":null},{"id":4,"name":"aleks-dahlberg-281175.jpg","width":3872,"height":2592,"urls":{"original":"/static/system/images/assets/000/000/004/original/aleks-dahlberg-281175.jpg?1520320899","image":"/static/system/images/assets/000/000/004/image/aleks-dahlberg-281175.jpg?1520320899","vertical":"/static/system/images/assets/000/000/004/vertical/aleks-dahlberg-281175.jpg?1520320899","lead":"/static/system/images/assets/000/000/004/lead/aleks-dahlberg-281175.jpg?1520320899","fullscreen":"/static/system/images/assets/000/000/004/fullscreen/aleks-dahlberg-281175.jpg?1520320899","thumb":"/static/system/images/assets/000/000/004/thumb/aleks-dahlberg-281175.jpg?1520320899"},"alt":null},{"id":3,"name":"baron-fig-189128.jpg","width":2700,"height":1802,"urls":{"original":"/static/system/images/assets/000/000/003/original/baron-fig-189128.jpg?1520320899","image":"/static/system/images/assets/000/000/003/image/baron-fig-189128.jpg?1520320899","vertical":"/static/system/images/assets/000/000/003/vertical/baron-fig-189128.jpg?1520320899","lead":"/static/system/images/assets/000/000/003/lead/baron-fig-189128.jpg?1520320899","fullscreen":"/static/system/images/assets/000/000/003/fullscreen/baron-fig-189128.jpg?1520320899","thumb":"/static/system/images/assets/000/000/003/thumb/baron-fig-189128.jpg?1520320899"},"alt":null},{"id":1,"name":"aaron-burden-123584.jpg","width":4592,"height":3448,"urls":{"original":"/static/system/images/assets/000/000/001/original/aaron-burden-123584.jpg?1519301013","image":"/static/system/images/assets/000/000/001/image/aaron-burden-123584.jpg?1519301013","vertical":"/static/system/images/assets/000/000/001/vertical/aaron-burden-123584.jpg?1519301013","lead":"/static/system/images/assets/000/000/001/lead/aaron-burden-123584.jpg?1519301013","fullscreen":"/static/system/images/assets/000/000/001/fullscreen/aaron-burden-123584.jpg?1519301013","thumb":"/static/system/images/assets/000/000/001/thumb/aaron-burden-123584.jpg?1519301013"},"alt":"test 123"}];

class MediaManager {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  findAll(callback, params = {}) {
    callback(IMAGES);
    return;
  }

  uploadFile(file, callback) {
    alert('Disabled for the demo.');
    callback({});
    return;
  }

  update(image, params, callback) {
    alert('Disabled for the demo.');
    callback({});
    return;
  }

  destroy(image, callback) {
    alert('Disabled for the demo.');
    callback({});
    return;
  }
}

const DEFAULT_PAGE = {
  id: null,
  slug: 'example-slug',
  title: 'Example page',
  description: 'Example description',
  widgets: [],
};

class AdminBuilder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dirty: false,
      isLoading: false,
      page: props.page,
    };

    this.mediaManager = new MediaManager('http://localhost:3001/');
  }

  componentDidMount() {
    const STORED_PAGE = window.localStorage.getItem('_page');

    const page = STORED_PAGE ? JSON.parse(STORED_PAGE) : DEFAULT_PAGE;

    this.setState({ page: false }, () => {
      this.setState({ page });
    });
  }

  handleChange() {
    this.setState({ dirty: true });
  }

  handleSave(page) {
    localStorage.setItem('_page', JSON.stringify(page));
    this.setState({ dirty: false });
  }

  render() {
    const { host } = this.props;
    const { isLoading, dirty, page } = this.state;

    return (
      <div className="widgets-spacings-reset">
        {page &&
          <PageBuilder
            host={host}
            dirty={dirty}
            library={LIBRARY}
            themes={[['none', 'None'], ['white', 'White'], ['grey', 'Grey'], ['black', 'Black']]}
            spacings={[['none', 'None'], ['both', 'Both'], ['top', 'Top'], ['bottom', 'Bottom']]}
            page={page}
            mediaManager={this.mediaManager}
            onChange={changedPage => this.handleChange(changedPage)}
            onSave={pageToSave => this.handleSave(pageToSave)}
            onExit={() => window.location.href = '/components'}
          />
        }
      </div>
    );
  }
}

AdminBuilder.defaultProps = {
  page: DEFAULT_PAGE,
};

export default AdminBuilder;