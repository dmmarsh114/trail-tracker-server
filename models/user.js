module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        username: { type: DataTypes.STRING, allowNull: false, unique: true },
        password: { type: DataTypes.STRING, allowNull: false },
        email: { type: DataTypes.STRING, allowNull: true },
        firstName: { type: DataTypes.STRING, allowNull: true },
        lastName: { type: DataTypes.STRING, allowNull: true },
        // location: { type: DataTypes.JSON, allowNull: false }
    })
    return User;
}