import { describe, expect, it } from '@jest/globals';
import { generatePassword } from './passwordGenerator';

describe('generatePassword', () => {

    // Test to check if the password has the correct length
    it('should generate a password of the correct length', () => {
        const length = 10;
        const password = generatePassword(length, 'medium');
        expect(password.length).toBe(length);
    });

    // Test to check if an error is thrown for too short passwords
    it('should throw an error if password length is less than 4', () => {
        expect(() => generatePassword(3, 'low')).toThrow('Password length must be at least 4 characters.');
    });

    // Test to check if a low strength password contains only lowercase letters
    it('should generate a low strength password with only lowercase letters', () => {
        const password = generatePassword(8, 'low');
        expect(password).toMatch(/^[a-z]+$/); // Regex to match only lowercase letters
    });

    // Test to check if a medium strength password contains letters and numbers
    it('should generate a medium strength password with lowercase, uppercase letters, and numbers', () => {
        const password = generatePassword(10, 'medium');
        expect(password).toMatch(/^[a-zA-Z0-9]+$/); // Regex to match letters and numbers
    });

    // Test to check if a high strength password contains letters, numbers, and symbols
    it('should generate a high strength password with letters, numbers, and symbols', () => {
        const password = generatePassword(12, 'high');
        expect(password).toMatch(/^[a-zA-Z0-9!@#$%^&*()_+\[\]{}|;:,.<>?]+$/); // Regex to match letters, numbers, and symbols
    });
});
