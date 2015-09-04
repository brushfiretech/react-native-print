/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var {
  AppRegistry,
  NativeModules: {
    RNPrint,
    RNHTMLtoPDF
  },
  StyleSheet,
  Text,
  View,
} = React;

var PrintExample = React.createClass({
  componentDidMount() {
    RNHTMLtoPDF.convert({
      html: '<!DOCTYPE html><html><body><h1>My First Web Page</h1> <p>My first paragraph.</p></body> </html>',
    }).then((filePath) => {
      console.log('FilePath', filePath);
      RNPrint.print(filePath).then((jobName) => {
        console.log(`Printing ${jobName} complete!`);
      });
    });
  
  },

  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('PrintExample', () => PrintExample);
