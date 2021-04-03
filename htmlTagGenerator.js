const htmlGenerator = (title, typeOfTag) => {
    return `
        <h${typeOfTag}>${title}<h${typeOfTag}>
    `
} 

htmlTagGenerator('whats up', 1);
