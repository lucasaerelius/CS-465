const fs = require('fs');
const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf-8'));

/*  Get traveler view */
const travel = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - Travel';
    res.render('travel', {title: pageTitle, trips});
};

module.exports = {
    travel
}