var Message = React.createClass({

  showMessage: function(){
    alert(this.props.message);
  },
  //unica funcion obligatoria de react
  render: function(){
    return (
      <button onClick={this.showMessage} className="btn btn-lg btn-success">Show Message</button>
    )
  }

});

module.exports = Message;
