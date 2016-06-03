var Bank = require( '../bank.js' );
var Account = require( '../account.js' );
var assert = require( 'chai' ).assert


describe( "Bank", function(){

  var codeBank = new Bank( "Code Bank" );

  var davidAccount = new Account( "David", "personal", 500 )
  var alistairAccount = new Account( "Alistair", "personal", 750 )
  var codeClanAccount = new Account( "Code Clan", "business", 10000 )


  it( "Starts with empty array of accounts", function(){
    assert.deepEqual( [], codeBank.accounts )
  } );

  it( "Can add an account", function(){
    codeBank.addAccount( davidAccount )
    assert.deepEqual( [davidAccount], codeBank.accounts )
  } );

  it( "Can find account by owner name", function(){
    assert.deepEqual( davidAccount, codeBank.searchByName( "David" ) )
  } );

  it( "Can find largest account", function(){
    codeBank.addAccount( alistairAccount )
    codeBank.addAccount( codeClanAccount )

    assert.deepEqual( codeClanAccount, codeBank.findLargestAccount() )
  } );

  it( "Can find combined account value", function(){
    assert.deepEqual( 11250, codeBank.findCombinedValue() )
  } );

} )