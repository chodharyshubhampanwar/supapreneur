import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Profile } from "../types/types";

const ProfilePage: React.FC = () => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const { username } = useParams<{ username: string }>();
  const { user } = useAuth();

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await axios.get(
        `http://localhost:5000/api/v1/profile/${username}`
      );
      setProfile(res.data.profile);
    };
    fetchProfile();
  }, [username]);

  return (
    <div className="p-4">
      {profile && (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3 p-4">
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src={profile.avatar}
              alt={profile.name}
            />
            <div className="text-sm">
              <p className="text-2xl font-bold mb-2">{profile.name}</p>
              <p className="text-gray-500">{profile.headline}</p>
              <p className="text-gray-500">{profile.location}</p>
            </div>
          </div>
          <p className="mt-2 text-gray-500">{profile.bio}</p>
          {user?.uid === profile.uid && (
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              <a href="/my/details/edit" className="text-white">
                Edit Profile
              </a>
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
