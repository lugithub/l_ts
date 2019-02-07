// interface Example {
//   diff(one: string): number;
//   diff(one: string, two: string): number;
//   diff(one: string, two: string, three: boolean): number;
// }

interface Example {
  diff(one: string, two?: string, three?: boolean): number;
}

function fn(x: (a: string) => void) {
  x('1');
}

var x: Example = {
  diff() {
    return 1;
  }
};

// When written with overloads, OK -- used first overload
// When written with optionals, correctly an error
fn(x.diff);