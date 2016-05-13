var Products = React.createClass({

  render: function() {
      return (
        <ul>
          {
            this.props.products.map(function(product){
              return <li key={product.id}>{product.name}</li>;
            })
          }
        </ul>
      );
  }

});

module.exports = Products;
