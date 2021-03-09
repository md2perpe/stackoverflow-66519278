// Function in another file calling Foo
import { Foo } from './file';

function getSum() {
    let foo = new Foo(); // I got the below error here!!!
    foo.set();
}