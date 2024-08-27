type PasswordStrength = 'low' | 'medium' | 'high';

export function generatePassword(length: number, strength: PasswordStrength): string {
    // Character sets for different password strengths
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

    // Choose characters based on the selected strength
    let charset = '';
    if (strength === 'low') {
        charset = lowercase;
    } else if (strength === 'medium') {
        charset = lowercase + uppercase + numbers;
    } else if (strength === 'high') {
        charset = lowercase + uppercase + numbers + symbols;
    }

    // Simple validation to ensure password length is sufficient
    if (length < 4) {
        throw new Error('Password length must be at least 4 characters.');
    }

    // Generate the password by picking random characters from the charset
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    return password; // Return the generated password
}
