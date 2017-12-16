interface Name {
  first: string;
}

interface Address {
  zipCode: string;
}

var items: Name[] = [];
var jtems: [Name, Address] = [{first: 'foo'}, {zipCode: '12345'}];
