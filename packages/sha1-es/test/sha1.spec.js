import SHA1 from './../src/sha1';

describe('SHA1', () => {
    describe('#hash', () => {
        it('should return hash for a empty string', () => {
            expect(SHA1.hash('')).toBe('da39a3ee5e6b4b0d3255bfef95601890afd80709');
        });
        it('should return hash for strings (1 character)', () => {
            expect(SHA1.hash('a')).toBe('86f7e437faa5a7fce15d1ddcb9eaeaea377667b8');
        });
        it('should return hash for strings (3 characters)', () => {
            expect(SHA1.hash('abc')).toBe('a9993e364706816aba3e25717850c26c9cd0d89d');
        });
        it('should return hash for strings containing spaces', () => {
            expect(SHA1.hash('message digest')).toBe('c12252ceda8be8994d5fa0290a47231c1d16aae3');
        });
        it('should return hash for strings containing no spaces', () => {
            expect(SHA1.hash('abcdefghijklmnopqrstuvwxyz')).toBe('32d10c7b8cf96570ca04ce37f2a19d84240d3a89');
        });
        it('should return hash for strings containing uppercase, lowercase and numericals', () => {
            expect(SHA1.hash('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789')).toBe('761c457bf73b14d27e9e9265c46f4b4dda11f940');
        });
        it('should return hash for strings containing only numbers (80 characters)', () => {
            expect(SHA1.hash('12345678901234567890123456789012345678901234567890123456789012345678901234567890')).toBe('50abf5706a150990a08b2c5ea40fa0e585554732');
        });
        it('should return hash for strings containing only numbers (160 characters)', () => {
            expect(SHA1.hash('1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890')).toBe('38f11bc1b1f19016e253c31064e04259d944b325');
        });
        it('should return a hash with length 40 characters', () => {
            const hash = SHA1.hash('cryptographic hash function');
            expect(hash.length).toBe(40);
        });
    });
});
