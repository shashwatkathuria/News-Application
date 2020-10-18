import React from 'react';
import { Alert, ToastAndroid, Platform, Text, View, Modal, Share, StyleSheet, Animated, PanResponder, Dimensions, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { saveNewsArticle, unsaveNewsArticle } from '../../actions/NewsActions';
import { constants, newsItemModalStyles as styles } from '../../stylesheets/main';
import { SaveIcon, UnsaveIcon, ShareIcon } from './Icons';

class NewsItemModal extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      panY: new Animated.Value(Dimensions.get('window').height),
      isSavedArticle: false
    };

    this.resetPositionAnimation = Animated.timing(this.state.panY, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false
    });

    this.closeAnimation = Animated.timing(this.state.panY, {
      toValue: Dimensions.get('window').height,
      duration: 100,
      useNativeDriver: false
    });

    this.panResponders = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => false,
      onPanResponderMove: Animated.event([
        null,
        {dy: this.state.panY},
      ], { useNativeDriver: false }),
      onPanResponderRelease: (e, gs) => {
        if (gs.dy > 0 && gs.vy > 0.2) {
          return this.closeAnimation.start(() => this.props.onDismiss());
        }
        return this.resetPositionAnimation.start();
      },
    });
  }

  async performShareAction() {
    try {
      const result = await Share.share({ message: `\"${this.props.article.title}\" by ${this.props.article.source.name} \n ${this.props.article.url}` });
    } catch (error) {
      displayToast(`Error occured while sharing: ${error.message}`);
    }
  };

  displayToast(message) {
    if (Platform.OS === 'android') {
      ToastAndroid.show(message, ToastAndroid.SHORT);
    } else {
      Alert.alert(message);
    }
  }


  performSaveAction() {
    let message;
    if (this.state.isSavedArticle) {
      this.props.unsaveNewsArticle(this.props.article);
      message = 'Successfully unsaved article';
    } else {
      this.props.saveNewsArticle(this.props.article);
      message = 'Successfully saved article';
    }
    this.handleDismiss();
    this.displayToast(message);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.visible !== this.props.visible && this.props.visible) {
      this.resetPositionAnimation.start();
      this.setState({
        isSavedArticle: this.props.savedNewsArticles.map(newsArticle => newsArticle.title).includes(this.props.article.title)
      });
    }
  }

  handleDismiss() {
    this.closeAnimation.start(() => this.props.onDismiss());
  }

  render() {
    if (!this.props.visible) {
      return <View/>;
    }

    const top = this.state.panY.interpolate({
      inputRange: [-1, 0, 1],
      outputRange: [0, 0, 1],
    });

    let RenderIcon, savedHeadingText, savedHelperText;
    if (this.state.isSavedArticle) {
      RenderIcon = UnsaveIcon;
      savedHeadingText = 'Unsave Article';
      savedHelperText = 'Remove it from your saved articles';
    } else {
      RenderIcon = SaveIcon;
      savedHeadingText = 'Save Article';
      savedHelperText = 'Access it anytime from saved articles';
    }

    return (
      <Modal
        animated
        animationType='fade'
        visible={this.props.visible}
        transparent
        onRequestClose={() => this.handleDismiss()}>
        <TouchableOpacity style={{ flex: 1 }} activeOpacity={1} onPress={() => this.handleDismiss()}>
          <View style={styles.overlay}>
            <Animated.View {...this.panResponders.panHandlers} style={{...styles.modalContainer, top }}>

              <View>
                <View style={styles.topBarContainer}>
                  <View style={styles.topBar}/>
                </View>
                <View style={styles.outerContainer}>
                  <TouchableOpacity
                    style={styles.optionContainer}
                    onPress={() => this.performSaveAction()}>
                      <RenderIcon color={constants.STANDARD_DARK}/>
                      <Text style={{...styles.text, ...styles.headingText}}>
                        {savedHeadingText}
                      </Text>
                      <Text style={{...styles.text, ...styles.helperText}}>
                        {savedHelperText}
                      </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.optionContainer}
                    onPress={() => this.performShareAction()}>
                      <ShareIcon color={constants.STANDARD_DARK} />
                      <Text style={{...styles.text, ...styles.headingText}}>
                        Share Article
                      </Text>
                      <Text style={{...styles.text, ...styles.helperText}}>
                        Share it with your friends and family
                      </Text>
                  </TouchableOpacity>
                </View>
              </View>

            </Animated.View>
          </View>
        </TouchableOpacity>

      </Modal>
    );
  }
}

const mapStateToProps = (state) => ({
  savedNewsArticles: state.newsReducer.savedNewsArticles
})

const mapDispatchToProps = (dispatch) => ({
  saveNewsArticle: (newsArticle) => dispatch(saveNewsArticle(newsArticle)),
  unsaveNewsArticle: (newsArticle) => dispatch(unsaveNewsArticle(newsArticle))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsItemModal);
