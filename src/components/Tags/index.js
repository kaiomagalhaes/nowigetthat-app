import PropTypes from 'prop-types';
import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { List } from 'immutable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Collection, CollectionItem } from 'react-materialize';
import TagsSelector from '../../selectors/selector_tags';
import { fetchTags } from '../../actions';

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

  renderTagsItems() {
    return this.props.tags.map(tag => (
      <CollectionItem>
        {tag.get('name')}
      </CollectionItem>
    ));
  }

  renderTagsList() {
    return (
      <Collection>
        {this.renderTagsItems()}
      </Collection>
    );
  }

  render() {
    return (
      <div className="">
        {this.renderTagsList()}
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
