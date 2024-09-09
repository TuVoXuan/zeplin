export function makeStringUnpredictableEnd(str, numChars) {
    const totalLength = str.length;
    const startReplaceIndex = Math.max(0, totalLength - numChars);
    let unpredictableStr = '';

    for (let i = 0; i < totalLength; i++) {
        const char = str[i];

        if (i >= startReplaceIndex) {
            unpredictableStr += '*';
        } else {
            unpredictableStr += char;
        }
    }

    return unpredictableStr;
}