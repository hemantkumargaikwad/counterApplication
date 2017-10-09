import React,{ Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as counterActionCreators from '../actions/counter';
import CounterApp from '../components/counterApp';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View, Button
} from 'react-native';

class AppContainer extends Component {
    constructor(props){
        super(props);
        this.onIncrementClick = this.onIncrementClick.bind(this);
        this.onDecrementClick = this.onDecrementClick.bind(this);
    }
    onIncrementClick(){
        debugger;
        this.props.counterActions.increment();
    }
    onDecrementClick(){
        this.props.counterActions.decrement();
    }
    render(){
        return(
            <View style={{flex: 1}}>
                <CounterApp
                    onIncrementClick={this.onIncrementClick}
                    onDecrementClick={this.onDecrementClick}
                    state = {this.props.state}
                />
            </View>
        );
    }
}
const mapStateToProps = state =>({
    state: state.counter
});
const mapDispatchToProps = dispatch =>({
    counterActions: bindActionCreators(counterActionCreators,dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);