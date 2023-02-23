import fs from 'fs';
import formidable from 'formidable';

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function upload(req, res) {
    const form = new formidable.IncomingForm();
    form.uploadDir = '/tmp';

    form.parse(req, (err, fields, files) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to parse form data' });
        } else {
            const oldPath = files.vendors.filepath;
            console.log(files)
            console.log(`Reading file from ${oldPath}...`);
            fs.readFile(oldPath, (err, data) => {
                if (err) {
                    console.error(err);
                    res.status(500).json({ error: 'Failed to read uploaded file' });
                } else {
                    const newPath = `./public/data/vendors.tsv`;
                    console.log(`Moving file from ${oldPath} to ${newPath}...`)
                    fs.writeFile(newPath, data, (err) => {
                        if (err) {
                            console.error(err);
                            res.status(500).json({ error: 'Failed to move uploaded file' });
                        } else {
                            res.status(200).json({ message: 'File uploaded successfully' });
                        }
                    });
                }
            });
        }
    });
};
