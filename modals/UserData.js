const express = require('express')
const app = express()

const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  comment_id: Number,
  text: String,
});

const userSchema = new mongoose.Schema({
  user_index: Number,
  profile_pic: String,
  username: String,
  main_pic: String,
  likes: Number,
  description: String,
  comments: [commentSchema],
});

 const UserModel = mongoose.model("UserData", userSchema);
 module.exports = UserModel
  
const userData = [
    {
        "user_index": 1,
        "profile_pic": "https://4.bp.blogspot.com/-7lKcs3VI8Kg/WtgJ__1RxaI/AAAAAAAAF9Q/6XFIxYxnGkspQc7-kvDMlzf-8cx0_khewCEwYBhgL/s1600/best%2Bprofile%2Bpics.png",
        "username": "Iron_Man91",
        "main_pic": "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?cs=srgb&dl=beef-bread-buns-1633578.jpg&fm=jpg",
        "likes": 150,
        "description": "Explore the vibrant world of Cardify, a cutting-edge social platform that brings people together through captivating visuals and engaging content. Immerse yourself in stunning images, curated by a diverse community of creators. ",
        "comments": [
          {
            "comment_id": 1,
            "text": "Great pic!"
          },
          {
            "comment_id": 2,
            "text": "Awesome!"
          }
        ]
      },
      {
        "user_index": 2,
        "profile_pic": "https://i.pinimg.com/originals/2b/a2/45/2ba2455ca817f7659e9ebfe9d494c5db.jpg",
        "username": "Super_Man",
        "main_pic": "https://tse2.mm.bing.net/th?id=OIP.033vYDcXI0ekUO6g-NLFqwHaF5&pid=Api&P=0&h=220",
        "likes": 200,
        "description": "Explore the vibrant world of Cardify, a cutting-edge social platform that brings people together through captivating visuals and engaging content. Immerse yourself in stunning images, curated by a diverse community of creators. ",
        "comments": [
          {
            "comment_id": 3,
            "text": "Love it!"
          },
          {
            "comment_id": 4,
            "text": "Beautiful!"
          }
        ]
      },
      {
        "user_index": 3,
        "profile_pic": "https://i.pinimg.com/originals/73/16/f5/7316f550de9ca0045e3d8d98a5bb5e44.png",
        "username": "Danny89",
        "main_pic": "https://cdn.healthnwell.com/healthnwell/wp-content/uploads/2018/04/8bef1965-2404-4929-ab29-1fdb1eb3b69f.jpg",
        "likes": 120,
        "description": "Explore the vibrant world of Cardify, a cutting-edge social platform that brings people together through captivating visuals and engaging content. Immerse yourself in stunning images, curated by a diverse community of creators. ",
        "comments": [
          {
            "comment_id": 5,
            "text": "Stunning!"
          }
        ]
      },
      {
        "user_index": 4,
        "profile_pic": "https://i.pinimg.com/originals/22/1f/9b/221f9bfaca1637d461c41dac522c7764.jpg",
        "username": "Bruce_Banner",
        "main_pic": "https://tse2.mm.bing.net/th?id=OIP.TmH72eCWngaHuGs7yqS_1AHaE8&pid=Api&P=0&h=220",
        "likes": 180,
        "description": "Explore the vibrant world of Cardify, a cutting-edge social platform that brings people together through captivating visuals and engaging content. Immerse yourself in stunning images, curated by a diverse community of creators. ",
        "comments": [
          {
            "comment_id": 6,
            "text": "Impressive!"
          },
          {
            "comment_id": 7,
            "text": "Wonderful!"
          }
        ]
      },
      {
        "user_index": 5,
        "profile_pic": "https://i.pinimg.com/originals/57/23/47/5723472aa9cd319ea2d8cb35fb3bcc9b.jpg",
        "username": "Spider_Man",
        "main_pic": "https://tse3.mm.bing.net/th?id=OIP.V89cFcmqwTOusWDBtEFkjgHaKS&pid=Api&P=0&h=220",
        "likes": 250,
        "description": "Explore the vibrant world of Cardify, a cutting-edge social platform that brings people together through captivating visuals and engaging content. Immerse yourself in stunning images, curated by a diverse community of creators. ",
        "comments": [
          {
            "comment_id": 8,
            "text": "Fantastic!"
          }
        ]
      },
      {
        "user_index": 6,
        "profile_pic": "https://cdn.dribbble.com/users/5534/screenshots/14230133/profile_4x.jpg",
        "username": "Doctor_Strange",
        "main_pic": "https://tse3.mm.bing.net/th?id=OIP.ta18G-oRFnAAPAUDOSU4FAHaEK&pid=Api&P=0&h=220",
        "likes": 300,
        "description": "Explore the vibrant world of Cardify, a cutting-edge social platform that brings people together through captivating visuals and engaging content. Immerse yourself in stunning images, curated by a diverse community of creators. ",
        "comments": [
          {
            "comment_id": 9,
            "text": "Incredible!"
          },
          {
            "comment_id": 10,
            "text": "Brilliant!"
          }
        ]
      },
      {
        "user_index": 7,
        "profile_pic": "https://tse4.mm.bing.net/th?id=OIP.uE79C6VxtczBZDZ4tDjr2QHaLG&pid=Api&P=0&h=220",
        "username": "Thor25",
        "main_pic": "https://tse2.mm.bing.net/th?id=OIP._3Mf0cvS0aV2zotVsWnu1QHaEo&pid=Api&P=0&h=220",
        "likes": 130,
        "description": "Explore the vibrant world of Cardify, a cutting-edge social platform that brings people together through captivating visuals and engaging content. Immerse yourself in stunning images, curated by a diverse community of creators. ",
        "comments": [
          {
            "comment_id": 11,
            "text": "Superb!"
          }
        ]
      },
      {
        "user_index": 8,
        "profile_pic": "https://tse4.mm.bing.net/th?id=OIP.Ux0Gfd7fxdPV1JxVaASlrQHaKo&pid=Api&P=0&h=220",
        "username": "Natasha14",
        "main_pic": "https://tse4.mm.bing.net/th?id=OIP.sM0BdtdEsxl-4roCDkKmZAHaEB&pid=Api&P=0&h=220",
        "likes": 220,
        "description": "Explore the vibrant world of Cardify, a cutting-edge social platform that brings people together through captivating visuals and engaging content. Immerse yourself in stunning images, curated by a diverse community of creators. ",
        "comments": [
          {
            "comment_id": 12,
            "text": "Amazing!"
          }
        ]
      },
      {
        "user_index": 9,
        "profile_pic": "https://tse2.mm.bing.net/th?id=OIP.Kh83ngBen4bELX8RmYjd-gHaJQ&pid=Api&P=0&h=220",
        "username": "Hulk25",
        "main_pic": "https://tse2.mm.bing.net/th?id=OIP.UDanlWEWoHTBfNrT5xhFHAHaEK&pid=Api&P=0&h=220",
        "likes": 170,
        "description": "Explore the vibrant world of Cardify, a cutting-edge social platform that brings people together through captivating visuals and engaging content. Immerse yourself in stunning images, curated by a diverse community of creators. ",
        "comments": [
          {
            "comment_id": 13,
            "text": "Impressive!"
          },
          {
            "comment_id": 14,
            "text": "Beautiful!"
          }
        ]
      },
      {
        "user_index": 10,
        "profile_pic": "https://i.pinimg.com/originals/81/1a/98/811a988c58e5998e6e9b347a4982acf8.jpg",
        "username": "Iron_man3000",
        "main_pic": "https://tse2.mm.bing.net/th?id=OIP.U9FnAG-hhbPJWGGsOpwIkQHaEo&pid=Api&P=0&h=220",
        "likes": 190,
        "description": "Explore the vibrant world of Cardify, a cutting-edge social platform that brings people together through captivating visuals and engaging content. Immerse yourself in stunning images, curated by a diverse community of creators. ",
        "comments": [
          {
            "comment_id": 15,
            "text": "Lovely!"
          }
        ]
      }
  ];

  // this code is to insert data in mongodb
  
//   UserModel.insertMany(userData)
//     .then((result) => {
//       console.log('Data inserted successfully:', result);
//     })
//     .catch((error) => {
//       console.error('Error inserting data:', error);
//     })
//     .finally(() => {
//       // Close the Mongoose connection when done
//       mongoose.connection.close();
//     });
  
   