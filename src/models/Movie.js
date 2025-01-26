const {DataTypes, Sequelize, Association} = require ('sequelize');

module.exports = (sequelize) => {
    const Movie = sequelize.define('Movie', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        movieName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        movieDescription: {
            type: DataTypes.STRING,
            allowNull: true
        },
        movieRating: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        movieYear: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    });

    Movie.associate = (models) => {
        // associação com user (um filme pertence a um usuário)
        Movie.belongsTo(models.User, {foreignKey: 'userId', as: 'user'});

        // associação com category (muitos filmes podem pertencer a muitas categorias)
        Movie.belongsToMany(models.Category,{through: 'MovieCategory'});
    }

    return Movie;
};