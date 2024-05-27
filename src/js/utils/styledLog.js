export default function styledLog(message, color = 'blue', ...additionalArgs) {
    console.log(`%c${message}`, `color: ${color}; font-weight: bold;`, ...additionalArgs);
}
