const {Pool} = require('pg');

const connectStr = 'postgres://lazputcqsafkhb:bd4a02b9f3350058152f1107c3dc98354c445ae919edfbb83b93e7f9b69561b1@ec2-18-213-219-169.compute-1.amazonaws.com:5432/dajgftgss5vb5d';
const pool = new Pool({
    connectionString: connectStr,
    ssl: true
});

module.exports = pool;