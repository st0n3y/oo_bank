var _ = require( 'lodash' );

var Bank = function( name ){
  this.name = name;
  this.accounts = [];
}

Bank.prototype = {
  
  addAccount: function( account ){
    this.accounts.push( account )
  },

  searchByName: function( accountName ) {
    var result = _.find( this.accounts, function(account) { 
      return account.name === accountName; 
    });
    return result;
  }

};

module.exports = Bank;