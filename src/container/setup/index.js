import React from 'react';
import { FlexWrapper } from 'component/wrapper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { message } from 'antd';
import { connect } from 'react-redux';
import {
  FormWrapper,
} from './style';

class Setup extends React.PureComponent{
  state = {
    positiveName: '',
    positiveTitle: '',
    negativeName: '',
    negativeTilte: '',
  }

  onChange = (e, key) => {
    const value = e.target.value;
    this.setState({
      [key]: value
    });
  }

  onSubmit = () => {
    if(Object.values(this.state).indexOf('') >= 0){
      message.warning('请填写所有信息~');
      return;
    }
    this.props.dispatch({
      type: 'UPDATE_PLAYER_INFO',
      positive: {
        name: this.state.positiveName,
        title: this.state.positiveTitle,
      },
      negative: {
        name: this.state.negativeName,
        title: this.state.negativeTitle,
      },
    });
  }

  render(){
    return(
      <FlexWrapper>
        <FormWrapper>
          <TextField
            floatingLabelText="正方学校"
            value={this.state.positiveName}
            onChange={(e) => this.onChange(e, 'positiveName')}
          />
          <TextField
            floatingLabelText="正方辩题"
            value={this.state.positiveTitle}
            onChange={(e) => this.onChange(e, 'positiveTitle')}
          />
          <TextField
            floatingLabelText="反方学校"
            value={this.state.negativeName}
            onChange={(e) => this.onChange(e, 'negativeName')}
          />
          <TextField
            floatingLabelText="反方辩题"
            value={this.state.negativeTitle}
            onChange={(e) => this.onChange(e, 'negativeTilte')}
          />
          <RaisedButton
            label="确定"
            primary={true}
            style={{margin: '40px 0', width: '180px'}}
            onTouchTap={this.onSubmit}
          />
        </FormWrapper>
      </FlexWrapper>
    )
  }
}

function mapStateToProps(state){
  return{
    PlayerInfo: state.PlayerInfo
  }
}

function mapDispatchToProps(dispatch){
  return{
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Setup);