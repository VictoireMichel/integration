const Plants = require("../models/modelPlants");
const { Op } = require("sequelize");

function convertMonthToInt(input){
    let monthInt;
    switch(input) {

        case "janvier":
            monthInt = 1;
            break;

        case "fevrier":
            monthInt = 2;
            break;

        case "mars":
            monthInt = 3;
            break;

        case "avril":
            monthInt = 4;
            break;

        case "mai":
            monthInt = 5;
            break;

        case "juin":
            monthInt = 6;
            break;

        case "juillet":
            monthInt = 7;
            break;

        case "aout":
            monthInt = 8;
            break;

        case "septembre":
            monthInt = 9;
            break;

        case "octobre":
            monthInt = 10;
            break;

        case "novembre":
            monthInt = 11;
            break;

        case "decembre":
            monthInt = 12;
            break;

        default:
            monthInt = 0;
    }

    return monthInt;
}

exports.searchPlants = function (req, res) {
    const input = req.query.input;
    let options;
    let intMonth = convertMonthToInt(input);
    if (intMonth !== 0) {
        options = {
            where: {
                [Op.and]: [
                    {
                        monthStart: {
                            [Op.lte]: intMonth
                        }
                    },
                    {
                        monthEnd: {
                            [Op.gte]: intMonth
                        }
                    }
                ]
            }
        };
    } else {
        options = {
            where: {
                [Op.or]: [
                    {
                        name: {
                            [Op.like]: '%' + input + '%'
                        }
                    },
                    {
                        description: {
                            [Op.like]: '%' + input + '%'
                        }
                    },
                    {
                        maintenance: {
                            [Op.like]: '%' + input + '%'
                        }
                    }
                ]
            }
        };
    }
    Plants.findAll(options)
        .then(results => res.json(results))
        .catch(error => console.log(error));
};
