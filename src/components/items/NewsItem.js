import React from 'react';
import { connect } from 'react-redux';
import VerticalNewsItem from './variants/VerticalNewsItem';
import PlainNewsItem from './variants/PlainNewsItem';
import HorizontalNewsItem from './variants/HorizontalNewsItem';

class NewsItem extends React.Component {

  render() {
    let Variant;

    switch (this.props.variant) {
      case 'VerticalNewsItem':
        Variant = VerticalNewsItem;
        break;
      case 'HorizontalNewsItem':
        Variant = HorizontalNewsItem;
        break;
      case 'PlainNewsItem':
        Variant = PlainNewsItem;
        break;
    }

    return (
      <Variant
        openModal={this.props.openModal}
        article={this.props.article}/>
    );
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsItem);
