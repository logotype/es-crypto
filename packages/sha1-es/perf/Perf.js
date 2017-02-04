import SHA1 from './../build/sha1-es.min';

const numberWithCommas = (x) => {
    const parts = x.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
};

process.stdout.write('\u001B[2J\u001B[0;0f');
console.log('Running performance tests...');

let i, length = 1000000,
    startDate, dateDiff, rate, relativeRate, SHA1Rate;

// 1st allocation
SHA1.hash('allocate');

i = 0;
startDate = new Date();
for (i; i < length; i++) {
    SHA1.hash(i.toString());
}
dateDiff = new Date() - startDate;
rate = (length / dateDiff) * 1000;
SHA1Rate = rate;
console.log('   SHA1 rate: ' + numberWithCommas(rate.toFixed()) + ' hashes/sec');

i = 0;
startDate = new Date();
for (i; i < length; i++) {
    SHA1.hash(i.toString());
}
dateDiff = new Date() - startDate;
rate = (length / dateDiff) * 1000;
relativeRate = rate / SHA1Rate * 100 - 100;
console.log('   SHA1 rate: ' + numberWithCommas(rate.toFixed()) + ' hashes/sec 0.00 (' + Math.abs(relativeRate).toFixed(2) + '% ' + ((relativeRate >= 0) ? 'faster' : 'slower') + ' than first run)');


console.log('Performance tests ran successfully.');
console.log('');