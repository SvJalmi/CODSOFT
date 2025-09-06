function sine(angle) {
    return Math.sin(angle * (Math.PI / 180));
}

function cosine(angle) {
    return Math.cos(angle * (Math.PI / 180));
}

function tangent(angle) {
    return Math.tan(angle * (Math.PI / 180));
}

function logarithm(value) {
    return Math.log10(value);
}

function exponentiate(base, exponent) {
    return Math.pow(base, exponent);
}

function exponential(value) {
    return Math.exp(value);
}

export { sine, cosine, tangent, logarithm, exponentiate, exponential };
