import React, { Component } from 'react';
import { Text, TextInput, View, Button} from 'react-native';
import  data from './data'

export default class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {"index": 1};
  }

  render() {
    return (
        <View style={{padding: 20}}>
          <Text style={{padding: 20, fontSize: 20}}>
            {data[this.state.index].question}
          </Text>
          {
            data[this.state.index].answers.map((answer)=>{

              return <Button
                  key={answer.index}
                  onPress={() => {this.setState({"index": answer.goto})}}
                  title={answer.text}
                  color="#841584"
              />
            })
          }

        </View>
    );
  }
}
