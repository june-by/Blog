module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User',{
        email : {
            type : DataTypes.STRING(30),
            allowNull : false,
            unique : true // 고유한 값
        },
        nickname : {
            type : DataTypes.STRING(30),
            allowNull : false, //필수
        },
        password : {
            type : DataTypes.STRING(100),
            allowNull : false,
        },
    },{
        charset : 'utf8',
        collate : 'utf8_general_ci',
    });

    User.associate = (db) => {
        db.User.hasMany(db.Comment);
    };
    return User;
}