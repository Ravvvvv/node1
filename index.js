const fs = require('fs');
const path = require('path');


fs.readdir(path.join(__dirname, 'data'), function (err, files) {
    if (err) {
        console.log(err);
    } else {
        console.log(files);

        fs.mkdir(path.join(__dirname, 'average'), function (err) {
            if (err) {
                if (err.code === 'EEXIST') {
                    console.log('Folder juz istnieje');
                }
                console.log(err);

            } else {
                console.log('stworzono folder');
            }
        });



        files.forEach(function (file, index) {

            fs.readFile(path.join(__dirname, 'data', file), 'utf8', function (err, data) {

                let sum = 0;
                let studentsCount = 0;

                if (err) {
                    console.log(err);
                } else {

                    let studentsData = JSON.parse(data);

                    for (let studentData of studentsData) {
                        sum += studentData.mark;
                        studentsCount++;
                    }

                }

                console.log(sum);

                fs.writeFile(path.join(__dirname, 'average', 'result-year-' + (index + 1) + '.txt'), (sum / studentsCount).toString(), function (err) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('Stworzono plik');
                    }
                })

            });
        });
    }
});


