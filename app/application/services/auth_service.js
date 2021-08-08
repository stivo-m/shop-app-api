const User = require("../../domain/entities/UserEntity");
const bcrypt = require("bcryptjs");
const strings = require("../../domain/value_objects/strings");

class AuthService {
	loginWithEmailAndPassword = async ({ email, password }) => {
		//    login with email and password
		const profile = await User.findById(userID);
		// check account found and verify password

		if (!profile || !bcrypt.compareSync(password, profile.password)) {
			// authentication failed
			return strings.user_not_found_error;
		} else {
			return profile;
		}
	};

	registerWithEmailAndPassword = async ({ name, email, password }) => {
		//    register with email and password
		const hashedPassword = bcrypt.hashSync(password, 10);

		let user = new User({
			name: name,
			email: email,
			password: hashedPassword,
		});

		await user.save();
		return user;
	};

	removeUser = async ({ userID }) => {
		// removes the user with this userID
	};

	profile = async ({ userID }) => {
		const profile = await User.findById(userID);

		if (profile != null) {
			return profile;
		}
	};

	updateProfile = async ({ userID, name, email, password }) => {
		// returns the updated user profile
	};
}

module.exports = AuthService;
