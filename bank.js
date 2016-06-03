var _ = require( 'lodash' );

var Bank = function( name ){
  this.name = name;
  this.accounts = [];
}

Bank.prototype = {
  
  addAccount: function( account ){
    this.accounts.push( account )
  },

  searchByName: function( accountName ){
    var result = _.find( this.accounts, function(account ) { 
      return account.name === accountName; 
    });
    return result;
  },

  // filteredAccounts: function( type ){
    
  // },

  findLargestAccount: function(){
    var largest = this.accounts[0];
    this.accounts.forEach( function( account ){
      if( account.value > largest.value ){
        largest = account
      }
    } )
      return largest;
  },

  findCombinedValue: function(){
    var total = 0;
    
  }

};

module.exports = Bank;