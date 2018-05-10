module.exports = function( sequelize, DataTypes) {
    var Todo = sequelize.define("Todo", {
        text: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                lens: {
                    args: [1,140],
                    msg: 'HIHIHI'
                }
            }
        },
        complete: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
    return Todo;
}