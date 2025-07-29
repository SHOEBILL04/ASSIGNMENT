export const authors = [
  {
    id: 1,
    name: "Rakibul Islam",
    bio: "Technology writer and software developer with 10 years of experience.",
    avatar: "https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg",
    postsCount: 24,
    followers: 1420
  },
  {
    id: 2,
    name: "Shomrat Shahjahan",
    bio: "Frontend developer passionate about React and UX design.",
    avatar: "https://www.thefamouspeople.com/profiles/images/shah-jahan-4.jpg",
    postsCount: 18,
    followers: 890
  },
  {
    id: 3,
    name: "Shomrat Babar",
    bio: "Full-stack developer and open source contributor.",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Idealized_portrait_of_Babur_%281483-1530%29_in_Persian_style%2C_painted_circa_1605-1615_in_India_%28British_Museum_1921%2C1011%2C0.3%29.jpg/330px-Idealized_portrait_of_Babur_%281483-1530%29_in_Persian_style%2C_painted_circa_1605-1615_in_India_%28British_Museum_1921%2C1011%2C0.3%29.jpg",
    postsCount: 42,
    followers: 2560
  },
  {
    id: 4,
    name: "Abdul Hakim",
    bio: "Backend developer specializing in Node.js and database management.",
    avatar: "https://tse3.mm.bing.net/th/id/OIP.jS1YBIz4BuEGO2F0SYjKSwHaGY?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    postsCount: 30,
    followers: 1100
  }
];

export const posts = [
  {
    id: 1,
    title: "Hello Everyone!!",
    content: "Share your opinions on the latest tech trends and innovations.",
    author: authors[0],
    date: "2025-06-15",
    likes: 24,
    comments: [
      {
        id: 1,
        author: authors[1],
        content: "Great introduction to hooks!",
        date: "1666-05-16",
        likes: 5
      },
      {
        id: 2,
        author: authors[2],
        content: "Very helpful, thanks for sharing!",
        date: "1529-05-17",
        likes: 3
      }
    ]
  },
  {
    id: 2,
    title: "Understanding JavaScript Promises",
    content: "Promises are a powerful way to handle asynchronous operations in JavaScript...",
    author: authors[1],
    date: "2025-06-16",
    likes: 12,
    comments: []
  }
];

// Start from 3 since id 1 and 2 are already used
for (let i = 3; i <= 15; i++) {
  const randomAuthor = authors[Math.floor(Math.random() * authors.length)];
  posts.push({
    id: i,
    title: `Post Title ${i}`,
    content: `This is the content for post ${i}. It contains some sample text to demonstrate the blog application.`,
    author: randomAuthor,
    date: `2025-05-${10 + i}`,
    likes: Math.floor(Math.random() * 50),
    comments: []
  });
}
