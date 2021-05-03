/**
 * Imports
 */
import api from "./main_services.js";
import {
  URL_GETALLUSERS,
  URL_REGISTER,
  URL_GETUSERID,
} from "./global_variables.js";
import {
  getTokenLocalStorage,
  getUserLocalStorage,
} from "./localstorage_controller.js";

/**
 * Global Variables
 */

let allHTMLUsersData = "";

let tableUsersData = document.getElementById("users-body-table");

let createUserBtn = document.getElementById("createUserBtn");

let newUserName = document.getElementById("newUserName");
let userLastName = document.getElementById("userLastName");
let userEmail = document.getElementById("userEmail");
let userProfile = document.getElementById("userProfile");
let newUserPassword = document.getElementById("newUserPassword");
let newUserPasswordConfirm = document.getElementById("newUserPasswordConfirm");

let editUserName = document.getElementById("editUserName");
let editUserLastName = document.getElementById("editUserLastName");
let editUserEmail = document.getElementById("editUserEmail");
let editUserProfile = document.getElementById("editUserProfile");
let editUserState = document.getElementById("editUserState");
let editUserPassword = document.getElementById("editUserPassword");
let editUserBtn = document.getElementById("editUserBtn");
let userIDDelete = document.getElementById("userIDDelete");
let deleteUserBtn = document.getElementById("deleteUserBtn");

//let newUserModal = new bootstrap.Modal(document.getElementById('newUserModal'), options);
//let newUserBtn = document.getElementById('newUserBtn');

/**
 * @method getAllUsers
 * @description
 */

const getAllUsers = () => {
  allHTMLUsersData = "";
  const token = getTokenLocalStorage();
  const { getUsersData } = api;
  getUsersData(URL_GETALLUSERS, token)
    .then((response) => {
      getUsersDataJson(response);
    })
    .catch((error) => {
      renderMsg(error);
    });
};

/**
 * @method getUsersDataJson
 * @description
 */

const getUsersDataJson = (usersList) => {
  usersList.users.forEach((userItem) => {
    const {
      userID,
      userName,
      userLastName,
      userEmail,
      userProfile,
      userStatus,
    } = userItem;

    allHTMLUsersData += htmlUsersRowData(
      userID,
      userName,
      userLastName,
      userEmail,
      userProfile,
      userStatus
    );
  });

  tableUsersData.innerHTML = allHTMLUsersData;
  addEventListenerEditButton(tableUsersData.querySelectorAll(".edit"));
  addEventListenerDeleteButton(tableUsersData.querySelectorAll(".delete"));
};

/**
 * @method htmlUsersRowData
 * @description
 */

const htmlUsersRowData = (
  userID,
  userName,
  userLastName,
  userEmail,
  userProfile,
  userStatus
) => {
  return `<tr>
        <td class="align-middle pl-5" >
            <input class="ml-3 all-checkbox" type="checkbox" name="checkUser${userID}" data-id="${userID}">
        </td>
        <td class="align-middle pl-5">${userName}</td>
        <td class="align-middle">${userLastName}</td>
        <td class="align-middle pl-5">${userEmail}</td>
        <td class="align-middle">${userProfile}</td>
        <td class="align-middle">${userStatus}</td>
        <td class="align-middle">
            <button type="button" class="btn btn-lg text-black-50 ml-n3 delete" data-id="${userID}" data-toggle="modal" data-target="#deleteUserModal"><i class="fa fa-trash" aria-hidden="true"></i></button>
            <button type="button" class="btn btn-lg text-black-50 edit" data-id="${userID}" data-toggle="modal" data-target="#editUserModal"><i class="fa fa-pencil" aria-hidden="true"></i></button>
        </td>
    </tr>`;
};

/**
 * @method createUser
 * @description: Event Listener Close Modal
 * @returns {}
 */

const createUser = () => {
  const userData = {
    userName: newUserName.value,
    userLastName: userLastName.value,
    userEmail: userEmail.value,
    userProfile: userProfile.value,
    userPassword: newUserPassword.value,
    userImg: "../assets/bono.jpg",
  };
  const { registerUserData } = api;
  const token = getTokenLocalStorage();
  registerUserData(URL_REGISTER, userData, token)
    .then((response) => {
      if (response.message === "Created") {
        swal(
          "",
          `El usuario ${userData.userName} ${userData.userLastName} fue creado exitosamente`,
          "success"
        );
        getAllUsers();
      } else {
        swal("", `${response.message}`, "error");
      }
    })
    .catch((error) => {
      swal("", `${error}`, "error");
    });
};

/**
 * @method loadUserData
 * @description: Event Listener Close Modal
 * @returns {}
 */

const loadUserData = (id) => {
  const { getUserData } = api;
  const token = getTokenLocalStorage();
  getUserData(URL_GETUSERID, token, id)
    .then((response) => {
      if (response.message === "User Found") {
        userID.value = response.user.userID;
        editUserName.value = response.user.userName;
        editUserLastName.value = response.user.userLastName;
        editUserEmail.value = response.user.userEmail;
        editUserProfile.value = response.user.userProfile;
        editUserState.value = response.user.userStatus;
        editUserPassword.value = "";
      } else {
        swal("", `${response.message}`, "error");
      }
    })
    .catch((error) => {
      swal("", `${error}`, "error");
    });
};

/**
 * @method editUserData
 * @description: Event Listener Close Modal
 * @returns {}
 */

const editUserData = () => {
  const { editUserData } = api;
  const token = getTokenLocalStorage();
  const userID = document.getElementById("userID").value;
  const userPassword = editUserPassword.value;
  let passwordUpdated = "No Updated";
  if (userPassword.lenght > 0) {
    passwordUpdated = "Updated";
  }
  const userData = { 
    userName: editUserName.value,
    userLastName: editUserLastName.value,
    userEmail: editUserEmail.value,
    userProfile: editUserProfile.value,
    userStatus: editUserState.value,
    userPassword: userPassword,
    passwordUpdated: passwordUpdated,
    userImg: "../assets/bono.jpg",
  };
  editUserData(URL_GETUSERID, userData, token, userID)
    .then((response) => {
      if (response.message === "Updated user") {
        swal(
          "",
          `El usuario ${userData.userName} ${userData.userLastName} fue actualizado exitosamente`,
          "success"
        );
        getAllUsers();
      } else {
        swal("", `${response.message}`, "error");
      }
    })
    .catch((error) => {
      swal("", `${error}`, "error");
    });
};

/**
 * @method deleteUserData
 * @description: Event Listener Close Modal
 * @returns {}
 */

const deleteUserData = () => {
  const { deleteUserData } = api;
  const token = getTokenLocalStorage();
  const userID = userIDDelete.value;
  deleteUserData(URL_GETUSERID, token, userID)
    .then((response) => {
      if (response.message === "Disabled user") {
        swal("", `El usuario ha sido desabilitado exitosamente`, "success");
        getAllUsers();
      } else {
        swal("", `${response.message}`, "error");
      }
    })
    .catch((error) => {
      swal("", `${error}`, "error");
    });
};

/**
 * @method matchPassword
 * @description: Confirm Password
 * @returns {}
 */

const matchPassword = () => {
  let newPassword = newUserPassword.value;
  let newUserPasswordConfirm = newUserPasswordConfirm.value;
  if (newPassword != newUserPasswordConfirm) {
    swal("", `Los password no coinciden`, "error");
  } else {
    swal("", `El password se ha creado exitosamente`, "success");
  }

};

/**
 * @method addEventListenerEditButton
 * @description: Event Listener Save User
 * @returns {}
 */

const addEventListenerEditButton = (editButtonsList) => {
  editButtonsList.forEach((editBtn) => {
    let userID = editBtn.getAttribute("data-id");
    editBtn.addEventListener(
      "click", () => { loadUserData(userID); }, false );
  });
};

/**
 * @method addEventListenerEditButton
 * @description: Event Listener Save User
 * @returns {}
 */

const addEventListenerDeleteButton = (deleteButtonsList) => {
  deleteButtonsList.forEach((deleteBtn) => {
    let userID = deleteBtn.getAttribute("data-id");
    deleteBtn.addEventListener(
      "click", () => { userIDDelete.value = userID; }, false );
  });
};

/**
 * @method addEventListenerSaveUser
 * @description: Event Listener Save User
 * @returns {}
 */

const addEventListenerSaveUser = () => {
  createUserBtn.addEventListener("click", createUser);
};

/**
 * @method addEventListenerEditUser
 * @description: Event Listener Save User
 * @returns {}
 */

const addEventListenerEditUser = () => {
  editUserBtn.addEventListener("click", editUserData);
};

/**
 * @method addEventListenerDeleteUser
 * @description: Event Listener Save User
 * @returns {}
 */

const addEventListenerDeleteUser = () => {
  deleteUserBtn.addEventListener("click", deleteUserData);
};

/**
 * @method renderMsg
 * @description Render message on the DOM
 * @returns {String}
 */

const renderMsg = (msg) =>
  (document.querySelector(".error-msg").innerHTML = msg);

/**
 * Run
 */

getAllUsers();
addEventListenerSaveUser();
addEventListenerEditUser();
addEventListenerDeleteUser();

//https://www.javatpoint.com/oprweb/test.jsp?filename=confirm-password-validation-in-javascript3

//https://www.geeksforgeeks.org/password-matching-using-javascript/
