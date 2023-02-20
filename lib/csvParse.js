import * as fs from "fs";

const csv = () => {
    const parse = (csvString) => {
        const rows = csvString.split('\n');
        const headers = rows[0].split(',');
        const data = rows.slice(1).map(row => {
            const values = row.split(',');
            const entry = {};
            headers.forEach((header, index) => {
                entry[header] = values[index];
            });
            return entry;
        });
        return data;
    }
    const parseFile = (path) => {
        let str = fs.readFileSync(path, 'utf8');
        return parse(str);
    }

    return {
        parse,
        parseFile
    }
}

export default csv();
