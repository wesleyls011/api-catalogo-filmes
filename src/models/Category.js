const {DataTypes, Sequelize, Association} = require ('sequelize');

module.exports = (sequelize) => {
    const Category = sequelize.define('Category', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        categoryName: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });

    Category.associate = (models) => {
        Category.belongsToMany(models.Movie, {through: 'MovieCategories', as: 'movies'});
    }

    return Category;
};