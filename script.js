/**
 * Validates a credit card number and determines its card type based on predefined patterns.
 *
 * @param {string} cardNumber - The credit card number to validate.
 * @returns {string} - The name of the card type if matched, or 'Unknown Card Type' if no match is found.
 *
 * @example
 * // Returns 'Visa'
 * validateCardNumber('4111111111111111');
 *
 * @example
 * // Returns 'MasterCard'
 * validateCardNumber('5555555555554444');
 *
 * @example
 * // Returns 'Unknown Card Type'
 * validateCardNumber('1234567890123456');
 *
 * @description
 * This function uses regular expressions to match the provided card number against
 * a list of known card type patterns, including Visa, MasterCard, American Express,
 * Discover, and others. Each card type has a specific pattern that defines its valid
 * number format. If the card number matches a pattern, the corresponding card type
 * name is returned. Otherwise, 'Unknown Card Type' is returned.
 */
function validateCardNumber(cardNumber) {
    const cardPatterns = [
        { 
            name: "MasterCard", 
            // Matches 16-digit numbers starting with 51–55 or 2221–2720
            pattern: /^(5[1-5]\d{14}|222[1-9]\d{12}|22[3-9]\d{13}|2[3-6]\d{14}|27[0-1]\d{13}|2720\d{12})$/ 
        },
        { 
            name: "Visa", 
            // Matches numbers starting with 4 of length 13, 16 or 19
            pattern: /^4(\d{12}|\d{15}|\d{18})$/ 
        },
        { 
            name: "Visa Electron", 
            // Matches 16-digit numbers beginning with one of the listed prefixes
            pattern: /^(4026|417500|4508|4844|4913|4917)\d{12}$/ 
        },
        { 
            name: "American Express", 
            // Matches 15 digits starting with 34 or 37
            pattern: /^3[47]\d{13}$/ 
        },
        { 
            name: "Diners Club", 
            // Matches 14-digit numbers starting with 300-305 or 36, 38 or 39
            pattern: /^(30[0-5]\d{11}|3(?:6|8|9)\d{12})$/ 
        },
        { 
            name: "Discover", 
            // Matches 16-digit Discover numbers with various patterns
            pattern: /^(6011\d{12}|65\d{14}|64[4-9]\d{13}|622(12[6-9]|1[3-9]\d|[2-8]\d{2}|9[0-1]\d|92[0-5])\d{10})$/ 
        },
        { 
            name: "enRoute", 
            // Matches 15 digits starting with 2014 or 2149
            pattern: /^(2014|2149)\d{11}$/ 
        },
        { 
            name: "JCB", 
            // Matches 16-digit numbers starting with 3528–3589 (approximation)
            pattern: /^(35(2[8-9]|[3-8]\d|9[0-8])\d{12})$/ 
        },
        { 
            name: "Maestro", 
            // Matches 12–19 digits starting with 50 or between 56 and 69
            pattern: /^(50\d{10,17}|5[6-9]\d{11,17})$/ 
        },
        { 
            name: "Solo", 
            // Matches numbers starting with 6334 or 6767 with 16, 18 or 19 digits
            pattern: /^((6334|6767)(\d{12}|\d{14}|\d{15}))$/ 
        },
        { 
            name: "Switch", 
            // Matches numbers starting with the listed prefixes and valid lengths
            pattern: /^((4903|4905|4911|4936)\d{12}|(564182|633110)\d{10}|(6333|6759)\d{12})$/ 
        },
        { 
            name: "Laser", 
            // Matches 16 to 19 digits starting with one of the listed prefixes
            pattern: /^((6304|6706|6771|6709)\d{12,15})$/ 
        }
    ];

    for (const card of cardPatterns) {
        if (card.pattern.test(cardNumber)) {
            return card.name;
        }
    }
    return 'Unknown Card Type';
}

document.getElementById('validateButton').addEventListener('click', function() {
    /**
     * Retrieves the trimmed value of the input field with the ID 'cardNumber'.
     * This value is expected to represent a credit card number entered by the user.
     *
     * @type {string} The trimmed credit card number input by the user.
     */
    let cardNumber = document.getElementById('cardNumber').value.trim();
    cardNumber = cardNumber.replace(/\s+/g, ''); // Remove all spaces
    const cardFlag = validateCardNumber(cardNumber);
    alert(`Card Type: ${cardFlag}`);
});