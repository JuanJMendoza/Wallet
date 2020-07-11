import React, { Component } from "react";
import { Container, Text, Item, Form, Input, Button, Label } from "native-base";
import { connect } from "react-redux";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }
  render() {
    return (
      <Container>
        <Form>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input onChangeText={(text) => this.setState({ email: text })} />
          </Item>
          <Item floatingLabel secureTextEntry>
            <Label>Password</Label>
            <Input onChangeText={(text) => this.setState({ password: text })} />
          </Item>
        </Form>
        <Button
          block
          style={{ margin: 20, marginTop: 40 }}
          primary
          onPress={this.props.handleSubmit(
            this.state.email,
            this.state.password
          )}
        >
          <Text>LOGIN</Text>
        </Button>
      </Container>
    );
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleSubmit(email, password) {
      // dispatch(LogInScreen(email, password));
    },
  };
};

export default connect(null, mapDispatch)(Login);
