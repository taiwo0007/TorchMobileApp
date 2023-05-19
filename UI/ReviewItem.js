import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { getBasicUser } from "../util/user-http";

export default function ReviewItem({ review }) {
  const [profile, setProfile] = useState();
  const preformattedDate = new Date(review?.reviewDate);
  function timeAgo(date) {
    const now = new Date();
    const secondsPast = (now.getTime() - date.getTime()) / 1000;

    if (secondsPast < 60) {
      return parseInt(secondsPast) + " seconds ago";
    }
    if (secondsPast < 3600) {
      return parseInt(secondsPast / 60) + " minutes ago";
    }
    if (secondsPast <= 86400) {
      return parseInt(secondsPast / 3600) + " hours ago";
    }
    if (secondsPast > 86400) {
      let day = date.getDate();
      let month = date
        .toDateString()
        .match(/ [a-zA-Z]*/)[0]
        .replace(" ", "");
      let year =
        date.getFullYear() === now.getFullYear()
          ? ""
          : " " + date.getFullYear();
      return day + " " + month + year;
    }
  }

  let someDate = new Date(preformattedDate); // 1 month ago
  const timeAgoDate = timeAgo(someDate); // it will return "30 days ago" or the exact date

  useEffect(() => {
    const fetchBasicUserDetails = async () => {
      const fetchedProfile = await getBasicUser(review?.scooter_reviewer);

      setProfile(fetchedProfile);
    };

    try {
      fetchBasicUserDetails();
    } catch (error) {
      console.log(error);
    }
  }, [review]);

  return (
    <View style={{ width: "100%" }} className=" px-4 my-3 flex-1 mx-auto rounded-lg ">
      <View className="flex-row mb-3 lex-1 items-center">
        <Image
          className="w-12 h-12 rounded-full lex-1"
          source={{ uri: profile?.profilePicture }}
        />
        <View className="p-2 justify-between flex-col flex-1">
          <Text style={{ fontFamily: "gros-bold" }}>{profile?.firstName}</Text>
          <Text
            className="text-xs text-slate-600"
            style={{ fontFamily: "gros" }}
          >
            {timeAgoDate}
          </Text>
        </View>
      </View>
      <Text
        className="flex-1"
        style={{ lineHeight: 20, fontFamily: "gros-regular" }}
      >
        {review.comment}.
      </Text>
    </View>
  );
}
