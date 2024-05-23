// import React, { useEffect, useState } from "react";
// import useAuthStore from "../store/authStore";
// import useUserProfileStore from "../store/userProfileStore";
// import useShowToast from "./useShowToast";

// const useFollowUser = () => {
//   const [isUpdating, setIsUpdating] = useState(false);
//   const [isFollowing, setIsFollowing] = useState(false);
//   const { authUser, setAuthUser } = useAuthStore();
//   const { userProfile, setUserProfile } = useUserProfileStore();
//   const showToast = useShowToast();

//   const handleFollowUser = async () => {
//     setIsUpdating(true);
//     try {

//     } catch (error) {
//       showToast("Error", error.message, "error");
//     } finally {
//       setIsUpdating(false);
//     }
//   };
//   useEffect(() => {
//     if (authUser) {
//       const isFollowing = authUser.following.includes(userId);
//       setIsFollowing(isFollowing);
//     }
//   }, [authUser, userId]);
//   return { isUpdating, isFollowing, handleFollowUser };
// };

// export default useFollowUser;
