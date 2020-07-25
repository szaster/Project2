// Requiring bcryptfor password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
// const bcrypt = require("bcryptjs");

// Creating our User model

module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define("user", {
    googleId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    displayName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.BLOB("long"),
      allowNull: true,
    },
  });

  User.associate = function (models) {
    //associating user with his posts
    User.hasMany(models.idea, {
      onDelete: "cascade",
    });
  };

  return User;
};
// module.exports = sequelize.model("user", UserSchema);

// module.exports = function(sequelize, DataTypes) {
//   const User = sequelize.define("User", {
//     // The email cannot be null, and must be a proper email before creation
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true,
//       validate: {
//         isEmail: true
//       }
//     },
//     // The password cannot be null
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false
//     }
//   });
// Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
//   User.prototype.validPassword = function(password) {
//     return bcrypt.compareSync(password, this.password);
//   };
//   // Hooks are automatic methods that run during various phases of the User Model lifecycle
//   // In this case, before a User is created, we will automatically hash their password
//   User.addHook("beforeCreate", user => {
//     user.password = bcrypt.hashSync(
//       user.password,
//       bcrypt.genSaltSync(10),
//       null
//     );
//   });
//   return User;
// };
