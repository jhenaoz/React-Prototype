var helloComponent = React.createClass({

  getInitialState: function() {
    return {products:[]};
  },
  componentDidMount : function() {
    var url = 'https://anypoint.mulesoft.com/apiplatform/proxy/http://results-api.cloudhub.io/api/products';
    var self = this;
    this.serverRequest = $.get(url, function(result){
      console.log('testing');
      self.setState({
        products: result
      }
      );
    });
  },
  componentWillUnmount: function() {
    this.serverRequest.abort();
  },
  renderProducts: function(){
    return (
      <div>
        <p>Renderizando Productos</p>
        <ul>
          {this.state.products.map(function(product){
            return <li key={product.id}>{product.name}</li>;
          })}
        </ul>
      </div>
    );
  },
  renderHobies: function(){
    return (
      <ul>
      {
        this.props.hobbies.map(function(hobby){
          return <li key={hobby.name}>{hobby.name}</li>;
        })
      }
      </ul>
    );
  },
  showName: function(){
    alert('Hey');
  },
  render: function(){
    var name = 'hola';
    return (
      <div className="jumbotron">
          <h1>{this.props.name}</h1>
          {this.renderHobies()}
          {this.renderProducts()}
          {this.props.children}
      </div>
    );
  }
});

module.exports = helloComponent;
