const arguments = [
    '--require-module @babel/register',
    'e2e/features/*/*.feature',
    '--publish-quiet'
].join(' ');

module.exports = {
    default: arguments
}