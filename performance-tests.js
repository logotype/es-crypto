import MD5 from './packages/md5-es/build/md5-es.min';
import SHA1 from './packages/sha1-es/build/sha1-es.min';
import SHA256 from './packages/sha256-es/build/sha256-es.min';
import SHA512 from './packages/sha512-es/build/sha512-es.min';

const numberWithCommas = (x) => {
    const parts = x.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
};

process.stdout.write('\u001B[2J\u001B[0;0f');
console.log('Running performance tests...');

let i = 0,
    startDate = null,
    dateDiff = null,
    rate = null,
    MD5Rate = null,
    SHA1Rate = null,
    SHA256Rate = null,
    SHA512Rate = null,
    relativeRate = null;

const length = 5000000;

// 1st allocation
MD5.hash('allocate');

i = 0;
startDate = new Date();
for (i; i < length; i++) {
    MD5.hash(i.toString());
}
dateDiff = new Date() - startDate;
rate = (length / dateDiff) * 1000;
MD5Rate = rate;
console.log(`   MD5 rate: ${numberWithCommas(rate.toFixed())} hashes/sec`);

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
console.log(`   SHA1 rate: ${numberWithCommas(rate.toFixed())} hashes/sec`);

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
console.log(`   SHA256 rate: ${numberWithCommas(rate.toFixed())} hashes/sec`);

// 1st allocation
SHA512.hash('allocate');

i = 0;
startDate = new Date();
for (i; i < length; i++) {
    SHA512.hash(i.toString());
}
dateDiff = new Date() - startDate;
rate = (length / dateDiff) * 1000;
SHA512Rate = rate;
console.log(`   SHA512 rate: ${numberWithCommas(rate.toFixed())} hashes/sec`);

i = 0;
startDate = new Date();
for (i; i < length; i++) {
    MD5.hash(i.toString());
}
dateDiff = new Date() - startDate;
rate = (length / dateDiff) * 1000;
relativeRate = rate / MD5Rate * 100 - 100;
console.log(`   MD5 rate: ${numberWithCommas(rate.toFixed())} hashes/sec 0.00 (${Math.abs(relativeRate).toFixed(2)}% ${((relativeRate >= 0) ? 'faster' : 'slower')} than first run)`);

i = 0;
startDate = new Date();
for (i; i < length; i++) {
    SHA1.hash(i.toString());
}
dateDiff = new Date() - startDate;
rate = (length / dateDiff) * 1000;
relativeRate = rate / SHA1Rate * 100 - 100;
console.log(`   SHA1 rate: ${numberWithCommas(rate.toFixed())} hashes/sec 0.00 (${Math.abs(relativeRate).toFixed(2)}% ${((relativeRate >= 0) ? 'faster' : 'slower')} than first run)`);

i = 0;
startDate = new Date();
for (i; i < length; i++) {
    SHA256.hash(i.toString());
}
dateDiff = new Date() - startDate;
rate = (length / dateDiff) * 1000;
relativeRate = rate / SHA256Rate * 100 - 100;
console.log(`   SHA256 rate: ${numberWithCommas(rate.toFixed())} hashes/sec 0.00 (${Math.abs(relativeRate).toFixed(2)}% ${((relativeRate >= 0) ? 'faster' : 'slower')} than first run)`);

i = 0;
startDate = new Date();
for (i; i < length; i++) {
    SHA512.hash(i.toString());
}
dateDiff = new Date() - startDate;
rate = (length / dateDiff) * 1000;
relativeRate = rate / SHA512Rate * 100 - 100;
console.log(`   SHA512 rate: ${numberWithCommas(rate.toFixed())} hashes/sec 0.00 (${Math.abs(relativeRate).toFixed(2)}% ${((relativeRate >= 0) ? 'faster' : 'slower')} than first run)`);


console.log('Performance tests ran successfully.');
console.log('');