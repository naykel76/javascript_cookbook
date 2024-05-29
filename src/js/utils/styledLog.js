const defaults = {
    color: 'blue',
    fontSize: '12px',
    heading: false
};

export default function styledLog(message, options = defaults) {
    const { heading, color, fontSize } = options;
    console.log(`%c${message}`, `
        color: ${heading ? 'orange' : color};
        font-size: ${heading ? '14px' : fontSize};
        font-weight: bold; 
      `
    );
}
