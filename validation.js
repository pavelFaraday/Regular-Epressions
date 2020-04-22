// [0-9] === \d
// ^\d{11}$ --- means only: 12345678901.  !not: abc12345678901 or abc12345678901jnm;   


// Validation scrip here:
var patterns = {
    telephone: /^\d{11}$/
};