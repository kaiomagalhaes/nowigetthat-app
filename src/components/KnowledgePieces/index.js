import PropTypes from 'prop-types';
import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { List } from 'immutable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Collection, CollectionItem } from 'react-materialize';
import KnowledgePiecesSelector from '../../selectors/selector_knowledge_pieces';
import { fetchKnowledgePieces } from '../../actions';

const propTypes = {
  fetchKnowledgePieces: PropTypes.func.isRequired,
  knowledgePieces: ImmutablePropTypes.list,
};

const defaultProps = {
  knowledgePieces: List([]),
};

class KnowledgePieces extends React.Component {
  componentWillMount() {
    this.props.fetchKnowledgePieces();
  }

  renderKnowledgePiecesItems() {
    return this.props.knowledgePieces.map(tag => (
      <CollectionItem>
        {tag.get('description')}
      </CollectionItem>
    ));
  }

  renderKnowledgePiecesList() {
    return (
      <Collection>
        {this.renderKnowledgePiecesItems()}
      </Collection>
    );
  }

  render() {
    return (
      <div className="">
        {this.renderKnowledgePiecesList()}
      </div>
    );
  }
}

KnowledgePieces.propTypes = propTypes;
KnowledgePieces.defaultProps = defaultProps;

function mapStateToProps(state) {
  return {
    knowledgePieces: KnowledgePiecesSelector(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchKnowledgePieces: bindActionCreators(fetchKnowledgePieces, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(KnowledgePieces);
