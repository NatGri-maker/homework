function primesTo(num)
{
    let store  = [], i, j, primes = [];
    for (i = 2; i <= num; ++i)
    {
        if (!store [i])
        {
            primes.push(i);
            for (j = i << 1; j <= num; j += i)
            {
                store[j] = true;
            }
        }
    }
    return primes;
}

console.log(primesTo(20));

console.log(primesTo(33));