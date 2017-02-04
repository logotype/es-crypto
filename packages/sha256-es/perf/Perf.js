import SHA256 from './../build/sha256-es.min';

const numberWithCommas = (x) => {
    const parts = x.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
};

process.stdout.write('\u001B[2J\u001B[0;0f');
console.log('Running performance tests...');

let i, length = 1000000,
    startDate, dateDiff, rate, relativeRate, SHA256Rate;

// 1st allocation
SHA256.hash('allocate');

i = 0;
startDate = new Date();
for (i; i < length; i++) {
    SHA256.hash(i.toString());
}
dateDiff = new Date() - startDate;
rate = (length / dateDiff) * 1000;
SHA256Rate = rate;
console.log('   SHA256 rate: ' + numberWithCommas(rate.toFixed()) + ' hashes/sec');

i = 0;
startDate = new Date();
for (i; i < length; i++) {
    SHA256.hash(i.toString());
}
dateDiff = new Date() - startDate;
rate = (length / dateDiff) * 1000;
relativeRate = rate / SHA256Rate * 100 - 100;
console.log('   SHA256 rate: ' + numberWithCommas(rate.toFixed()) + ' hashes/sec 0.00 (' + Math.abs(relativeRate).toFixed(2) + '% ' + ((relativeRate >= 0) ? 'faster' : 'slower') + ' than first run)');


console.log('Performance tests ran successfully.');
console.log('');