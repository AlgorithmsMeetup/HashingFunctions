###Hashing Functions

A hashing function is a function that takes some input (for this repo, we’ll be dealing with strings), and outputs a whole number within a specified range.  Hashing functions have four main properties to conform to:

1. Determinism

  Given the same inputs, a hashing function should always return the same output, regarless of when or how many times the function is invoked.

2. Defined ranged

  The output of a hashing function should be within 0 and the range value, not including the range value.  For instance, if the range is 20, the function should always return a value from 0 to 19.

3. Uniformity

  The probability of the function returning any given output should be equal.  That means that if the range is 10, the probability that an input will return a specific value should be 10%.  Counterexample: a hashing function that is biased to an output of 5 (meaning that it tends to return 5) has a much higher probability of returning 5 than 0, so this is not uniformly distributed.

4.  Irreversible

  Given the output of a hashing function, it should not be possible to reverse the operation to retrieve the input value.


If you’re curious to read more, check out the [Wikipedia page for Hash Functions](http://en.wikipedia.org/wiki/Hash_function).



###Bloom Filters

Bloom Filters are space efficient data structures that can be used to store sets and determine if an element is a member of that set.  The key to a good bloom filter is good hashing functions.  For each bloom filter, there is an optimal size, number of elements to store, and number of hashing functions (all of which can be probabilistically determined).

Bloom filters store data by creating a signature for each value input, and storing that signature in the bits of an array.  Then, when we want to check for the existence of a value within the bloom filter, we will generate its signature, and check if that signature exists within the bloom filter.  If it does, then the value is in the bloom filter, otherwise, the value is not present.

Unfortunately, some of these signatures can overlap, leading to bloom filters sometimes returning a false positive result (i.e. reporting that a value exists within the filter although it’s never been added).  A good bloom filter will have a very low false positive rate, say less than 0.05%.  Again, this can all be calculated and predicted based on the number of values stored, the size of the filter, and the number of hashing functions being used.  (You guessed it, there is an optimal number of each of those, but we won’t worry about those now.)


If you’re interested in determining the optimal value for each property, check out [bloom filters on Wikipedia](http://en.wikipedia.org/wiki/Bloom_filter).  There’s also an excellent visualization for bloom filters [here](http://www.jasondavies.com/bloomfilter/).
