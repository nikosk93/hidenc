var encryptor = require('file-encryptor');
var operation = function(func, input, output, key) {
    encryptor[func](input, output, key, {algorithm: 'aes256'}, function(err) {
        if (err)
            return console.log('[ERROR] %s', err);

        console.log('[INFO] Operation completed successfully');
        console.log('[INFO] Output filename: %s', output);
    });
}

module.exports = function(args) {
    if (args.length < 3)
        return console.log('[ERROR] Missing %s arguments', 3 - args.length);

    var mode = args[0];
    var file = args[1];
    var key = args[2];

    if (mode === '--encrypt') {
        operation('encryptFile', file, file + '.enc', key);
    } else if (mode === '--decrypt') {
        operation('decryptFile', file + '.enc', file, key);
    }
}