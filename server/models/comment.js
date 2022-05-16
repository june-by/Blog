module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment',{
        content : {
            type : DataTypes.TEXT,
            allowNull : false,
        },
    },{
        charset : 'utf8mb4',
        collate : 'utf8mb4_general_ci',
    });

    Comment.associate = (db) => {
        db.Comment.belongsTo(db.User); //belongsTo가 되면 UserId, PostId column이 생긴다.
        db.Comment.belongsTo(db.Post);
    };
    return Comment;
}