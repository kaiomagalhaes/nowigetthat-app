import PropTypes from 'prop-types';
import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { List } from 'immutable';
import TagsSelector from '../../selectors/selector_tags';
import { fetchTags } from '../../actions/tagsActions';

const propTypes = {
  fetchTags: PropTypes.func.isRequired,
  tags: ImmutablePropTypes.list,
};

const defaultProps = {
  tags: List([]),
};

class Tags extends React.Component {
  componentWillMount() {
    this.props.fetchTags();
  }

  renderData() {
    return (
      <div>
        {this.props.tags.map(a => a.get('name'))}
      </div>
    );
  }

  render() {
    return (
      <div className="">
        {this.props.tags.size > 0 ?
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
  return {
    tags: TagsSelector(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTags: bindActionCreators(fetchTags, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Tags);
