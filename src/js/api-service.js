import shortid from "shortid";

export const fetchAllUsers = () => {
  console.log(fetchAllUsers);
};
export const fetchUserById = (id) => {
  console.log(fetchUserById);
};

export const updateUserById = (id) => {
  console.log(updateUserById);
};

export const x = 5;

export const y = "mango";


export const addUser = (name)=>{
	const user ={
		id: shortid.generate(),
		name:shortid.generate(),
	}
	console.log(user);
}

