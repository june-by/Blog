module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post',{
        content : {
            type : DataTypes.TEXT,
            allowNull : false,
        },
    },{
        charset : 'utf8mb4',
        collate : 'utf8mb4_general_ci',//한글 + 이모티콘
    });

    Post.associate = (db) => {
        db.Post.hasMany(db.Comment);
        db.Post.hasMany(db.Image);
    };
    return Post;
}