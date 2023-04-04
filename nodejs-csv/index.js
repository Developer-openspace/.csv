const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const csvWriter = createCsvWriter({
    path: 'example.csv',
    header: [
        {id: 'name', title: 'Name'},
        {id: 'age', title: 'Age'},
        {id: 'country', title: 'Country'},
    ]
});

const data = [
    {name: 'John', age: '25', country: 'USA'},
    {name: 'Mary', age: '30', country: 'Canada'}
];

csvWriter.writeRecords(data)
    .then(() => console.log('The CSV file was written successfully'));
