import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import TagsSelector from '../../selectors/selector_tags';
import { fetchTags } from '../../actions/tagsActions';
import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  tagActions: PropTypes.object,
  tags: PropTypes.array
};

const defaultProps = {
  tags: [],
};

class Tags extends React.Component {
  componentWillMount() {
    this.props.fetchTags();
  }

  renderData() {
    return <div>{this.props.tags.map(a => a.name )}</div>;
  }

  render() {
    return (
      <div className="">
          {this.props.tags.length > 0 ?
            this.renderData()
            :
            <div className="">
              No Data
            </div>
          }
      </div>
    );
  }
}

Tags.propTypes = propTypes;
Tags.defaultProps = defaultProps;

function mapStateToProps(state) {
  console.log(state);
  return {
    tags: TagsSelector(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTags: bindActionCreators(fetchTags, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tags);
