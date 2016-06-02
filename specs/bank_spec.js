var Bank = require( '../bank.js' );
var Account = require( '../account.js' );
var assert = require( 'chai' ).assert


describe( "Bank", function(){

  var royalbank = new Bank( "Royal Bank" );

  var davidAccount = new Account( "David", "personal", 500 )

  it( "Starts with empty array of accounts", function(){
    assert.deepEqual( [], royalbank.accounts )
  } );

  it( "Can add an account", function(){
    royalbank.addAccount( davidAccount )
    assert.deepEqual( [davidAccount], royalbank.accounts )
  } );

  it( "Can find account by owner name", function(){
    assert.deepEqual( davidAccount, royalbank.searchByName( "David" ) )
  } );

} )